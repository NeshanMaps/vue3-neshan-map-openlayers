export declare const actions: {
    markers: {
        addMarkers: import("../components/Map.model").CreateMarkers;
        clearMarkerLayer: (layer: import("openlayers").layer.Vector) => void;
        toggleClusterSource: (layer: import("openlayers").layer.Vector, deactivate: boolean) => void;
        getClusterByTitle: import("./markers/markers.model").GetClusterByTitle;
        getMarkerInClusterByTitle: (cluster: import("openlayers").Feature, title: string) => import("openlayers").Feature;
        getMarkerByTitle: import("./markers/markers.model").GetMarkerByTitle;
        getSearchResultByFeature: import("./markers/markers.model").GetSearchResultByFeature;
        zoomToLayer: (layer: import("openlayers").layer.Vector, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        zoomToExtent: (extent: import("openlayers").Extent, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        zoomToMarker: (marker: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        zoomToCluster: (cluster: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        selectFeauture: (feature: import("openlayers").Feature, options?: import("./markers/markers.model").SelectFeautureOptions) => void;
        getFeatureFromEvent: (evt: import("openlayers").MapBrowserEvent) => import("openlayers").Feature;
        reverseOnPoint: (point: import("openlayers").Coordinate, { useMarker, usePopup, customText }?: import("../mixins/events.mixin.model").ReverseOnPointOptions) => Promise<{
            marker: import("openlayers").layer.Vector;
            stdPoint: import("openlayers").Coordinate;
            data: import("./markers/markers.model").ReverseResult;
        } | {
            marker?: undefined;
            stdPoint?: undefined;
            data?: undefined;
        }>;
        search: ({ term, coords }: import("./markers/markers.model").SearchProps, options?: import("./markers/markers.model").SearchOptions) => Promise<void>;
    };
    dimensions: {
        updateMapDimensions: (mapContainer: import("../components/Map.model").DivElementRef) => void;
        updateBreakpoints: () => void;
    };
    overlays: {
        setupOverlays: import("./overlays/overlays.model").SetupOverlay;
        createOverlay: (container: import("../components/Map.model").DivElementRef, persistant?: boolean) => import("openlayers").Overlay;
        changeOverlayStats: import("./overlays/overlays.model").ChangeOverlayStats;
    };
    drawers: {
        openResultDrawers: () => void;
    };
};
