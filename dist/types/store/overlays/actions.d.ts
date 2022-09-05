import { Overlay } from "openlayers";
import { ChangeOverlayStats } from "./overlays.model";
export declare const overlaysActions: {
    setupOverlays: () => void;
    createOverlay: (container: HTMLDivElement, persistant?: boolean) => Overlay;
    changeOverlayStats: ChangeOverlayStats;
};
