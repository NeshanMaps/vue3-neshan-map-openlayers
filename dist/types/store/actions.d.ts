export declare const actions: {
    markers: {
        addMarkers: import("../components/Map.model").CreateMarkers;
        clearMarkerLayer: (layer: import("openlayers").layer.Vector) => void;
        toggleClusterSource: (layer: import("openlayers").layer.Vector, deactivate: boolean) => void;
        getClusterByCoords: import("./markers/markers.model").GetClusterByCoords;
        getMarkerInClusterByCoords: (cluster: import("openlayers").Feature, coords: import("openlayers").Coordinate) => import("openlayers").Feature;
        getMarkerByCoords: import("./markers/markers.model").GetMarkerByCoords;
        getSearchResultByFeature: import("./markers/markers.model").GetSearchResultByFeature;
        zoomToLayer: (layer: import("openlayers").layer.Vector, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        zoomToExtent: (extent: import("openlayers").Extent, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        zoomToCoords: (coords: import("openlayers").Coordinate, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        zoomToMarker: (marker: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        zoomToCluster: (cluster: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions) => void;
        selectFeauture: (feature: import("./markers/markers.model").SearchItem | import("openlayers").Feature | import("./markers/markers.model").ReverseResult, options?: import("./markers/markers.model").SelectFeautureOptions) => void;
        deselectAll: () => void;
        getFeatureFromEvent: (evt: import("openlayers").MapBrowserEvent) => import("openlayers").Feature;
        reverseOnPoint: (point: import("openlayers").Coordinate, { useMarker, usePopup, customText }?: import("../mixins/events.mixin.model").ReverseOnPointOptions) => Promise<{
            marker: import("openlayers").layer.Vector;
            stdPoint: import("openlayers").Coordinate;
            data: import("./markers/markers.model").PrimaryReverseResult;
        } | {
            marker?: undefined;
            stdPoint?: undefined;
            data?: undefined;
        }>;
        search: ({ term, coords }: import("./markers/markers.model").SearchProps, options?: import("./markers/markers.model").SearchOptions) => Promise<void>;
    };
    dimensions: {
        updateMapDimensions: () => void;
        updateBreakpoints: () => void;
    };
    overlays: {
        setupOverlays: () => void;
        createOverlay: (container: HTMLDivElement, persistant?: boolean) => import("openlayers").Overlay;
        changeOverlayStats: import("./overlays/overlays.model").ChangeOverlayStats;
    };
    drawers: {
        toggleResultDrawers: (value?: boolean) => void;
    };
    map: {
        shakeMap: (delay?: number) => void;
        togglePoi: (value: boolean) => void;
        toggleTraffic: (value: boolean) => void;
    };
};
