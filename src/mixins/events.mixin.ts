import {
  CoordsArr,
  EventsMixinProps,
  Extent,
  SearchItem,
  ZoomToExtentOptions,
} from "@/components/Map.model";
import {
  getCoordsAndTextFromFeature,
  getTitleFromData,
  getClusterExtent,
  transformCoords,
  getFeatureExtent,
} from "../utils";

export function eventsMixin({
  map,
  mainMarker,
  mainMarkerCoords,
  searchMarkers,
  api,
  emits,
  resultHoverCallback,
  resultClickCallback,
  markerHoverCallback,
  zoomOnMarkerClick,
  zoomOnResultClick,
  popupOnMarkerHover,
  popupOnResultHover,
  setupOverlay,
  overlay,
  changeOverlayStats,
  addMarkers,
  clusterMode,
}: EventsMixinProps) {
  /**
   * Sets the required events up for the map.
   */
  const setupMapEvents = () => {
    setupClickEvent();
    setupZoomEvent();
    setupMarkerHoverEvent();
  };

  const setupClickEvent = () => {
    map.value.on("click", (event: any) => {
      handleClickEvent(event);
    });
  };
  /**
   * Emits the new zoom value
   */
  const setupZoomEvent = () => {
    let currentZoom: number = map.value.getView().getZoom();
    map.value.on("moveend", () => {
      const newZoom: number = map.value.getView().getZoom();
      if (currentZoom != newZoom) {
        emits("on-zoom", newZoom);
        currentZoom = newZoom;
      }
    });
  };
  /**
   * Sets up hover event for marker popups
   */
  const setupMarkerHoverEvent = () => {
    setupOverlay();
    map.value.on("pointermove", function (evt: any) {
      const hoveredFeature = getFeatureFromEvent(evt);
      if (hoveredFeature) {
        const { featCoords, featText } =
          getCoordsAndTextFromFeature(hoveredFeature);
        if (clusterMode) {
          if (featText && featText.length === 1) {
            if (popupOnMarkerHover) {
              changeOverlayStats({ text: featText[0], coords: featCoords });
            }
            return;
          }
        } else {
          if (featText && typeof featText === 'string') {
            if (popupOnMarkerHover) {
              changeOverlayStats({ text: featText, coords: featCoords });
            }
            return;
          }
        }
        if (markerHoverCallback) {
          markerHoverCallback({ changeOverlayStats, map })
        }
      }
      overlay.value.setPosition(undefined);
    });
  };

  /**
   * After clicking on map, if there is no feature in there,
   * sets a marker on that coords.
   * Sends a request to api.reverse and labels the marker
   * else it zooms and expands on that feature
   * Then emits an event named 'on-click'.
   * @param event - Map click event.
   */
  const handleClickEvent = (event: any) => {
    map.value.removeLayer(mainMarker.value);
    const selectedFeature = getFeatureFromEvent(event);
    if (selectedFeature) {
      if (zoomOnMarkerClick) {
        clusterMode
          ? zoomToCluster(selectedFeature)
          : zoomToMarker(selectedFeature);
      }
    } else {
      const point: CoordsArr = event.coordinate;
      reverseOnPoint(point);
    }
  };

  /**
   * Places a marker on a point on ol map
   * Sends a reverse request on that position
   * and adds a title based on returned value
   * @param point - OL Coords
   */
  const reverseOnPoint = async (point: CoordsArr) => {
    try {
      const { layer: marker, style } = addMarkers(
        [{ coords: point, text: "" }],
        { cluster: false }
      );
      const stdPoint = transformCoords(point);
      mainMarkerCoords.value = stdPoint;
      mainMarker.value = marker;
      const data = await api.value.REVERSE(...stdPoint);
      const text = getTitleFromData(data);
      style.getText().setText(text);
      marker.setStyle(style);
      emits("on-click", { event, marker, stdPoint, data });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Take the cluster and zooms on it
   * @param cluster
   * @param options.duration - Zooming duration
   */
  const zoomToCluster = (cluster: any, options?: ZoomToExtentOptions) => {
    const extent = getClusterExtent(cluster);
    zoomToExtent(extent, options);
  };

  /**
   * Take the marker and zooms on it
   * @param marker
   * @param options.duration - Zooming duration
   */
  const zoomToMarker = (marker: any, options?: ZoomToExtentOptions) => {
    const extent = getFeatureExtent(marker);
    zoomToExtent(extent, options);
  };
  /**
   * Gets the desired extent and zooms on it
   * @param extent - Extent of the area to zoom on
   * @param options.duration - Zooming duration
   */
  const zoomToExtent = (extent: Extent, options?: ZoomToExtentOptions) => {
    map.value.getView().fit(extent, {
      size: map.value.getSize(),
      duration: options?.duration || 500,
      minResolution: 0.3,
      padding: [50, 400, 50, 50],
    });
  };

  /**
   * Take the layer and zooms on it
   * @param layer
   * @param options.duration - Zooming duration
   */
  const zoomToLayer = (layer: any, options?: ZoomToExtentOptions) => {
    const extent: Extent = layer.getSource().getExtent();
    zoomToExtent(extent, options);
  };

  /**
   * Shows a popup on the relating marker
   * whenever mouse overs on its result on result box
   * also can get a callBack from user
   * @param item - Search item
   */
  const handleResultHover = (item: SearchItem) => {
    const foundFeature = clusterMode
      ? findClusterByTitle(item.title)
      : findMarkerByTitle(item.title);
    if (foundFeature) {
      if (popupOnResultHover) {
        const { featCoords } = getCoordsAndTextFromFeature(foundFeature);
        changeOverlayStats({ coords: featCoords, text: item.title });
      }
      if (resultHoverCallback) {
        resultHoverCallback({ map: map.value, feature: foundFeature });
      }
    }
  };

  /**
   * Zooms on the relating marker
   * whenever its result on result box
   * gets clicked
   * @param item - Search item
   */
  const handleResultClick = (item: SearchItem) => {
    const foundFeature = clusterMode
      ? findClusterByTitle(item.title)
      : findMarkerByTitle(item.title);
    if (foundFeature) {
      if (zoomOnResultClick) {
        clusterMode ? zoomToCluster(foundFeature) : zoomToMarker(foundFeature);
      }
      if (resultClickCallback) {
        resultClickCallback({ map: map.value, feature: foundFeature });
      }
    }
  };

  /**
   * Takes the title of a marker and returns its surrounding cluster
   * @param title - title of wanted feature
   * @returns The found cluster
   */
  const findClusterByTitle = (title: string) => {
    const clusters: any[] = searchMarkers.value.getSource().getFeatures();
    return clusters.find((cluster) =>
      cluster.get("features").find((feat: any) => feat.get("text") === title)
    );
  };

  /**
   * Takes the title of a marker and returns it.
   * @param title - title of wanted feature
   * @returns The found marker
   */
  const findMarkerByTitle = (title: string) => {
    const markers: any[] = searchMarkers.value.getSource().getFeatures();
    return markers.find((feature) => feature.get("text") === title);
  };

  /**
   * Looks for features in current hover or click event of map
   * @param evt - Map hover or click event
   * @returns feature (If found)
   */
  const getFeatureFromEvent = (evt: any) => {
    return map.value.forEachFeatureAtPixel(
      evt.pixel,
      (feature: any) => feature
    );
  };

  return {
    setupMapEvents,
    setupClickEvent,
    setupZoomEvent,
    setupMarkerHoverEvent,
    handleClickEvent,
    handleResultHover,
    handleResultClick,
    getClusterExtent,
    zoomToExtent,
    zoomToCluster,
    zoomToLayer,
  };
}
