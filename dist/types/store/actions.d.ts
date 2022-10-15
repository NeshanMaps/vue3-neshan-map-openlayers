export declare const actions: {
    markers: {
        addMarkers: import("./markers/markers.model").AddMarkers;
        toggleClusterSource: (context: import("./store.model").Context, layer: import("openlayers").layer.Vector, deactivate: boolean) => void;
        getClusterByCoords: import("./markers/markers.model").GetClusterByCoords;
        getMarkerInClusterByCoords: (context: import("./store.model").Context, cluster: import("openlayers").Feature, coords: import("openlayers").Coordinate) => import("openlayers").Feature | undefined;
        getMarkerByCoords: import("./markers/markers.model").GetMarkerByCoords;
        getSearchResultByFeature: import("./markers/markers.model").GetSearchResultByFeature;
        zoomToLayer: (context: import("./store.model").Context, layer: import("openlayers").layer.Vector, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToExtent: ({ state, getters }: import("./store.model").Context, extent: import("openlayers").Extent, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToCoords: (context: import("./store.model").Context, coords: import("openlayers").Coordinate, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToMarker: (context: import("./store.model").Context, marker: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        zoomToCluster: (context: import("./store.model").Context, cluster: import("openlayers").Feature, options?: import("./markers/markers.model").ZoomToExtentOptions | undefined) => void;
        selectFeauture: (context: import("./store.model").Context, feature: import("openlayers").Feature | import("./markers/markers.model").ReverseResult | import("./markers/markers.model").SearchItem, options?: import("./markers/markers.model").SelectFeautureOptions | undefined) => void;
        deselectAll: (context: import("./store.model").Context) => void;
        getFeatureFromEvent: (context: import("./store.model").Context, evt: import("openlayers").MapBrowserEvent) => import("openlayers").Feature | undefined;
        reverseOnPoint: (context: import("./store.model").Context, point: import("openlayers").Coordinate, { useMarker, usePopup, customText }?: import("../mixins/events.mixin.model").ReverseOnPointOptions) => Promise<{
            marker: import("openlayers").layer.Vector | null;
            stdPoint: import("openlayers").Coordinate;
            data: import("./markers/markers.model").PrimaryReverseResult;
        } | {
            marker?: undefined;
            stdPoint?: undefined;
            data?: undefined;
        }>;
        search: (context: import("./store.model").Context, { term, coords }: import("./markers/markers.model").SearchProps, options?: import("./markers/markers.model").SearchOptions | undefined) => Promise<void>;
    };
    dimensions: {
        updateMapDimensions: (context: import("./store.model").Context) => void;
        updateBreakpoints: (context: import("./store.model").Context) => void;
    };
    overlays: {
        setupOverlays: (context: import("./store.model").Context) => void;
        createOverlay: (context: import("./store.model").Context, container: HTMLDivElement, persistant?: boolean) => import("openlayers").Overlay;
        changeOverlayStats: import("./overlays/overlays.model").ChangeOverlayStats;
    };
    drawers: {
        toggleResultDrawers: (context: import("./store.model").Context, value?: boolean) => void;
    };
    map: {
        shakeMap: (context: import("./store.model").Context, delay?: number) => void;
        togglePoi: (context: import("./store.model").Context, value?: boolean) => void;
        toggleTraffic: (context: import("./store.model").Context, value?: boolean) => void;
        setMapType: (context: import("./store.model").Context, value: import("./map/map.model").MapType) => void;
    };
};
