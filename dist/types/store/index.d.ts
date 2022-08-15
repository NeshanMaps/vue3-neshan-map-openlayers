export declare const store: {
    toggleDrawerActivation(value: boolean): void;
    toggleDrawerShowDetails(value: boolean): void;
    toggleMobileDrawerShowDetails(value: boolean): void;
    setBreakPoints(value: import("./dimensions/dimensions.model").BreakPoints): void;
    setMapDimenstions(value: {
        width: number;
        height: number;
    }): void;
    setSelectedMarker(value: import("./markers/markers.model").SelectedMarker): void;
    setMainMarker(value: import("openlayers").layer.Vector): void;
    setSearchMarkers(value: import("openlayers").layer.Vector): void;
    setMainMarkerCoords(value: import("openlayers").Coordinate): void;
    setSearchResults(value: import("./markers/markers.model").SearchItem[]): void;
    setReverseResult(value: import("./markers/markers.model").ReverseResult): void;
    toggleSearchLoading(value: boolean): void;
    toggleReverseLoading(value: boolean): void;
    setMap(value: import("../components/Map.model").OlMap): void;
    setApi(value: import("../components/Map.model").Api): void;
    state: {
        map: {
            setMapType: (value: import("../components/Map.model").MapType) => void;
            switchPoiLayer: (value: boolean) => void;
            switchTrafficLayer: (value: boolean) => void;
            addControl: (control: import("openlayers").control.Control) => void;
            addInteraction: (interaction: import("openlayers").interaction.Interaction) => void;
            addLayer: (layer: import("openlayers").layer.Base) => void;
            addOverlay: (overlay: import("openlayers").Overlay) => void;
            forEachFeatureAtPixel: <T>(pixel: import("openlayers").Pixel, callback: (feature: import("openlayers").Feature | import("openlayers").render.Feature, layer: import("openlayers").layer.Layer) => T, opt_options?: import("openlayers").olx.AtPixelOptions) => T;
            getFeaturesAtPixel: (pixel: import("openlayers").Pixel, opt_options?: import("openlayers").olx.AtPixelOptions) => (import("openlayers").Feature | import("openlayers").render.Feature)[];
            forEachLayerAtPixel: <T_1>(pixel: import("openlayers").Pixel, callback: (layer: import("openlayers").layer.Layer, color: import("openlayers").Color) => T_1, opt_this?: any, opt_layerFilter?: (layer: import("openlayers").layer.Layer) => boolean, opt_this2?: any) => T_1;
            hasFeatureAtPixel: (pixel: import("openlayers").Pixel, opt_options?: import("openlayers").olx.AtPixelOptions) => boolean;
            getEventCoordinate: (event: Event) => import("openlayers").Coordinate;
            getEventPixel: (event: Event) => import("openlayers").Pixel;
            getTarget: () => string | Element;
            getTargetElement: () => Element;
            getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => import("openlayers").Coordinate;
            getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
            getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
            getOverlayById: (id: string | number) => import("openlayers").Overlay;
            getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
            getLayerGroup: () => import("openlayers").layer.Group;
            getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
            getPixelFromCoordinate: (coordinate: import("openlayers").Coordinate) => import("openlayers").Pixel;
            getSize: () => import("openlayers").Size;
            getView: () => import("openlayers").View;
            getViewport: () => Element;
            renderSync: () => void;
            render: () => void;
            removeControl: (control: import("openlayers").control.Control) => import("openlayers").control.Control;
            removeInteraction: (interaction: import("openlayers").interaction.Interaction) => import("openlayers").interaction.Interaction;
            removeLayer: (layer: import("openlayers").layer.Base) => import("openlayers").layer.Base;
            removeOverlay: (overlay: import("openlayers").Overlay) => import("openlayers").Overlay;
            setLayerGroup: (layerGroup: import("openlayers").layer.Group) => void;
            setSize: (size: import("openlayers").Size) => void;
            setTarget: (target: string | Element) => void;
            setView: (view: import("openlayers").View) => void;
            updateSize: () => void;
            get: (key: string) => any;
            getKeys: () => string[];
            getProperties: () => {
                [k: string]: any;
            };
            set: (key: string, value: any, opt_silent?: boolean) => void;
            setProperties: (values: {
                [k: string]: any;
            }, opt_silent?: boolean) => void;
            unset: (key: string, opt_silent?: boolean) => void;
            changed: () => void;
            dispatchEvent: (event: string | import("openlayers").events.Event | import("openlayers").GlobalObject) => void;
            getRevision: () => number;
            on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
            once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
            un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => void;
        };
        api: {
            REVERSE: (lng: number, lat: number) => Promise<import("./markers/markers.model").ReverseResult>;
            SEARCH: (term: string, coords: import("openlayers").Coordinate) => Promise<import("./markers/markers.model").SearchResult>;
        };
        searchLoading: boolean;
        reverseLoading: boolean;
        drawerActivation: boolean;
        drawerShowDetails: boolean;
        mobileDrawerShowDetails: boolean;
        overlay: {
            getElement: () => Element;
            getId: () => string | number;
            getMap: () => import("openlayers").Map;
            getOffset: () => number[];
            getPosition: () => import("openlayers").Coordinate;
            getPositioning: () => import("openlayers").OverlayPositioning;
            setElement: (element: Element) => void;
            setMap: (map: import("openlayers").Map) => void;
            setOffset: (offset: number[]) => void;
            setPosition: (position: import("openlayers").Coordinate) => void;
            setPositioning: (positioning: import("openlayers").OverlayPositioning) => void;
            get: (key: string) => any;
            getKeys: () => string[];
            getProperties: () => {
                [k: string]: any;
            };
            set: (key: string, value: any, opt_silent?: boolean) => void;
            setProperties: (values: {
                [k: string]: any;
            }, opt_silent?: boolean) => void;
            unset: (key: string, opt_silent?: boolean) => void;
            changed: () => void;
            dispatchEvent: (event: string | import("openlayers").events.Event | import("openlayers").GlobalObject) => void;
            getRevision: () => number;
            on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
            once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
            un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => void;
        };
        persistantOverlay: {
            getElement: () => Element;
            getId: () => string | number;
            getMap: () => import("openlayers").Map;
            getOffset: () => number[];
            getPosition: () => import("openlayers").Coordinate;
            getPositioning: () => import("openlayers").OverlayPositioning;
            setElement: (element: Element) => void;
            setMap: (map: import("openlayers").Map) => void;
            setOffset: (offset: number[]) => void;
            setPosition: (position: import("openlayers").Coordinate) => void;
            setPositioning: (positioning: import("openlayers").OverlayPositioning) => void;
            get: (key: string) => any;
            getKeys: () => string[];
            getProperties: () => {
                [k: string]: any;
            };
            set: (key: string, value: any, opt_silent?: boolean) => void;
            setProperties: (values: {
                [k: string]: any;
            }, opt_silent?: boolean) => void;
            unset: (key: string, opt_silent?: boolean) => void;
            changed: () => void;
            dispatchEvent: (event: string | import("openlayers").events.Event | import("openlayers").GlobalObject) => void;
            getRevision: () => number;
            on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
            once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
            un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject) => void;
        };
        selectedMarker: {
            category: string;
            location: {
                x: number;
                y: number;
            };
            neighbourhood: string;
            region: string;
            title: string;
            type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
            address: string;
        } | {
            city: string;
            district: string;
            formatted_address: string;
            in_odd_even_zone: boolean;
            in_traffic_zone: boolean;
            municipality_zone: string;
            neighbourhood: string;
            place: string;
            route_name: string;
            route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
            state: string;
            status: string;
            village: string;
        };
        mainMarker: import("openlayers").layer.Vector;
        mainMarkerCoords: import("openlayers").Coordinate;
        reverseResult: {
            city: string;
            district: string;
            formatted_address: string;
            in_odd_even_zone: boolean;
            in_traffic_zone: boolean;
            municipality_zone: string;
            neighbourhood: string;
            place: string;
            route_name: string;
            route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
            state: string;
            status: string;
            village: string;
        };
        searchMarkers: import("openlayers").layer.Vector;
        searchResults: {
            category: string;
            location: {
                x: number;
                y: number;
            };
            neighbourhood: string;
            region: string;
            title: string;
            type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
            address: string;
        }[];
        breakpoints: {
            lt: {
                xs: boolean;
                sm: boolean;
                md: boolean;
                lg: boolean;
                xl: boolean;
            };
            gt: {
                xs: boolean;
                sm: boolean;
                md: boolean;
                lg: boolean;
                xl: boolean;
            };
            xs: boolean;
            sm: boolean;
            md: boolean;
            lg: boolean;
            xl: boolean;
        };
        mapDimensions: {
            width: number;
            height: number;
        };
    };
    getters: {
        screen: {
            small: boolean;
        };
        drawerWidth: number;
        loading: boolean;
    };
    actions: {
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
};
