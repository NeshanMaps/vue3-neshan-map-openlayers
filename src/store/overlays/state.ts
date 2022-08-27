import { Overlay } from "./overlays.model"

const stateGen = () => {
  return {
    overlay: null as Overlay | null,
    persistantOverlay: null as Overlay | null,
    popupContainer: null as HTMLDivElement | null,
    persistantContainer: null as HTMLDivElement | null,
  }
}

export const overlayState = stateGen()
