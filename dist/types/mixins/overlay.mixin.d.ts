import { ChangeOverlayStatsProps, OverlayMixinProps } from "@/components/Map.model";
export declare function overlayMixin({ map }: OverlayMixinProps): {
    setupOverlay: () => void;
    createOverlay: (persistant?: boolean) => any;
    changeOverlayStats: ({ coords, text }: ChangeOverlayStatsProps) => void;
    overlay: import("vue").Ref<any>;
};
