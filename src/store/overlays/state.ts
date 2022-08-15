import { Overlay } from "./overlays.model"

const stateGen = () => {
  return {
    overlay: null as Overlay | null,
    persistantOverlay: null as Overlay | null
  }
}

export const overlayState = stateGen()
