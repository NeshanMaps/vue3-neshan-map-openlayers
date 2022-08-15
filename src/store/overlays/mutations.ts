import { state } from "../state"
import { Overlay } from "./overlays.model"

export const markersMutations = {
  setOverlay(value: Overlay) {
    state.overlay = value
  },
  setPersistantOverlay(value: Overlay) {
    state.persistantOverlay = value
  }
}
