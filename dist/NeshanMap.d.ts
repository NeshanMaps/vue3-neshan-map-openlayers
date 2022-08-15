
export declare const createHeaders: (token: string) => {
    'Api-Key': string;
};
export declare const createApi: (token: string) => Api;

export type { Ol };
export declare type NuString = null | string;
export declare type MapType = "neshan" | "dreamy" | "dreamy-gold" | "standard-night" | "standard-day" | "osm-bright";
export declare interface OlMap extends Map {
    setMapType(value: MapType): void;
    switchPoiLayer(value: boolean): void;
    switchTrafficLayer(value: boolean): void;
}
export declare type DoubleNums = [number, number];
export declare type Style = style.Style;
export declare type Image = Ol.style.Image;
export declare type Text = style.Text;
export declare type Source = Ol.source.Source;
export declare type VectorLayer = Ol.layer.Vector;
export declare type VectorLayerRef = Ref<VectorLayer | undefined>;
export declare type Cluster = Ol.source.Cluster;
export declare interface CoordsObj {
    latitude: number;
    longitude: number;
}
export declare type DivElementRef = Ref<HTMLDivElement | undefined>;
export declare interface Tile {
    title: MapType;
    url: string;
}
export declare type IconColor = "red" | "blue";
export declare interface CreateIconProps {
    color?: IconColor;
    iconScale?: number;
    src?: string;
    anchor?: DoubleNums;
}
export declare interface CreateRawStyleProps {
    image?: Image;
    text?: Text;
}
export declare interface CreateStyleProps {
    hidePopup?: boolean;
    image?: Image;
}
export declare interface CreateLayerProps {
    target?: string | Element;
    style?: Style | Ol.StyleFunction;
    source?: Source;
}
export declare interface Api {
    REVERSE: (lng: number, lat: number) => Promise<ReverseResult>;
    SEARCH: (term: string, coords: Coordinate) => Promise<SearchResult>;
}
export declare interface HandleSearchProps {
    term?: string;
    coords?: Coordinate;
}
export declare interface CreateMarkersPointsItem {
    style?: Style;
    image?: Image;
    color?: IconColor;
    iconScale?: number;
    text?: string;
    coords?: Coordinate;
    props?: any;
}
export declare type CreateMarkersPoints = CreateMarkersPointsItem[];
export declare interface CreateMarkersResult {
    layer: VectorLayer;
    style: Style | undefined;
}
export declare type CreateMarkers = (points: CreateMarkersPoints, options?: CreateMarkersOptions) => CreateMarkersResult;
export declare type ResultHoverCallback = (...[arg]: any[]) => any;
export declare type ResultClickCallback = (...[arg]: any[]) => any;
export declare interface MarkerHoverCallbackProps {
    changeOverlayStats: ChangeOverlayStats;
    map: OlMap | null;
    feature: Feature;
}
export declare type MarkerHoverCallback = (options: MarkerHoverCallbackProps) => void;
export declare type MarkersIconCallback = (points: CreateMarkersPointsItem) => CreateIconProps;
export declare interface EventsMixinProps {
    mapContainer: DivElementRef;
    popupContainer: DivElementRef;
    persistantContainer: DivElementRef;
    emits: (event: "on-zoom" | "on-click", arg: any) => void;
    resultHoverCallback?: ResultHoverCallback;
    resultClickCallback?: ResultClickCallback;
    markerHoverCallback?: MarkerHoverCallback;
    popupOnMarkerHover: boolean;
    popupOnResultHover: boolean;
    zoomOnMarkerClick: boolean;
    zoomOnResultClick: boolean;
}
export declare interface CreateMarkersOptions {
    markersIconCallback?: MarkersIconCallback;
    anchor?: DoubleNums;
    hidePopup?: boolean;
    cluster?: boolean;
    clusterThreshold?: number;
    clusterDistance?: number;
    clusterMinDistance?: number;
    props?: any;
}
export declare interface CreateMapPointsOptions {
    color?: IconColor;
    iconScale: number;
}

export interface DetailsSectionMixin {
    props: Readonly<ExtractPropTypes<{
        item: PropType<SelectedMarker>;
    }>>;
    containerRef: Ref<HTMLElement | undefined>;
}

export declare function detailsSectionMixin({ props, containerRef, }: DetailsSectionMixin): {
    iconName: import("vue").ComputedRef<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
    width: import("vue").Ref<number>;
    formattedItem: import("vue").ComputedRef<{
        place: string;
        address: string;
        region: string;
        neighbourhood: string;
        in_odd_even_zone: boolean;
        in_traffic_zone: boolean;
    }>;
};

