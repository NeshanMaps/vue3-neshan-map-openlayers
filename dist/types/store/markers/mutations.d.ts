import { VectorLayer } from "../../components/Map.model";
import { Coordinate } from "openlayers";
import { ReverseResult, SearchItem, SelectedMarker } from "./markers.model";
export declare const markersMutations: {
    setSelectedMarker(value: SelectedMarker): void;
    setMainMarker(value: VectorLayer): void;
    setSearchMarkers(value: VectorLayer): void;
    setMainMarkerCoords(value: Coordinate): void;
    setSearchResults(value: SearchItem[]): void;
    setReverseResult(value: ReverseResult): void;
};
