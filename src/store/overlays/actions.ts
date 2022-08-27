import { Overlay } from "openlayers"
import { store } from ".."
import { overlaysMutations } from "./mutations"
import {
  ChangeOverlayStats,
} from "./overlays.model"
import { markersOffset } from "@/parameters"

declare const ol: any

/**
 * Sets up overlay on map
 */
const setupOverlays = () => {
  if (!store.state.popupContainer || !store.state.persistantContainer) return
  const overlay = createOverlay(store.state.popupContainer)
  overlaysMutations.setOverlay(overlay)
  const persistantOverlay = createOverlay(store.state.persistantContainer, true)
  overlaysMutations.setPersistantOverlay(persistantOverlay)
  store.state.map?.addOverlay(overlay)
  store.state.map?.addOverlay(persistantOverlay)
}

/**
 * Changes overlay coords and text
 * @param stats.coords
 * @param stats.text
 * @param target - Whether to manipulated temporary or persistant overlay stats
 */
const changeOverlayStats: ChangeOverlayStats = (
  stats,
  target = "temporary"
) => {
  const targetContainer =
    target === "temporary" ? store.state.popupContainer : store.state.persistantContainer
  const targetOverlay =
    target === "temporary" ? store.state.overlay : store.state.persistantOverlay
  if (!targetContainer) return
  if (stats) {
    const { coords, text, offset } = stats
    targetContainer.innerHTML = text
    if (offset) {
      targetOverlay?.setOffset(offset)
    }
    targetOverlay?.setPosition(coords)
  } else {
    targetOverlay?.setPosition(undefined)
  }
}

/**
 * Creates an ol overlay on container element
 * @param persistant - Whether it should not disappear on mouse leaving
 * @returns overlay
 */
const createOverlay = (container: HTMLDivElement, persistant = false) => {
  const overlay: Overlay = new ol.Overlay({
    element: container,
    map: store.state.map,
    positioning: "top-center",
    offset: markersOffset.short,
  })
  overlay.set("persistant", persistant) // An attr to know that we should remove it on following hovers
  return overlay
}

export const overlaysActions = {
  setupOverlays,
  createOverlay,
  changeOverlayStats,
}
