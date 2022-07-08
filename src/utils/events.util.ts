declare const ol: any;
import {
  ChangeOverlayStatsProps,
  CoordsArr,
  EventsMixinProps,
  Extent,
  SearchItem,
  ZoomToExtentOptions,
} from "@/components/Map.model";
import { ref } from "vue";
import { getCoordsFromFeature, getTitleFromData } from "./location.util";
import { markersFunc } from ".";

export function eventsFunc({
  map,
  mainMarker,
  mainMarkerCoords,
  searchMarkers,
  api,
  emits,
  resultHoverCallback,
  resultClickCallback,
  zoomOnMarkerClick,
  zoomOnResultClick,
  popupOnMarkerHover,
  popupOnResultHover,
}: EventsMixinProps) {
  const container = ref<HTMLElement | null>(null);
  const overlay = ref<any>();

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
    container.value = document.getElementById("popup-container");
    overlay.value = createOverlay();
    map.value.addOverlay(overlay.value);
    map.value.on("pointermove", function (evt: any) {
      const hoveredFeature = map.value.forEachFeatureAtPixel(
        evt.pixel,
        (feature: any) => feature
      );
      if (hoveredFeature) {
        const { featCoords, featText } =
          getCoordsAndTextFromFeature(hoveredFeature);
        if (featText && featText.length === 1) {
          if (popupOnMarkerHover) {
            changeOverlayStats({ text: featText[0], coords: featCoords });
          }
          return;
        }
      }
      if (!overlay.value.get("persistant")) {
        overlay.value.setPosition(undefined);
      }
    });
  };

  const { addMarkers } = markersFunc({ map });
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
    const selectedFeature = map.value.forEachFeatureAtPixel(
      event.pixel,
      (feature: any) => feature
    );
    if (selectedFeature) {
      if (zoomOnMarkerClick) {
        zoomToCluster(selectedFeature);
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
      const { layer: marker, style } = addMarkers([
        { coords: point, text: "" },
      ]);
      const stdPoint: CoordsArr = ol.proj.transform(
        point,
        "EPSG:3857",
        "EPSG:4326"
      );
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
   */
  const zoomToCluster = (cluster: any) => {
    const extent = getClusterExtent(cluster)
    zoomToExtent(extent)
  };

  /**
   * Gets the sufficent extent to zoom on a cluster or marker
   * @param cluster 
   * @returns extent
   */
  const getClusterExtent = (cluster: any) => {
    const originalFeatures = cluster.get('features');
    const extent: Extent = new ol.extent.createEmpty();
    originalFeatures.forEach((f: any) => {
      ol.extent.extend(extent, f.getGeometry().getExtent());
    });
    return extent
  }

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
      padding: [50, 50, 50, 50]
    });
  }

  /**
   * Shows a popup on the relating marker
   * whenever mouse overs on its result on result box
   * also can get a callBack from user
   * @param item - Search item
   */
  const handleResultHover = (item: SearchItem) => {
    const foundFeature = findFeatureByTitle(item.title);
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
    const foundFeature = findFeatureByTitle(item.title);
    if (foundFeature) {
      if (zoomOnResultClick) {
        zoomToCluster(foundFeature);
      }
      if (resultClickCallback) {
        resultClickCallback({ map: map.value, feature: foundFeature });
      }
    }
  };

  /**
   * Takes the title of a marker and gives its surrounding cluster
   * @param title - title of wanted feature
   * @returns The found cluster
   */
  const findFeatureByTitle = (title: string) => {
    const clusters: any[] = searchMarkers.value.getSource().getFeatures();
    return clusters.find(
      (cluster) =>
        cluster.get('features').find((feat: any) => feat.get('text') === title)
    );
  };

  /**
   * Creates an ol overlay on container element
   * @param persistant - Whether it should not disappear on mouse leaving
   * @returns overlay
   */
  const createOverlay = (persistant = false) => {
    const overlay = new ol.Overlay({
      element: container.value,
      map: map.value,
      positioning: "top-center",
      offset: [0, -50],
    });
    overlay.set("persistant", persistant); // An attr to know that we should remove it on following hovers
    return overlay;
  };

  /**
   * Takes a feature and returns text value from its properties
   * and ol coords on map
   * @param feature 
   * @returns 
   */
  const getCoordsAndTextFromFeature = (feature: any) => {
    const featCoords = getCoordsFromFeature(feature);
    const featText: string[] = feature.getProperties().text;
    return {
      featCoords,
      featText,
    };
  };

  /**
   * Changes overlay coords and text
   */
  const changeOverlayStats = ({ coords, text }: ChangeOverlayStatsProps) => {
    if (!container.value) return;
    container.value.innerHTML = text;
    overlay.value.setPosition(coords);
  };

  return {
    setupMapEvents,
    setupClickEvent,
    setupZoomEvent,
    setupMarkerHoverEvent,
    handleClickEvent,
    handleResultHover,
    handleResultClick,
    zoomToExtent,
    getClusterExtent
  };
}
