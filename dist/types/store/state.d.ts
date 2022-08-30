export declare const state: {
    api: {
        REVERSE: (lng: number, lat: number) => Promise<import("./markers/markers.model").PrimaryReverseResult>;
        SEARCH: (term: string, coords: import("openlayers").Coordinate) => Promise<import("./markers/markers.model").SearchResult>;
    };
    searchLoading: boolean;
    reverseLoading: boolean;
    mapContainer: HTMLDivElement;
    map: {
        setMapType: (value: import("./map/map.model").MapType) => void;
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
    mapType: import("./map/map.model").MapType;
    zoom: number;
    poiLayer: boolean;
    trafficLayer: boolean;
    viewType: import("./map/map.model").ViewType;
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
    popupContainer: HTMLDivElement;
    persistantContainer: HTMLDivElement;
    selectedMarker: {
        mapCoords: [number, number];
        iconUrl: string;
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
        mapCoords: [number, number];
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
        mapCoords: [number, number];
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
        mapCoords: [number, number];
        iconUrl: string;
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
        width: string;
        height: string;
    };
};
