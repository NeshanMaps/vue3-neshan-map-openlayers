import { MapType, OlMap, ViewType } from "./map.model";
export declare const mapState: {
    mapContainer: HTMLDivElement;
    map: OlMap;
    mapType: MapType;
    zoom: number;
    poiLayer: boolean;
    trafficLayer: boolean;
    viewType: ViewType;
};
