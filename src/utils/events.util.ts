declare const ol: any;
import {
  ChangeOverlayStatsProps,
  CoordsArr,
  EventsMixinProps,
  SearchItem,
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
  popupOnResultHover
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
  const setupMarkerHoverEvent = () => {
    container.value = document.getElementById("popup-container");
    overlay.value = createOverlay(false);
    map.value.addOverlay(overlay.value);
    map.value.on("pointermove", function (evt: any) {
      const hoveredFeature = map.value.forEachFeatureAtPixel(
        evt.pixel,
        (feature: any) => feature
      );
      if (hoveredFeature) {
        const { featCoords, featText } =
          getCoordsAndTextFromFeature(hoveredFeature);
        if (featText) {
          if (popupOnMarkerHover) {
            changeOverlayStats({ text: featText, coords: featCoords });
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
   * After clicking on map, sets a marker on that coords.
   * Sends a request to api.reverse and labels the marker
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
        zoomToFeature(selectedFeature);
      }
    } else {
      const point: CoordsArr = event.coordinate;
      reverseOnPoint(point);
    }
  };

  const reverseOnPoint = async (point: CoordsArr) => {
    try {
      const { layer: marker, style } = addMarkers([
        { coords: point, text: " " },
      ]);
      const stdPoint: CoordsArr = ol.proj.transform(
        point,
        "EPSG:3857",
        "EPSG:4326"
      );
      mainMarkerCoords.value = stdPoint;
      const data = await api.value.REVERSE(...stdPoint);
      const text = getTitleFromData(data);
      style.getText().setText(text);
      marker.setStyle(style);
      mainMarker.value = marker;
      emits("on-click", { event, marker, stdPoint, data });
    } catch (error) {
      console.log(error);
    }
  };

  const zoomToFeature = (feature: any) => {
    map.value.getView().fit(feature.getGeometry(), {
      size: map.value.getSize(),
      duration: 500,
      minResolution: 0.5,
    });
  };

  const handleResultHover = (item: SearchItem) => {
    const features: any[] = searchMarkers.value.getSource().getFeatures();
    const foundFeature = features.find(
      (feat) => feat.getProperties().text === item.title
    );
    if (foundFeature) {
      if (popupOnResultHover) {
        const { featText, featCoords } =
          getCoordsAndTextFromFeature(foundFeature);
        changeOverlayStats({ coords: featCoords, text: featText });
      }
      if (resultHoverCallback) {
        resultHoverCallback({ map: map.value, feature: foundFeature })
      }
    }
  };

  const handleResultClick = (item: SearchItem) => {
    const foundFeature = findFeatureByTitle(item.title);
    if (foundFeature) {
      if (zoomOnResultClick) {
        zoomToFeature(foundFeature);
      }
      if (resultClickCallback) {
        resultClickCallback({ map: map.value, feature: foundFeature })
      }
    }
  };

  const findFeatureByTitle = (title: string) => {
    const features: any[] = searchMarkers.value.getSource().getFeatures();
    return features.find((feat) => feat.getProperties().text === title);
  };

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

  const getCoordsAndTextFromFeature = (feature: any) => {
    const featCoords = getCoordsFromFeature(feature);
    const featText = feature.getProperties().text.trim();
    return {
      featCoords,
      featText,
    };
  };

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
  };
}
