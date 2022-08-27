import { store } from ".."

/**
 * Updates map frame so the offset problem is no more.
 * @param delay - Delay time in ms before updating
 */
const shakeMap = (delay = 0) => {
  setTimeout(() => store.state.map?.updateSize(), delay)
}

/**
 * Switches poi layer
 * @param value - Whether it should be on or off
 */
const togglePoi = (value: boolean) => {
  store.state.map?.switchPoiLayer(value)
}
/**
 * Switches traffic layer
 * @param value - Whether it should be on or off
 */
const toggleTraffic = (value: boolean) => {
  store.state.map?.switchTrafficLayer(value)
}

export const mapActions = {
  shakeMap,
  togglePoi,
  toggleTraffic,
}
