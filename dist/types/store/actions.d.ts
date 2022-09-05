export declare const actions: {
    markers: {
        addMarkers: import("../components/Map.model").CreateMarkers;
        clearMarkerLayer: (layer: import("openlayers").layer.Vector) => void;
        toggleClusterSource: (layer: import("openlayers").layer.Vector, deactivate: boolean) => void;
        getClusterByCoords: import("./markers/markers.model").GetClusterByCoords;
        getMarkerInClusterByCoords: (cluster: import("openlayers").Feature, coords: import("openlayers").Coordinate) => import("openlayers").Feature | undefined;
        getMarkerByCoords: import("./markers/markers.model").GetMarkerByCoords;
        getSearchResultByFeature: import("./markers/markers.model").GetSearchResultByFeature;
        zoomToLayer: (layer: import("openlayers").layer.Vector, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToExtent: (extent: import("openlayers").Extent, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToCoords: (coords: import("openlayers").Coordinate, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToMarker: (marker: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToCluster: (cluster: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        selectFeauture: (feature: import("openlayers").Feature | import("./markers/markers.model").SearchItem | import("./markers/markers.model").ReverseResult, options?: import("./markers/markers.model").SelectFeautureOptions | undefined) => void;
        deselectAll: () => void;
        getFeatureFromEvent: (evt: import("openlayers").MapBrowserEvent) => import("openlayers").Feature | undefined;
        reverseOnPoint: (point: import("openlayers").Coordinate, { useMarker, usePopup, customText }?: import("../mixins/events.mixin.model").ReverseOnPointOptions) => Promise<{
            marker: import("openlayers").layer.Vector | null;
            stdPoint: import("openlayers").Coordinate;
            data: any;
        } | {
            marker?: undefined;
            stdPoint?: undefined;
            data?: undefined;
        }>;
        search: ({ term, coords }: import("./markers/markers.model").SearchProps, options?: import("./markers/markers.model").SearchOptions | undefined) => Promise<void>;
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
        toggleResultDrawers: (value?: boolean | undefined) => void;
    };
    map: {
        shakeMap: (delay?: number) => void;
        togglePoi: (value: boolean) => void;
        toggleTraffic: (value: boolean) => void;
    };
};
