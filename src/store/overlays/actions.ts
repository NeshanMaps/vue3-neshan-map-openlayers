import { Overlay } from "openlayers"
import { ChangeOverlayStats } from "./overlays.model"
import { markersOffset } from "@/parameters"
import { Context } from "../store.model"

declare const ol: any

/**
 * Sets up overlay on map
 */
const setupOverlays = (context: Context) => {
  if (!context.state.popupContainer || !context.state.persistentContainer)
    return
  const overlay = createOverlay(context, context.state.popupContainer)
  context.state.overlay = overlay
  const persistentOverlay = createOverlay(
    context,
    context.state.persistentContainer,
    true
  )
  context.state.persistentOverlay = persistentOverlay
  context.state.map?.addOverlay(overlay)
  context.state.map?.addOverlay(persistentOverlay)
}

/**
 * Changes overlay coords and text
 * @param stats.coords
 * @param stats.text
 * @param target - Whether to manipulated temporary or persistent overlay stats
 */
const changeOverlayStats: ChangeOverlayStats = (
  context,
  stats,
  target = "temporary"
) => {
  const targetContainer =
    target === "temporary"
      ? context.state.popupContainer
      : context.state.persistentContainer
  const targetOverlay =
    target === "temporary"
      ? context.state.overlay
      : context.state.persistentOverlay
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
 * @param persistent - Whether it should not disappear on mouse leaving
 * @returns overlay
 */
const createOverlay = (
  context: Context,
  container: HTMLDivElement,
  persistent = false
) => {
  const overlay: Overlay = new ol.Overlay({
    element: container,
    map: context.state.map,
    positioning: "top-center",
    offset: markersOffset.short,
  })
  overlay.set("persistent", persistent) // An attr to know that we should remove it on following hovers
  return overlay
}

export const overlaysActions = {
  setupOverlays,
  createOverlay,
  changeOverlayStats,
}
