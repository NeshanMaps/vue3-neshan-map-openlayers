import { CreateMarkers, VectorLayer } from "../../components/Map.model";
import { GetClusterByCoords, GetMarkerByCoords, GetSearchResultByFeature, ReverseResult, SearchItem, SearchOptions, SearchProps, SelectFeautureOptions, ZoomToExtentOptions } from "./markers.model";
import { Coordinate, Extent, Feature, MapBrowserEvent } from "openlayers";
import { ReverseOnPointOptions } from "../../mixins/events.mixin.model";
export declare const markersActions: {
    addMarkers: CreateMarkers;
    clearMarkerLayer: (layer: VectorLayer) => void;
    toggleClusterSource: (layer: VectorLayer, deactivate: boolean) => void;
    getClusterByCoords: GetClusterByCoords;
    getMarkerInClusterByCoords: (cluster: Feature, coords: Coordinate) => Feature | undefined;
    getMarkerByCoords: GetMarkerByCoords;
    getSearchResultByFeature: GetSearchResultByFeature;
    zoomToLayer: (layer: VectorLayer, options?: ZoomToExtentOptions | undefined) => void;
    zoomToExtent: (extent: Extent, options?: ZoomToExtentOptions | undefined) => void;
    zoomToCoords: (coords: Coordinate, options?: ZoomToExtentOptions | undefined) => void;
    zoomToMarker: (marker: Feature, options?: ZoomToExtentOptions | undefined) => void;
    zoomToCluster: (cluster: Feature, options?: ZoomToExtentOptions | undefined) => void;
    selectFeauture: (feature: Feature | SearchItem | ReverseResult, options?: SelectFeautureOptions | undefined) => void;
    deselectAll: () => void;
    getFeatureFromEvent: (evt: MapBrowserEvent) => Feature | undefined;
    reverseOnPoint: (point: Coordinate, { useMarker, usePopup, customText }?: ReverseOnPointOptions) => Promise<{
        marker: import("openlayers").layer.Vector | null;
        stdPoint: Coordinate;
        data: any;
    } | {
        marker?: undefined;
        stdPoint?: undefined;
        data?: undefined;
    }>;
    search: ({ term, coords }: SearchProps, options?: SearchOptions | undefined) => Promise<void>;
};
