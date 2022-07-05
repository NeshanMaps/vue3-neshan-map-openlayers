declare const ol: any
import { Api, CoordsArr, SearchItem } from "@/components/Map.model";
import { Ref } from "vue";
import { getCoordsFromFeature, getTitleFromData } from "./location.util";
import markersFunc from "./markers.util"

export default function ({ map, mainMarker, mainMarkerCoords, searchMarkers, api, emits }: {
  map: Ref<any>,
  mainMarker: Ref<any>,
  mainMarkerCoords: Ref<CoordsArr | null>,
  searchMarkers: Ref<any>,
  api: Ref<Api>,
  emits: (event: "on-zoom" | "on-click", arg: any) => void
}) {
  
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
    const container = document.getElementById("popup-container");
    if (!container) return;
    const overlay = new ol.Overlay({
      element: container,
      map: map.value,
      positioning: "top-center",
      offset: [0, -40],
    });
    map.value.addOverlay(overlay);
    map.value.on("pointermove", function (evt: any) {
      const feature_onHover = map.value.forEachFeatureAtPixel(
        evt.pixel,
        (feature: any) => feature
      );

      if (feature_onHover) {
        const featCoords = getCoordsFromFeature(feature_onHover);
        const featText = feature_onHover.getProperties().text.trim();
        if (featText) {
          container.innerHTML = featText;
          overlay.setPosition(featCoords);
          map.value.addOverlay(overlay);
          return;
        }
      }
      overlay.setPosition(undefined);
    });
  };

  const { addMarkers } = markersFunc(map)
  /**
   * After clicking on map, sets a marker on that coords.
   * Sends a request to api.reverse and labels the marker
   * Then emits an event named 'on-click'.
   * @param event - Map click event.
   */
  const handleClickEvent = async (event: any) => {
    try {
      map.value.removeLayer(mainMarker.value);
      const point: CoordsArr = event.coordinate;
      const { layer: marker, style } = addMarkers([{ coords: point, text: " " }]);
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
  const handleResultHover = (item: SearchItem) => {
    const features: any[] = searchMarkers.value.getSource().getFeatures();
    const foundFeature = features.find(
      (feat) => feat.getProperties().text === item.title
    );
    if (foundFeature) {
      console.log(foundFeature);
    }
  };

  return {
    setupMapEvents,
    setupClickEvent,
    setupZoomEvent,
    setupMarkerHoverEvent,
    handleClickEvent,
    handleResultHover
  }
}