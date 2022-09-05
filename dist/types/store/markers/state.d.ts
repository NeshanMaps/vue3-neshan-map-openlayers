import { Coordinate } from "openlayers";
import { Ref } from "vue";
import { ReverseResult, SearchItem, SelectedMarker } from "./markers.model";
export declare const markersState: {
    selectedMarker: SelectedMarker;
    mainMarker: Ref<import("openlayers").layer.Vector>;
    mainMarkerCoords: Ref<Coordinate>;
    reverseResult: ReverseResult | null;
    searchMarkers: Ref<import("openlayers").layer.Vector>;
    searchResults: SearchItem[];
};
