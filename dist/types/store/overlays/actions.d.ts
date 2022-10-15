import { Overlay } from "openlayers";
import { ChangeOverlayStats } from "./overlays.model";
import { Context } from "../store.model";
export declare const overlaysActions: {
    setupOverlays: (context: Context) => void;
    createOverlay: (context: Context, container: HTMLDivElement, persistant?: boolean) => Overlay;
    changeOverlayStats: ChangeOverlayStats;
};
