
export declare const createHeaders: (token: string) => {
    "Api-Key": string;
};
export declare const createApi: (token: string) => Api;

export declare type NuString = null | string;
export declare type MapType = "neshan" | "dreamy" | "dreamy-gold" | "standard-night" | "standard-day" | "osm-bright";
export declare type DoubleNums = [number, number];
export declare type QuadrupleNums = [number, number, number, number];
export declare type Extent = QuadrupleNums;
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
export declare interface CreateStyleProps {
    image?: any;
    text?: any;
}
export declare interface CreateLayerProps {
    target?: string;
    style?: any;
    source?: any;
}
export declare interface GetTitleFromDataProps {
    place?: NuString;
    route_name?: NuString;
    neighbourhood?: NuString;
}
export declare interface CoordsObj {
    latitude: number;
    longitude: number;
}
export declare type CoordsArr = DoubleNums;
export declare interface SearchItem {
    category: string;
    location: {
        x: number;
        y: number;
    };
    neighbourhood: string;
    region: string;
    title: string;
    type: string;
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
    route_type: NuString;
    state: NuString;
    status: NuString;
    village: NuString;
}
export declare interface SearchProps {
    term?: string;
    coords?: CoordsArr;
}
export declare interface Api {
    REVERSE: (lng: number, lat: number) => Promise<ReverseResult>;
    SEARCH: (term: string, coords: CoordsArr) => Promise<SearchResult>;
}
export declare interface CreateMarkersPropsItem {
    style?: any;
    image?: any;
    color?: IconColor;
    iconScale?: number;
    text?: string;
    coords?: CoordsArr;
}
export declare type CreateMarkersProps = CreateMarkersPropsItem[];
export declare interface ChangeOverlayStatsProps {
    coords: CoordsArr;
    text: string;
}
export declare type ResultHoverCallback = (...[arg]: any[]) => any;
export declare type ResultClickCallback = (...[arg]: any[]) => any;
export declare type MarkersIconCallback = (points: CreateMarkersPropsItem) => CreateIconProps;
export declare interface EventsMixinProps {
    map: Ref<any>;
    mainMarker: Ref<any>;
    mainMarkerCoords: Ref<CoordsArr | null>;
    searchMarkers: Ref<any>;
    api: Ref<Api>;
    emits: (event: "on-zoom" | "on-click", arg: any) => void;
    resultHoverCallback?: ResultHoverCallback;
    resultClickCallback?: ResultClickCallback;
    popupOnMarkerHover: boolean;
    popupOnResultHover: boolean;
    zoomOnMarkerClick: boolean;
    zoomOnResultClick: boolean;
}
export declare interface MarkersMixinProps {
    map: Ref<any>;
    markersIconCallback?: MarkersIconCallback;
}
export declare interface ZoomToExtentOptions {
    duration?: number;
}

export declare const urls: {
    reverse: string;
    search: string;
    map: string;
};
export declare const tiles: Tile[];

export declare function eventsFunc({ map, mainMarker, mainMarkerCoords, searchMarkers, api, emits, resultHoverCallback, resultClickCallback, zoomOnMarkerClick, zoomOnResultClick, popupOnMarkerHover, popupOnResultHover, }: EventsMixinProps): {
    setupMapEvents: () => void;
    setupClickEvent: () => void;
    setupZoomEvent: () => void;
    setupMarkerHoverEvent: () => void;
    handleClickEvent: (event: any) => void;
    handleResultHover: (item: SearchItem) => void;
    handleResultClick: (item: SearchItem) => void;
    zoomToExtent: (extent: import("@/components/Map.model").QuadrupleNums, options?: ZoomToExtentOptions | undefined) => void;
    getClusterExtent: (cluster: any) => import("@/components/Map.model").QuadrupleNums;
};

export * from './markers.util';
export * from './location.util';
export * from './events.util';

/**
 * Creates the sufficent title based on result data.
 * @param data - result of neshan web search
 * @returns title
 */
export declare const getTitleFromData: (data: GetTitleFromDataProps) => string;
/**
 * Get the object of location and turns it into array
 * @param loc - location object
 * @returns
 */
export declare const sanitizeLocation: (loc?: CoordsObj | undefined) => import("../components/Map.model").DoubleNums | null;
/**
 * Gets the device location
 * if it was succesfull, formats it and returns
 * otherwise, sends Neshan locaton
 * @returns location array
 */
export declare const getLocation: () => Promise<import("../components/Map.model").DoubleNums>;
/**
 * Create an object for a quick lat lng access
 */
export declare const createCoordsObject: () => {
    longitude: number;
    latitude: number;
};
/**
 * Gets OpenLayer Coordinates of the given feature
 * @param feature
 * @returns Coords array
 */
export declare const getCoordsFromFeature: (feature: any) => import("../components/Map.model").DoubleNums;

export declare function markersFunc({ map, markersIconCallback }: MarkersMixinProps): {
    createText: () => any;
    createIcon: ({ color, iconScale, src, anchor, }?: CreateIconProps) => any;
    createStyle: ({ image, text }: CreateStyleProps) => any;
    createSource: (features: any) => any;
    createLayer: ({ target, style, source, }: CreateLayerProps) => any;
    createMapPoints: (items: SearchItem[], color?: string) => {
        coords: import("../components/Map.model").DoubleNums;
        text: string;
        color: IconColor;
        iconScale: number;
        originalItem: SearchItem;
    }[];
    createMarkers: (points: CreateMarkersProps, showPopup?: boolean) => {
        layer: any;
        style: any;
    };
    addMarkers: (points: CreateMarkersProps, showPopup?: boolean) => {
        layer: any;
        style: any;
    };
    clearMarkerLayer: (layer: any) => void;
};

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
        default: null;
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
        default: null;
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
}>> & {
    "onOn-zoom"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
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
}>;
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
        default: () => never[];
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
        default: () => never[];
    };
    settingsBoxClass: ArrayConstructor;
    settingsBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
}>> & {
    "onUpdate:mapType"?: ((...args: any[]) => any) | undefined;
    "onUpdate:traffic"?: ((...args: any[]) => any) | undefined;
    "onUpdate:poi"?: ((...args: any[]) => any) | undefined;
}, {
    poi: boolean;
    traffic: boolean;
    tiles: Tile[];
    mapType: MapType;
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
        default: string;
    };
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:mapType" | "update:search-text" | "update:search-coords" | "submit")[], "update:mapType" | "update:search-text" | "update:search-coords" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
        default: string;
    };
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
}>> & {
    "onUpdate:mapType"?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
}, {
    searchText: string;
    searchCoords: CoordsObj;
}>;
export default _default;

export declare const _default: import("vue").DefineComponent<{
    resultBoxClass: ArrayConstructor;
    resultBoxStyle: ObjectConstructor;
    results: {
        type: PropType<SearchItem[]>;
        default: () => never[];
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("result-hover" | "result-click")[], "result-hover" | "result-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    resultBoxClass: ArrayConstructor;
    resultBoxStyle: ObjectConstructor;
    results: {
        type: PropType<SearchItem[]>;
        default: () => never[];
    };
}>> & {
    "onResult-hover"?: ((...args: any[]) => any) | undefined;
    "onResult-click"?: ((...args: any[]) => any) | undefined;
}, {
    results: SearchItem[];
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
