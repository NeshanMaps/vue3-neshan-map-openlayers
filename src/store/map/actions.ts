import { Context } from "../store.model"
import { MapType } from "./map.model"

/**
 * Updates map frame so the offset problem is no more.
 * @param delay - Delay time in ms before updating
 */
const shakeMap = (context: Context, delay = 0) => {
  setTimeout(() => context.state.map?.updateSize(), delay)
}

/**
 * Switches poi layer
 * @param value - Whether it should be on or off
 */
const togglePoi = (context: Context, value = !context.state.poiLayer) => {
  context.state.poiLayer = value
  context.state.map?.switchPoiLayer(value)
}
/**
 * Switches traffic layer
 * @param value - Whether it should be on or off
 */
const toggleTraffic = (
  context: Context,
  value = !context.state.trafficLayer
) => {
  context.state.trafficLayer = value
  context.state.map?.switchTrafficLayer(value)
}

const setMapType = (context: Context, value: MapType) => {
  context.state.mapType = value
  context.state.map?.setMapType(value)
}

export const mapActions = {
  shakeMap,
  togglePoi,
  toggleTraffic,
  setMapType,
}
