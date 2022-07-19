
export declare const createHeaders: (token: string) => {
    "Api-Key": string;
};
export declare const createApi: (token: string) => Api;

export declare type NuString = null | string;
export declare type MapType = 'neshan' | 'dreamy' | 'dreamy-gold' | 'standard-night' | 'standard-day' | 'osm-bright';
export declare type DoubleNums = [number, number];
export declare type QuadrupleNums = [number, number, number, number];
export declare type Extent = QuadrupleNums;
export declare type Map = Ref<any>;
export declare interface Tile {
    title: MapType;
    url: string;
}
export declare type IconColor = 'red' | 'blue';
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
    map: Map;
    mainMarker: Ref<any>;
    mainMarkerCoords: Ref<CoordsArr | null>;
    searchMarkers: Ref<any>;
    api: Ref<Api>;
    emits: (event: 'on-zoom' | 'on-click', arg: any) => void;
    resultHoverCallback?: ResultHoverCallback;
    resultClickCallback?: ResultClickCallback;
    popupOnMarkerHover: boolean;
    popupOnResultHover: boolean;
    zoomOnMarkerClick: boolean;
    zoomOnResultClick: boolean;
    addMarkers: (points: CreateMarkersProps, options?: CreateMarkersOptions) => {
        layer: any;
        style: any;
    };
    setupOverlay: () => void;
    overlay: Ref<any>;
    changeOverlayStats: ({ text, coords }: ChangeOverlayStatsProps) => void;
}
export declare interface MarkersMixinProps {
    map: Map;
    markersIconCallback?: MarkersIconCallback;
}
export declare interface ZoomToExtentOptions {
    duration?: number;
}
export declare interface OverlayMixinProps {
    map: Map;
}
export declare interface CreateMarkersOptions {
    markersIconCallback?: MarkersIconCallback;
    showPopup?: boolean;
}

export declare function eventsMixin({ map, mainMarker, mainMarkerCoords, searchMarkers, api, emits, resultHoverCallback, resultClickCallback, zoomOnMarkerClick, zoomOnResultClick, popupOnMarkerHover, popupOnResultHover, setupOverlay, overlay, changeOverlayStats, addMarkers }: EventsMixinProps): {
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

export * from './events.mixin';
export * from './overlay.mixin';
export * from './markers.mixin';

export declare function markersMixin({ map }: MarkersMixinProps): {
    addMarkers: (points: CreateMarkersProps, options?: CreateMarkersOptions | undefined) => {
        layer: any;
        style: any;
    };
    clearMarkerLayer: (layer: any) => void;
};

export declare function overlayMixin({ map }: OverlayMixinProps): {
    setupOverlay: () => void;
    createOverlay: (persistant?: boolean) => any;
    changeOverlayStats: ({ coords, text }: ChangeOverlayStatsProps) => void;
    overlay: import("vue").Ref<any>;
};

export declare const urls: {
    reverse: string;
    search: string;
    map: string;
};
export declare const markerUrls: {
    red: string;
    blue: string;
};
export declare const tiles: Tile[];

export declare const createText: () => any;
export declare const createIcon: ({ color, iconScale, src, anchor, }?: CreateIconProps) => any;
export declare const createStyle: ({ image, text }: CreateStyleProps) => any;
/**
 * Creates ol layer
 * @returns ol layer
 */
export declare const createLayer: ({ target, style, source, }: CreateLayerProps) => any;
/**
 * Converts points given from neshan server to openlayers-friendly points
 * @param items - Items from search result
 * @param color - color of the markers
 */
export declare const createMapPoints: (items: SearchItem[], color?: string) => {
    coords: import("@/components/Map.model").DoubleNums;
    text: string;
    color: IconColor;
    iconScale: number;
    originalItem: SearchItem;
}[];
/**
 * Receives an array of points and returns a layer of markers.
 * @param points - Array of points.
 * @param point.coords - Coordinates of that point.
 * @param point.text - If you have a particular text for the point.
 * @param point.style - If you have a particular style for that point (only checks the first point for now).
 * @param point.color - If you have a particular color for that point (only checks the first point for now).
 * @param point.image - If you have a particular image for that point (only checks the first point for now).
 * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
 * @param point.originalItem - original item from neshan search result
 * @param options.showPopup - If you want show the text as popup
 * @returns style and layer.
 */
export declare const createMarkers: (points: CreateMarkersProps, options?: CreateMarkersOptions | undefined) => {
    layer: any;
    style: any;
};
/**
 * Gets the sufficent extent to zoom on a cluster or marker
 * @param cluster
 * @returns extent
 */
export declare const getClusterExtent: (cluster: any) => import("@/components/Map.model").QuadrupleNums;
/**
 * Takes a feature and returns text value from its properties
 * and ol coords on map
 * @param feature
 * @returns
 */
export declare const getCoordsAndTextFromFeature: (feature: any) => {
    featCoords: import("@/components/Map.model").DoubleNums;
    featText: string[];
};
/**
 * Gets OpenLayer Coordinates of the given feature
 * @param feature
 * @returns Coords array
 */
export declare const getCoordsFromFeature: (feature: any) => import("@/components/Map.model").DoubleNums;
/**
 * Receives an array of points and returns an array of features.
 * @param points - Array of points.
 * @param point.text - If you have a particular text for the point.
 * @returns array of features.
 */
export declare const createFeaturesFromPoints: (points: CreateMarkersProps, markersIconCallback?: MarkersIconCallback | undefined) => any[];

export * from './location.util';
export * from './features.util';

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
 * Transforms common latlng to open layers-friendly latlng
 * @param point
 * @param from
 * @param to
 * @returns points
 */
export declare const transformCoords: (point: import("../components/Map.model").DoubleNums, from?: string, to?: string) => import("../components/Map.model").DoubleNums;

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

export declare const _default: import("vue").DefineComponent<{}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
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
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    activated: BooleanConstructor;
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
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:search-text" | "update:search-coords" | "update:activation" | "submit")[], "update:search-text" | "update:search-coords" | "update:activation" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    activated: BooleanConstructor;
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
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:activation"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
}, {
    activated: boolean;
    searchText: string;
    searchCoords: CoordsObj;
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
