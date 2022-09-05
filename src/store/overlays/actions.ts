import { Overlay } from "openlayers"
import { ChangeOverlayStats } from "./overlays.model"
import { markersOffset } from "@/parameters"
import { Context } from "../store.model"

declare const ol: any

/**
 * Sets up overlay on map
 */
const setupOverlays = (context: Context) => {
  if (!context.state.popupContainer || !context.state.persistantContainer)
    return
  const overlay = createOverlay(context, context.state.popupContainer)
  context.state.overlay = overlay
  const persistantOverlay = createOverlay(
    context,
    context.state.persistantContainer,
    true
  )
  context.state.persistantOverlay = persistantOverlay
  context.state.map?.addOverlay(overlay)
  context.state.map?.addOverlay(persistantOverlay)
}

/**
 * Changes overlay coords and text
 * @param stats.coords
 * @param stats.text
 * @param target - Whether to manipulated temporary or persistant overlay stats
 */
const changeOverlayStats: ChangeOverlayStats = (
  context,
  stats,
  target = "temporary"
) => {
  const targetContainer =
    target === "temporary"
      ? context.state.popupContainer
      : context.state.persistantContainer
  const targetOverlay =
    target === "temporary"
      ? context.state.overlay
      : context.state.persistantOverlay
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
const createOverlay = (
  context: Context,
  container: HTMLDivElement,
  persistant = false
) => {
  const overlay: Overlay = new ol.Overlay({
    element: container,
    map: context.state.map,
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
