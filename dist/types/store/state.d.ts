import { Api } from '../components/Map.model';
export declare const state: {
    api: Api | null;
    searchLoading: boolean;
    reverseLoading: boolean;
    mapContainer: HTMLDivElement | null;
    map: import("./map/map.model").OlMap | null;
    mapType: import("./map/map.model").MapType;
    zoom: number;
    poiLayer: boolean;
    trafficLayer: boolean;
    viewType: import("./map/map.model").ViewType;
    scale: number;
    drawerActivation: boolean;
    drawerShowDetails: boolean;
    mobileDrawerShowDetails: boolean;
    overlay: import("openlayers").Overlay | null;
    persistantOverlay: import("openlayers").Overlay | null;
    popupContainer: HTMLDivElement | null;
    persistantContainer: HTMLDivElement | null;
    selectedMarker: import("./markers/markers.model").SelectedMarker;
    mainMarker: import("openlayers").layer.Vector | null;
    mainMarkerCoords: import("openlayers").Coordinate | null;
    reverseResult: import("./markers/markers.model").ReverseResult | null;
    searchMarkers: import("openlayers").layer.Vector | null;
    searchResults: import("./markers/markers.model").SearchItem[];
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
export declare const stateGenerator: () => {
    api: {
        REVERSE: (lng: number, lat: number) => Promise<import("./markers/markers.model").PrimaryReverseResult>;
        SEARCH: (term: string, coords: import("openlayers").Coordinate) => Promise<import("./markers/markers.model").SearchResult>;
    } | null;
    searchLoading: boolean;
    reverseLoading: boolean;
    mapContainer: HTMLDivElement | null;
    map: {
        setMapType: (value: import("./map/map.model").MapType) => void;
        switchPoiLayer: (value: boolean) => void;
        switchTrafficLayer: (value: boolean) => void;
        addControl: (control: import("openlayers").control.Control) => void;
        addInteraction: (interaction: import("openlayers").interaction.Interaction) => void;
        addLayer: (layer: import("openlayers").layer.Base) => void;
        addOverlay: (overlay: import("openlayers").Overlay) => void;
        forEachFeatureAtPixel: <T>(pixel: import("openlayers").Pixel, callback: (feature: import("openlayers").Feature | import("openlayers").render.Feature, layer: import("openlayers").layer.Layer) => T, opt_options?: import("openlayers").olx.AtPixelOptions | undefined) => T;
        getFeaturesAtPixel: (pixel: import("openlayers").Pixel, opt_options?: import("openlayers").olx.AtPixelOptions | undefined) => (import("openlayers").Feature | import("openlayers").render.Feature)[] | null;
        forEachLayerAtPixel: <T_1>(pixel: import("openlayers").Pixel, callback: (layer: import("openlayers").layer.Layer, color: import("openlayers").Color) => T_1, opt_this?: any, opt_layerFilter?: ((layer: import("openlayers").layer.Layer) => boolean) | undefined, opt_this2?: any) => T_1;
        hasFeatureAtPixel: (pixel: import("openlayers").Pixel, opt_options?: import("openlayers").olx.AtPixelOptions | undefined) => boolean;
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
        set: (key: string, value: any, opt_silent?: boolean | undefined) => void;
        setProperties: (values: {
            [k: string]: any;
        }, opt_silent?: boolean | undefined) => void;
        unset: (key: string, opt_silent?: boolean | undefined) => void;
        changed: () => void;
        dispatchEvent: (event: string | import("openlayers").GlobalObject | import("openlayers").events.Event) => void;
        getRevision: () => number;
        on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => void;
    } | null;
    mapType: import("./map/map.model").MapType;
    zoom: number;
    poiLayer: boolean;
    trafficLayer: boolean;
    viewType: import("./map/map.model").ViewType;
    scale: number;
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
        setPosition: (position: import("openlayers").Coordinate | undefined) => void;
        setPositioning: (positioning: import("openlayers").OverlayPositioning) => void;
        get: (key: string) => any;
        getKeys: () => string[];
        getProperties: () => {
            [k: string]: any;
        };
        set: (key: string, value: any, opt_silent?: boolean | undefined) => void;
        setProperties: (values: {
            [k: string]: any;
        }, opt_silent?: boolean | undefined) => void;
        unset: (key: string, opt_silent?: boolean | undefined) => void;
        changed: () => void;
        dispatchEvent: (event: string | import("openlayers").GlobalObject | import("openlayers").events.Event) => void;
        getRevision: () => number;
        on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => void;
    } | null;
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
        setPosition: (position: import("openlayers").Coordinate | undefined) => void;
        setPositioning: (positioning: import("openlayers").OverlayPositioning) => void;
        get: (key: string) => any;
        getKeys: () => string[];
        getProperties: () => {
            [k: string]: any;
        };
        set: (key: string, value: any, opt_silent?: boolean | undefined) => void;
        setProperties: (values: {
            [k: string]: any;
        }, opt_silent?: boolean | undefined) => void;
        unset: (key: string, opt_silent?: boolean | undefined) => void;
        changed: () => void;
        dispatchEvent: (event: string | import("openlayers").GlobalObject | import("openlayers").events.Event) => void;
        getRevision: () => number;
        on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => void;
    } | null;
    popupContainer: HTMLDivElement | null;
    persistantContainer: HTMLDivElement | null;
    selectedMarker: {
        mapCoords: [number, number];
        city: import('../components/Map.model').NuString;
        district: import('../components/Map.model').NuString;
        formatted_address: import('../components/Map.model').NuString;
        in_odd_even_zone: boolean;
        in_traffic_zone: boolean;
        municipality_zone: import('../components/Map.model').NuString;
        neighbourhood: import('../components/Map.model').NuString;
        place: import('../components/Map.model').NuString;
        route_name: import('../components/Map.model').NuString;
        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
        state: import('../components/Map.model').NuString;
        status: import('../components/Map.model').NuString;
        village: import('../components/Map.model').NuString;
    } | {
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
    } | null;
    mainMarker: {
        getSource: () => import("openlayers").source.Vector;
        getStyle: () => import("openlayers").style.Style | import("openlayers").StyleFunction | import("openlayers").style.Style[];
        getStyleFunction: () => import("openlayers").StyleFunction | undefined;
        setStyle: (style: import("openlayers").style.Style | import("openlayers").StyleFunction | import("openlayers").style.Style[] | null | undefined) => void;
        setMap: (map: import("openlayers").Map) => void;
        setSource: (source: import("openlayers").source.Source) => void;
        getExtent: () => import("openlayers").Extent;
        getMaxResolution: () => number;
        getMinResolution: () => number;
        getOpacity: () => number;
        getVisible: () => boolean;
        getZIndex: () => number;
        setExtent: (extent: import("openlayers").Extent) => void;
        setMaxResolution: (maxResolution: number) => void;
        setMinResolution: (minResolution: number) => void;
        setOpacity: (opacity: number) => void;
        setVisible: (visible: boolean) => void;
        setZIndex: (zindex: number) => void;
        get: (key: string) => any;
        getKeys: () => string[];
        getProperties: () => {
            [k: string]: any;
        };
        set: (key: string, value: any, opt_silent?: boolean | undefined) => void;
        setProperties: (values: {
            [k: string]: any;
        }, opt_silent?: boolean | undefined) => void;
        unset: (key: string, opt_silent?: boolean | undefined) => void;
        changed: () => void;
        dispatchEvent: (event: string | import("openlayers").GlobalObject | import("openlayers").events.Event) => void;
        getRevision: () => number;
        on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => void;
    } | null;
    mainMarkerCoords: [number, number] | null;
    reverseResult: {
        mapCoords: [number, number];
        city: import('../components/Map.model').NuString;
        district: import('../components/Map.model').NuString;
        formatted_address: import('../components/Map.model').NuString;
        in_odd_even_zone: boolean;
        in_traffic_zone: boolean;
        municipality_zone: import('../components/Map.model').NuString;
        neighbourhood: import('../components/Map.model').NuString;
        place: import('../components/Map.model').NuString;
        route_name: import('../components/Map.model').NuString;
        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
        state: import('../components/Map.model').NuString;
        status: import('../components/Map.model').NuString;
        village: import('../components/Map.model').NuString;
    } | null;
    searchMarkers: {
        getSource: () => import("openlayers").source.Vector;
        getStyle: () => import("openlayers").style.Style | import("openlayers").StyleFunction | import("openlayers").style.Style[];
        getStyleFunction: () => import("openlayers").StyleFunction | undefined;
        setStyle: (style: import("openlayers").style.Style | import("openlayers").StyleFunction | import("openlayers").style.Style[] | null | undefined) => void;
        setMap: (map: import("openlayers").Map) => void;
        setSource: (source: import("openlayers").source.Source) => void;
        getExtent: () => import("openlayers").Extent;
        getMaxResolution: () => number;
        getMinResolution: () => number;
        getOpacity: () => number;
        getVisible: () => boolean;
        getZIndex: () => number;
        setExtent: (extent: import("openlayers").Extent) => void;
        setMaxResolution: (maxResolution: number) => void;
        setMinResolution: (minResolution: number) => void;
        setOpacity: (opacity: number) => void;
        setVisible: (visible: boolean) => void;
        setZIndex: (zindex: number) => void;
        get: (key: string) => any;
        getKeys: () => string[];
        getProperties: () => {
            [k: string]: any;
        };
        set: (key: string, value: any, opt_silent?: boolean | undefined) => void;
        setProperties: (values: {
            [k: string]: any;
        }, opt_silent?: boolean | undefined) => void;
        unset: (key: string, opt_silent?: boolean | undefined) => void;
        changed: () => void;
        dispatchEvent: (event: string | import("openlayers").GlobalObject | import("openlayers").events.Event) => void;
        getRevision: () => number;
        on: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        once: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => import("openlayers").GlobalObject | import("openlayers").GlobalObject[];
        un: (type: string | string[], listener: import("openlayers").EventsListenerFunctionType, opt_this?: import("openlayers").GlobalObject | undefined) => void;
    } | null;
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
