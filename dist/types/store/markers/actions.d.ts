import { CreateMarkers, VectorLayer } from "../../components/Map.model";
import { GetClusterByCoords, GetMarkerByCoords, GetSearchResultByFeature, ReverseResult, SearchItem, SearchOptions, SearchProps, SelectFeautureOptions, ZoomToExtentOptions } from "./markers.model";
import { Coordinate, Extent, Feature, MapBrowserEvent } from "openlayers";
import { ReverseOnPointOptions } from "../../mixins/events.mixin.model";
export declare const markersActions: {
    addMarkers: CreateMarkers;
    clearMarkerLayer: (layer: VectorLayer) => void;
    toggleClusterSource: (layer: VectorLayer, deactivate: boolean) => void;
    getClusterByCoords: GetClusterByCoords;
    getMarkerInClusterByCoords: (cluster: Feature, coords: Coordinate) => Feature;
    getMarkerByCoords: GetMarkerByCoords;
    getSearchResultByFeature: GetSearchResultByFeature;
    zoomToLayer: (layer: VectorLayer, options?: ZoomToExtentOptions) => void;
    zoomToExtent: (extent: Extent, options?: ZoomToExtentOptions) => void;
    zoomToCoords: (coords: Coordinate, options?: ZoomToExtentOptions) => void;
    zoomToMarker: (marker: Feature, options?: ZoomToExtentOptions) => void;
    zoomToCluster: (cluster: Feature, options?: ZoomToExtentOptions) => void;
    selectFeauture: (feature: Feature | SearchItem | ReverseResult, options?: SelectFeautureOptions) => void;
    deselectAll: () => void;
    getFeatureFromEvent: (evt: MapBrowserEvent) => Feature;
    reverseOnPoint: (point: Coordinate, { useMarker, usePopup, customText }?: ReverseOnPointOptions) => Promise<{
        marker: import("openlayers").layer.Vector;
        stdPoint: Coordinate;
        data: import("./markers.model").PrimaryReverseResult;
    } | {
        marker?: undefined;
        stdPoint?: undefined;
        data?: undefined;
    }>;
    search: ({ term, coords }: SearchProps, options?: SearchOptions) => Promise<void>;
};