export interface DimensionsMixin {
    containerRef: Ref<HTMLElement | undefined>;
}

export declare function dimensionsMixin({ containerRef }: DimensionsMixin): {
    width: import("vue").Ref<number>;
};

export declare interface ReverseOnPointOptions {
    useMarker?: boolean;
    usePopup?: boolean;
    customText?: string;
}

export declare function eventsMixin({ emits, resultHoverCallback, resultClickCallback, markerHoverCallback, zoomOnMarkerClick, zoomOnResultClick, popupOnMarkerHover, popupOnResultHover, mapContainer, popupContainer, persistantContainer, }: EventsMixinProps): {
    setupMapEvents: () => void;
    setupClickEvent: () => void;
    setupZoomEvent: () => void;
    setupMarkerHoverEvent: () => void;
    handleClickEvent: (event: MapBrowserEvent) => Promise<void>;
    handleResultHover: (item: SearchItem) => void;
    handleResultClick: (item: SearchItem) => void;
    getClusterExtent: (cluster: Feature) => import("openlayers").Extent;
    zoom: import("vue").Ref<number>;
};

export * from './events.mixin';
export * from './detailsSection.mixin';
export * from './dimensions.mixin';

export declare const urls: {
    reverse: string;
    search: string;
    map: string;
};
export declare const markerUrls: {
    red: string;
    blue: string;
    white: string;
};
export declare const tiles: Tile[];
export declare const breakpointsSegments: {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
};
export declare const breakpointsSegmentsPixels: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export declare const drawerConstants: {
    width: number;
};
export declare const unsetMapDimnensions: {
    width: number;
    height: number;
};

export declare type RouteTypes = keyof typeof inlineSvgs;
export declare type CategoryName = keyof typeof defaultIcons;
export declare interface Icon {
    d: string;
    color?: string;
    size?: number;
    scale?: number;
}

export declare const inlineSvgs: {
    close: {
        d: string;
    };
    magnet: {
        d: string;
    };
    neighborhood_landmark: {
        d: string;
    };
    formal_school: {
        d: string;
    };
    university: {
        d: string;
    };
    primary: {
        d: string;
    };
    secondary: {
        d: string;
        scale: number;
    };
    tertiary: {
        d: string;
        scale: number;
    };
    vaccine: {
        d: string;
    };
    subway_station: {
        d: string;
    };
    metro_entrance: {
        d: string;
        scale: number;
    };
    footway: {
        d: string;
    };
    department_store: {
        d: string;
    };
    internet_cafe: {
        d: string;
    };
    park: {
        d: string;
    };
    hotel: {
        d: string;
    };
    local_government_office: {
        d: string;
    };
    marker: {
        d: string;
    };
    city: {
        d: string;
    };
    residential: {
        d: string;
    };
    back: {
        d: string;
    };
};
export declare const defaultIcons: {
    place: {
        d: string;
    };
    municipal: {
        d: string;
    };
};

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

export declare const getters: {
    screen: {
        small: boolean;
    };
    drawerWidth: number;
    loading: boolean;
};

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

export declare const mutations: {
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
    setMap(value: OlMap): void;
    setApi(value: Api): void;
};

