import { state } from "../state"
import { MapType, OlMap, ViewType } from "./map.model"

export const mapMutations = {
  setMap(value: OlMap) {
    state.map = value
  },
  setMapContainer(value: HTMLDivElement) {
    state.mapContainer = value
  },
  setZoom(value: number) {
    state.zoom = value
  },
  setMapType(value: MapType) {
    state.map?.setMapType(value)
    state.mapType = value
  },
  setViewType(value: ViewType) {
    state.viewType = value
  },
  togglePoiLayer(value = !state.poiLayer) {
    state.poiLayer = value
  },
  toggleTrafficLayer(value = !state.trafficLayer) {
    state.trafficLayer = value
  },
}
