import { CreateMarkers, VectorLayer } from "@/components/Map.model";
import { GetClusterByTitle, GetMarkerByTitle, GetSearchResultByFeature, SearchOptions, SearchProps, SelectFeautureOptions, ZoomToExtentOptions } from "./markers.model";
import { Coordinate, Extent, Feature, MapBrowserEvent } from "openlayers";
import { ReverseOnPointOptions } from "@/mixins/events.mixin.model";
export declare const markersActions: {
    addMarkers: CreateMarkers;
    clearMarkerLayer: (layer: VectorLayer) => void;
    toggleClusterSource: (layer: VectorLayer, deactivate: boolean) => void;
    getClusterByTitle: GetClusterByTitle;
    getMarkerInClusterByTitle: (cluster: Feature, title: string) => Feature;
    getMarkerByTitle: GetMarkerByTitle;
    getSearchResultByFeature: GetSearchResultByFeature;
    zoomToLayer: (layer: VectorLayer, options?: ZoomToExtentOptions) => void;
    zoomToExtent: (extent: Extent, options?: ZoomToExtentOptions) => void;
    zoomToMarker: (marker: Feature, options?: ZoomToExtentOptions) => void;
    zoomToCluster: (cluster: Feature, options?: ZoomToExtentOptions) => void;
    selectFeauture: (feature: Feature, options?: SelectFeautureOptions) => void;
    getFeatureFromEvent: (evt: MapBrowserEvent) => Feature;
    reverseOnPoint: (point: Coordinate, { useMarker, usePopup, customText }?: ReverseOnPointOptions) => Promise<{
        marker: import("openlayers").layer.Vector;
        stdPoint: Coordinate;
        data: import("./markers.model").ReverseResult;
    } | {
        marker?: undefined;
        stdPoint?: undefined;
        data?: undefined;
    }>;
    search: ({ term, coords }: SearchProps, options?: SearchOptions) => Promise<void>;
};