export declare const state: {
    map: {
        setMapType: (value: import("@/components/Map.model").MapType) => void;
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

export declare const dimensionsActions: {
    updateMapDimensions: (mapContainer: DivElementRef) => void;
    updateBreakpoints: () => void;
};

export declare interface BreakpointsSegments {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
}
export declare interface BreakPoints extends BreakpointsSegments {
    lt: BreakpointsSegments;
    gt: BreakpointsSegments;
}

export declare const dimensionsMutations: {
    setBreakPoints(value: BreakPoints): void;
    setMapDimenstions(value: {
        width: number;
        height: number;
    }): void;
};

export declare const dimenstionsState: {
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

export declare const drawersActions: {
    openResultDrawers: () => void;
};

export declare const drawersMutations: {
    toggleDrawerActivation(value: boolean): void;
    toggleDrawerShowDetails(value: boolean): void;
    toggleMobileDrawerShowDetails(value: boolean): void;
};

export declare const drawersState: {
    drawerActivation: boolean;
    drawerShowDetails: boolean;
    mobileDrawerShowDetails: boolean;
};

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

export declare interface SearchItem {
    category: string;
    location: {
        x: number;
        y: number;
    };
    neighbourhood: string;
    region: string;
    title: string;
    type: RouteTypes;
    address: string;
}
export declare interface SearchResult {
    count: number;
    items: SearchItem[];
}
export declare interface ReverseResult {
    city: NuString;
    district: NuString;
    formatted_address: NuString;
    in_odd_even_zone: boolean;
    in_traffic_zone: boolean;
    municipality_zone: NuString;
    neighbourhood: NuString;
    place: NuString;
    route_name: NuString;
    route_type: null | RouteTypes;
    state: NuString;
    status: NuString;
    village: NuString;
}
export declare interface SearchProps {
    term: string;
    coords: Coordinate;
}
export declare type GetSearchResultByFeature = (feature: Feature) => SearchItem | undefined;
export declare type GetMarkerByTitle = (title: string) => Feature | undefined;
export declare type GetClusterByTitle = (title: string) => {
    feature: Feature | undefined;
    cluster: Feature | undefined;
};
export declare type SelectedMarker = ReverseResult | SearchItem | null;
export declare interface ZoomToExtentOptions {
    duration?: number;
}
export declare interface SelectFeautureOptions {
    text?: string;
    coords?: Coordinate;
    delay?: number;
}
export declare interface SearchOptions {
    markersIconCallback?: MarkersIconCallback;
    cluster?: boolean;
    clusterThreshold?: number;
}

export declare const markersMutations: {
    setSelectedMarker(value: SelectedMarker): void;
    setMainMarker(value: VectorLayer): void;
    setSearchMarkers(value: VectorLayer): void;
    setMainMarkerCoords(value: Coordinate): void;
    setSearchResults(value: SearchItem[]): void;
    setReverseResult(value: ReverseResult): void;
};

export declare const markersState: {
    selectedMarker: SelectedMarker;
    mainMarker: Ref<import("openlayers").layer.Vector>;
    mainMarkerCoords: Ref<Coordinate>;
    reverseResult: ReverseResult;
    searchMarkers: Ref<import("openlayers").layer.Vector>;
    searchResults: SearchItem[];
};

export declare const overlaysActions: {
    setupOverlays: SetupOverlay;
    createOverlay: (container: DivElementRef, persistant?: boolean) => Overlay;
    changeOverlayStats: ChangeOverlayStats;
};

export declare const markersMutations: {
    setOverlay(value: Overlay): void;
    setPersistantOverlay(value: Overlay): void;
};

export declare type Overlay = Ol.Overlay;
export declare interface OverlayMixinProps {
    map: OlMap | null;
    popupContainer: Ref<HTMLElement | null>;
    persistantContainer: Ref<HTMLElement | null>;
}
export declare interface ChangeOverlayStatsProps {
    coords: Coordinate;
    text: string;
    offset?: number[];
}
export declare type ChangeOverlayStats = (options?: ChangeOverlayStatsProps, target?: "temporary" | "persistant") => void;
export declare interface SetupOverlayProps {
    popupContainer: DivElementRef;
    persistantContainer: DivElementRef;
}
export declare type SetupOverlay = (options: SetupOverlayProps) => void;

export declare const overlayState: {
    overlay: import("openlayers").Overlay;
    persistantOverlay: import("openlayers").Overlay;
};

/**
 * Receives an array of points and returns a layer of markers.
 * @param points - Array of points.
 * @param point.coords - Coordinates of that point.
 * @param point.text - If you have a particular text for the point.
 * @param point.color - If you have a particular color for that point (only checks the first point for now).
 * @param point.image - If you have a particular image for that point (only checks the first point for now).
 * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
 * @param point.originalItem - original item from neshan search result
 * @param point.props - props to set for point feature
 * @param options.hidePopup - If you don't want to show popup
 * @param options.cluster - If these markers need to be clusterd on given zoom number
 * @param options.clusterThreshold - Zoom number that markers should be clusterd on zoom condition above that given zoom
 * @param options.props - Props to set for all features
 * @returns style and layer.
 */
export declare const createMarkers: CreateMarkers;
export declare const createText: () => Text;
export declare const createIcon: ({ color, iconScale, src, anchor, }?: CreateIconProps) => Ol.style.Image;
export declare const createRawStyle: ({ image, text }: CreateRawStyleProps) => Style;
export declare const createStyle: ({ hidePopup, image }: CreateStyleProps) => {
    style: Ol.style.Style;
    styleFunc: Ol.StyleFunction;
};
/**
 * Creates ol layer
 * @returns ol layer
 */
export declare const createLayer: ({ target, style, source, }: CreateLayerProps) => VectorLayer;
/**
 * Converts points given from neshan server to openlayers-friendly points
 * @param items - Items from search result
 * @param options.color - color of the markers
 * @param options.iconScale - scale of the markers
 */
export declare const createMapPoints: (items: SearchItem[], options?: CreateMapPointsOptions) => {
    coords: Ol.Coordinate;
    text: string;
    color: IconColor;
    iconScale: number;
    originalItem: SearchItem;
}[];
export declare const createClusterSource: (features: Feature[], { minDistance, distance }?: {
    minDistance?: number;
    distance?: number;
}) => Source;
/**
 * Gets the sufficent extent to zoom on a cluster or marker
 * @param cluster
 * @returns extent
 */
export declare const getClusterExtent: (cluster: Feature) => Ol.Extent;
/**
 * Gets the extent of a feature
 * @param feature
 * @returns extent
 */
export declare const getFeatureExtent: (feature: Feature) => Ol.Extent;
/**
 * Takes a feature and returns text value from its properties
 * and ol coords on map
 * @param feature
 * @returns
 */
export declare const getCoordsAndTextFromFeature: (feature: Feature) => {
    featCoords: Ol.Coordinate;
    featText: string | string[];
};
/**
 * Gets OpenLayer Coordinates of the given feature
 * @param feature
 * @returns Coords array
 */
export declare const getCoordsFromFeature: (feature: Feature) => Ol.Coordinate;
/**
 * Receives an array of points and returns an array of features.
 * @param points - Array of points.
 * @param point.text - If you have a particular text for the point.
 * @param proint.props - Props to set for a feature
 * @param props - Props to set for features
 * @returns array of features.
 */
export declare const createFeaturesFromPoints: (points: CreateMarkersPoints, markersIconCallback?: MarkersIconCallback, props?: any) => Feature[];

export * from './location.util';
export * from './features.util';

/**
 * Creates the sufficent title based on result data.
 * @param data - result of neshan web search
 * @returns title
 */
export declare const getTitleFromData: (data: ReverseResult) => string;
/**
 * Get the object of location and turns it into array
 * @param loc - location object
 * @returns
 */
export declare const sanitizeLocation: (loc?: CoordsObj) => Coordinate;
/**
 * Gets the device location
 * if it was succesfull, formats it and returns
 * otherwise, sends Neshan locaton
 * @returns location array
 */
export declare const getLocation: () => Promise<Coordinate>;
/**
 * Create an object for a quick lat lng access
 */
export declare const createCoordsObject: () => {
    longitude: number;
    latitude: number;
};
/**
 * Transforms common latlng to open layers-friendly latlng
 * @param point
 * @param from
 * @param to
 * @returns points
 */
export declare const transformCoords: (point: Coordinate, from?: string, to?: string) => Coordinate;

export declare const _default: import("vue").DefineComponent<{
    mapKey: {
        type: StringConstructor;
        required: true;
    };
    serviceKey: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: PropType<CoordsObj>;
        default: any;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    poi: BooleanConstructor;
    traffic: BooleanConstructor;
    defaultType: {
        type: PropType<MapType>;
        default: string;
    };
    mapTypes: {
        type: PropType<MapType[]>;
        default: MapType[];
    };
    settingsBoxClass: ArrayConstructor;
    settingsBoxStyle: ObjectConstructor;
    hideSettings: BooleanConstructor;
    typesClass: ArrayConstructor;
    hideSearchBox: BooleanConstructor;
    hideSearchContainer: BooleanConstructor;
    hideResultBox: BooleanConstructor;
    resultHoverCallback: PropType<ResultHoverCallback>;
    resultClickCallback: PropType<ResultClickCallback>;
    markersIconCallback: PropType<MarkersIconCallback>;
    markerHoverCallback: PropType<MarkerHoverCallback>;
    popupOnMarkerHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupOnResultHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnMarkerClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnResultClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    cluster: {
        type: BooleanConstructor;
        default: boolean;
    };
    clusterThreshold: {
        type: NumberConstructor;
        default: number;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-zoom" | "on-click")[], "on-zoom" | "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mapKey: {
        type: StringConstructor;
        required: true;
    };
    serviceKey: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: PropType<CoordsObj>;
        default: any;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    poi: BooleanConstructor;
    traffic: BooleanConstructor;
    defaultType: {
        type: PropType<MapType>;
        default: string;
    };
    mapTypes: {
        type: PropType<MapType[]>;
        default: MapType[];
    };
    settingsBoxClass: ArrayConstructor;
    settingsBoxStyle: ObjectConstructor;
    hideSettings: BooleanConstructor;
    typesClass: ArrayConstructor;
    hideSearchBox: BooleanConstructor;
    hideSearchContainer: BooleanConstructor;
    hideResultBox: BooleanConstructor;
    resultHoverCallback: PropType<ResultHoverCallback>;
    resultClickCallback: PropType<ResultClickCallback>;
    markersIconCallback: PropType<MarkersIconCallback>;
    markerHoverCallback: PropType<MarkerHoverCallback>;
    popupOnMarkerHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupOnResultHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnMarkerClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnResultClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    cluster: {
        type: BooleanConstructor;
        default: boolean;
    };
    clusterThreshold: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onOn-zoom"?: (...args: any[]) => any;
    "onOn-click"?: (...args: any[]) => any;
}, {
    zoomOnMarkerClick: boolean;
    zoomOnResultClick: boolean;
    popupOnMarkerHover: boolean;
    popupOnResultHover: boolean;
    serviceKey: string;
    center: CoordsObj;
    zoom: number;
    poi: boolean;
    traffic: boolean;
    defaultType: MapType;
    mapTypes: MapType[];
    hideSettings: boolean;
    hideSearchBox: boolean;
    hideSearchContainer: boolean;
    hideResultBox: boolean;
    cluster: boolean;
    clusterThreshold: number;
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    poi: BooleanConstructor;
    traffic: BooleanConstructor;
    mapType: {
        type: PropType<MapType>;
        default: string;
    };
    tiles: {
        type: PropType<Tile[]>;
        default: () => any[];
    };
    settingsBoxClass: ArrayConstructor;
    settingsBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:mapType" | "update:poi" | "update:traffic")[], "update:mapType" | "update:poi" | "update:traffic", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    poi: BooleanConstructor;
    traffic: BooleanConstructor;
    mapType: {
        type: PropType<MapType>;
        default: string;
    };
    tiles: {
        type: PropType<Tile[]>;
        default: () => any[];
    };
    settingsBoxClass: ArrayConstructor;
    settingsBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
}>> & {
    "onUpdate:mapType"?: (...args: any[]) => any;
    "onUpdate:traffic"?: (...args: any[]) => any;
    "onUpdate:poi"?: (...args: any[]) => any;
}, {
    poi: boolean;
    traffic: boolean;
    tiles: Tile[];
    mapType: MapType;
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    results: PropType<SearchItem[]>;
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
    loading: BooleanConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "result-click" | "result-hover")[], "search" | "result-click" | "result-hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    results: PropType<SearchItem[]>;
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
    loading: BooleanConstructor;
}>> & {
    onSearch?: (...args: any[]) => any;
    "onResult-click"?: (...args: any[]) => any;
    "onResult-hover"?: (...args: any[]) => any;
}, {
    loading: boolean;
    searchCoords: CoordsObj;
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    color: StringConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: StringConstructor;
}>>, {}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "update:search-text" | "update:search-coords")[], "submit" | "update:search-text" | "update:search-coords", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}>> & {
    onSubmit?: (...args: any[]) => any;
    "onUpdate:search-text"?: (...args: any[]) => any;
    "onUpdate:search-coords"?: (...args: any[]) => any;
}, {}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    name: {
        type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
}>>, {
    name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
    size: number;
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    item: PropType<SelectedMarker>;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: PropType<SelectedMarker>;
}>>, {}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    resultBoxClass: ArrayConstructor;
    resultBoxStyle: ObjectConstructor;
    results: {
        type: PropType<SearchItem[]>;
        default: () => any[];
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("result-click" | "result-hover")[], "result-click" | "result-hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    resultBoxClass: ArrayConstructor;
    resultBoxStyle: ObjectConstructor;
    results: {
        type: PropType<SearchItem[]>;
        default: () => any[];
    };
}>> & {
    "onResult-click"?: (...args: any[]) => any;
    "onResult-hover"?: (...args: any[]) => any;
}, {
    results: SearchItem[];
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    dense: BooleanConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    dense: BooleanConstructor;
}>>, {
    color: string;
    dense: boolean;
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    item: PropType<SearchItem>;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: PropType<SearchItem>;
}>>, {}>;
export default _default;
