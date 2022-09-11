import { VectorLayer } from "../../components/Map.model";
import { AddMarkers, GetClusterByCoords, GetMarkerByCoords, GetSearchResultByFeature, ReverseResult, SearchItem, SearchOptions, SearchProps, SelectFeautureOptions, ZoomToExtentOptions } from "./markers.model";
import { Coordinate, Extent, Feature, MapBrowserEvent } from "openlayers";
import { ReverseOnPointOptions } from "../../mixins/events.mixin.model";
import { Context } from "../store.model";
export declare const markersActions: {
    addMarkers: AddMarkers;
    toggleClusterSource: (context: Context, layer: VectorLayer, deactivate: boolean) => void;
    getClusterByCoords: GetClusterByCoords;
    getMarkerInClusterByCoords: (context: Context, cluster: Feature, coords: Coordinate) => Feature | undefined;
    getMarkerByCoords: GetMarkerByCoords;
    getSearchResultByFeature: GetSearchResultByFeature;
    zoomToLayer: (context: Context, layer: VectorLayer, options?: ZoomToExtentOptions | undefined) => void;
    zoomToExtent: ({ state, getters }: Context, extent: Extent, options?: ZoomToExtentOptions | undefined) => void;
    zoomToCoords: (context: Context, coords: Coordinate, options?: ZoomToExtentOptions | undefined) => void;
    zoomToMarker: (context: Context, marker: Feature, options?: ZoomToExtentOptions | undefined) => void;
    zoomToCluster: (context: Context, cluster: Feature, options?: ZoomToExtentOptions | undefined) => void;
    selectFeauture: (context: Context, feature: Feature | SearchItem | ReverseResult, options?: SelectFeautureOptions | undefined) => void;
    deselectAll: (context: Context) => void;
    getFeatureFromEvent: (context: Context, evt: MapBrowserEvent) => Feature | undefined;
    reverseOnPoint: (context: Context, point: Coordinate, { useMarker, usePopup, customText }?: ReverseOnPointOptions) => Promise<{
        marker: import("openlayers").layer.Vector | null;
        stdPoint: Coordinate;
        data: import("./markers.model").PrimaryReverseResult;
    } | {
        marker?: undefined;
        stdPoint?: undefined;
        data?: undefined;
    }>;
    search: (context: Context, { term, coords }: SearchProps, options?: SearchOptions | undefined) => Promise<void>;
};
