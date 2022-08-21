import { state } from "../state"
import { MapType, OlMap } from "./map.model"

export const mapMutations = {
  setMap(value: OlMap) {
    state.map = value
  },
  setZoom(value: number) {
    state.zoom = value
  },
  setMapType(value: MapType) {
    state.map?.setMapType(value)
    state.mapType = value
  },
  togglePoiLayer(value = !state.poiLayer) {
    state.poiLayer = value
  },
  toggleTrafficLayer(value = !state.trafficLayer) {
    state.trafficLayer = value
  },
}
