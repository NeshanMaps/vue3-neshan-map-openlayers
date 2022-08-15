import { DivElementRef } from "@/components/Map.model";
import { Overlay } from "openlayers";
import { ChangeOverlayStats, SetupOverlay } from "./overlays.model";
export declare const overlaysActions: {
    setupOverlays: SetupOverlay;
    createOverlay: (container: DivElementRef, persistant?: boolean) => Overlay;
    changeOverlayStats: ChangeOverlayStats;
};
