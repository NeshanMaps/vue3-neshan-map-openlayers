import { ChangeOverlayStats, OverlayMixinProps } from "./overlay.mixin.model";
import { Ref } from "vue";
export declare function overlayMixin({ map, popupContainer, persistantContainer, }: OverlayMixinProps): {
    setupOverlays: () => void;
    createOverlay: (container: Ref<HTMLElement | null>, persistant?: boolean) => import("openlayers").Overlay;
    changeOverlayStats: ChangeOverlayStats;
    overlay: Ref<import("openlayers").Overlay | undefined>;
    persistantOverlay: Ref<import("openlayers").Overlay | undefined>;
};
