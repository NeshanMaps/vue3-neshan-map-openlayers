import { MapType, OlMap, ViewType } from "./map.model"
import type { Store } from ".."

export const mapMutations = {
  setMap(value: OlMap) {
    (<Store><unknown>this).state.map = value
  },
  setMapContainer(value: HTMLDivElement) {
    (<Store><unknown>this).state.mapContainer = value
  },
  setZoom(value: number) {
    (<Store><unknown>this).state.zoom = value
  },
  setMapType(value: MapType) {
    (<Store><unknown>this).state.map.setMapType(value);
    (<Store><unknown>this).state.mapType = value;
  },
  setViewType(value: ViewType) {
    (<Store><unknown>this).state.viewType = value
  },
  togglePoiLayer(value = !(<Store><unknown>this).state.poiLayer) {
    (<Store><unknown>this).state.poiLayer = value
  },
  toggleTrafficLayer(value = !(<Store><unknown>this).state.trafficLayer) {
    (<Store><unknown>this).state.trafficLayer = value
  },
}
