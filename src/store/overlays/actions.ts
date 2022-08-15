import { DivElementRef } from "@/components/Map.model"
import { Overlay } from "openlayers"
import { state } from "../state"
import {
  ChangeOverlayStats,
  SetupOverlay,
  SetupOverlayProps,
} from "./overlays.model"

declare const ol: any

let privatePopupContainer: SetupOverlayProps["popupContainer"]
let privatePersistantContainer: SetupOverlayProps["persistantContainer"]
/**
 * Sets up overlay on map
 */
const setupOverlays: SetupOverlay = ({
  popupContainer,
  persistantContainer,
}) => {
  privatePopupContainer = popupContainer
  privatePersistantContainer = persistantContainer
  const overlay = createOverlay(popupContainer)
  state.overlay = overlay
  const persistantOverlay = createOverlay(persistantContainer, true)
  state.persistantOverlay = persistantOverlay
  state.map?.addOverlay(overlay)
  state.map?.addOverlay(persistantOverlay)
}

/**
 * Changes overlay coords and text
 * @param stats.coords
 * @param stats.text
 * @param target - Whether to manipulated temporary or persistant overlay stats
 */
const changeOverlayStats: ChangeOverlayStats = (
  stats,
  target: "temporary" | "persistant" = "temporary"
) => {
  const targetContainer =
    target === "temporary" ? privatePopupContainer : privatePersistantContainer
  const targetOverlay =
    target === "temporary" ? state.overlay : state.persistantOverlay
  if (!targetContainer.value) return
  if (stats) {
    const { coords, text, offset } = stats
    targetContainer.value.innerHTML = text
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
const createOverlay = (container: DivElementRef, persistant = false) => {
  const overlay: Overlay = new ol.Overlay({
    element: container.value,
    map: state.map,
    positioning: "top-center",
    offset: [0, -40],
  })
  overlay.set("persistant", persistant) // An attr to know that we should remove it on following hovers
  return overlay
}

export const overlaysActions = {
  setupOverlays,
  createOverlay,
  changeOverlayStats,
}
