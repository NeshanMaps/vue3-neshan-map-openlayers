import { Overlay } from "./overlays.model"

const stateGen = () => {
  return {
    overlay: null as Overlay | null,
    persistentOverlay: null as Overlay | null,
    popupContainer: null as HTMLDivElement | null,
    persistentContainer: null as HTMLDivElement | null,
  }
}

export const overlayState = stateGen()
