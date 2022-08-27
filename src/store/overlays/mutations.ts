import { state } from "../state"
import { Overlay } from "./overlays.model"

export const overlaysMutations = {
  setOverlay(value: Overlay) {
    state.overlay = value
  },
  setPersistantOverlay(value: Overlay) {
    state.persistantOverlay = value
  },
  setPopupContainer(value: HTMLDivElement) {
    state.popupContainer = value
  },
  setPersistantContainer(value: HTMLDivElement) {
    state.persistantContainer = value
  },
}
