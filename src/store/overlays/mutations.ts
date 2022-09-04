import type { Store } from ".."
import { Overlay } from "./overlays.model"

export const overlaysMutations = {
  setOverlay(value: Overlay) {
    (<Store><unknown>this).state.overlay = value
  },
  setPersistantOverlay(value: Overlay) {
    (<Store><unknown>this).state.persistantOverlay = value
  },
  setPopupContainer(value: HTMLDivElement) {
    (<Store><unknown>this).state.popupContainer = value
  },
  setPersistantContainer(value: HTMLDivElement) {
    (<Store><unknown>this).state.persistantContainer = value
  },
}
