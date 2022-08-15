import { Api, OlMap } from "@/components/Map.model";
export declare const mutations: {
    setBreakPoints(value: import("./dimensions/dimensions.model").BreakPoints): void;
    setMapDimenstions(value: {
        width: number;
        height: number;
    }): void;
    setSelectedMarker(value: import("./markers/markers.model").SelectedMarker): void;
    setMainMarker(value: import("openlayers").layer.Vector): void;
    setSearchMarkers(value: import("openlayers").layer.Vector): void;
    setMainMarkerCoords(value: import("openlayers").Coordinate): void;
    setSearchResults(value: import("./markers/markers.model").SearchItem[]): void;
    setReverseResult(value: import("./markers/markers.model").ReverseResult): void;
    toggleSearchLoading(value: boolean): void;
    toggleReverseLoading(value: boolean): void;
    toggleDrawerActivation(value: boolean): void;
    toggleDrawerShowDetails(value: boolean): void;
    toggleMobileDrawerShowDetails(value: boolean): void;
    setMap(value: OlMap): void;
    setApi(value: Api): void;
};
