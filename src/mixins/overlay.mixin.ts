declare const ol: any;
import { ChangeOverlayStats, OverlayMixinProps } from "@/components/Map.model";
import { ref } from "vue";

export function overlayMixin({
  map
}: OverlayMixinProps) {

  const container = ref<HTMLElement | null>(null);
  const overlay = ref<any>();

  /**
   * Sets up overlay on map
   */
  const setupOverlay = () => {
    container.value = document.getElementById("popup-container");
    overlay.value = createOverlay();
    map.value.addOverlay(overlay.value);
  }
  /**
   * Changes overlay coords and text
   */
  const changeOverlayStats: ChangeOverlayStats = ({ coords, text }) => {
    if (!container.value) return;
    container.value.innerHTML = text;
    overlay.value.setPosition(coords);
  };

  /**
  * Creates an ol overlay on container element
  * @param persistant - Whether it should not disappear on mouse leaving
  * @returns overlay
  */
  const createOverlay = (persistant = false) => {
    const overlay = new ol.Overlay({
      element: container.value,
      map: map.value,
      positioning: "top-center",
      offset: [0, -50],
    });
    overlay.set("persistant", persistant); // An attr to know that we should remove it on following hovers
    return overlay;
  };

  return {
    setupOverlay,
    createOverlay,
    changeOverlayStats,
    overlay
  }
}