import { DivElementRef, Ol, OlMap } from "../../components/Map.model";
import { Coordinate } from "openlayers";
import { Ref } from "vue";
export declare type Overlay = Ol.Overlay;
export declare interface OverlayMixinProps {
    map: OlMap | null;
    popupContainer: Ref<HTMLElement | null>;
    persistantContainer: Ref<HTMLElement | null>;
}
export declare interface ChangeOverlayStatsProps {
    coords: Coordinate;
    text: string;
    offset?: number[];
}
export declare type ChangeOverlayStats = (options?: ChangeOverlayStatsProps, target?: "temporary" | "persistant") => void;
export declare interface SetupOverlayProps {
    popupContainer: DivElementRef;
    persistantContainer: DivElementRef;
}
export declare type SetupOverlay = (options: SetupOverlayProps) => void;
