import { MapType, OlMap, ViewType } from "./map.model";
export declare const mapMutations: {
    setMap(value: OlMap): void;
    setMapContainer(value: HTMLDivElement): void;
    setZoom(value: number): void;
    setMapType(value: MapType): void;
    setViewType(value: ViewType): void;
    togglePoiLayer(value?: boolean): void;
    toggleTrafficLayer(value?: boolean): void;
};
