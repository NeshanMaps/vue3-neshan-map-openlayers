import { Context } from "../store.model"

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
const togglePoi = (context: Context, value: boolean) => {
  context.state.map?.switchPoiLayer(value)
}
/**
 * Switches traffic layer
 * @param value - Whether it should be on or off
 */
const toggleTraffic = (context: Context, value: boolean) => {
  context.state.map?.switchTrafficLayer(value)
}

export const mapActions = {
  shakeMap,
  togglePoi,
  toggleTraffic,
}
