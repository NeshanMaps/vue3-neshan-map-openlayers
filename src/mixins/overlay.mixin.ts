declare const ol: any
import {
  ChangeOverlayStats,
  Overlay,
  OverlayMixinProps,
} from "./overlay.mixin.model"
import { Ref, ref } from "vue"

export function overlayMixin({
  map,
  popupContainer,
  persistantContainer,
}: OverlayMixinProps) {
  const overlay = ref<Overlay>()
  const persistantOverlay = ref<Overlay>()

  /**
   * Sets up overlay on map
   */
  const setupOverlays = () => {
    overlay.value = createOverlay(popupContainer)
    persistantOverlay.value = createOverlay(persistantContainer, true)
    map.value?.addOverlay(overlay.value)
    map.value?.addOverlay(persistantOverlay.value)
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
      target === "temporary" ? popupContainer : persistantContainer
    const targetOverlay = target === "temporary" ? overlay : persistantOverlay
    if (!targetContainer.value) return
    if (stats) {
      const { coords, text } = stats
      targetContainer.value.innerHTML = text
      targetOverlay.value?.setPosition(coords)
    } else {
      targetOverlay.value?.setPosition(undefined)
    }
  }

  /**
   * Creates an ol overlay on container element
   * @param persistant - Whether it should not disappear on mouse leaving
   * @returns overlay
   */
  const createOverlay = (
    container: Ref<HTMLElement | null>,
    persistant = false
  ) => {
    const overlay: Overlay = new ol.Overlay({
      element: container.value,
      map: map.value,
      positioning: "top-center",
      offset: [0, -50],
    })
    overlay.set("persistant", persistant) // An attr to know that we should remove it on following hovers
    return overlay
  }

  return {
    setupOverlays,
    createOverlay,
    changeOverlayStats,
    overlay,
    persistantOverlay,
  }
}
