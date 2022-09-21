import { PropType } from "vue";
import { CoordsObj, ResultHoverCallback, ResultClickCallback, MarkersIconCallback, MarkerHoverCallback, HandleSearchProps } from "./Map.model";
import { Coordinate } from "openlayers";
import { MapType, ViewType } from "../store/map/map.model";
declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * کلید نقشه، گرفته شده از پلتفرم نشان
     */
    mapKey: {
        type: StringConstructor;
        required: true;
    };
    /**
     * کلید سرویس‌ها برای تبدیل نقطه به آدرس (Reverse) و جستجو (search)
     */
    serviceKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * مرکز نقشه در هنگام شروع
     */
    center: {
        type: PropType<CoordsObj>;
        default: null;
    };
    /**
     * میزان زوم نقشه در هنگام شروع
     */
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * نمایش یا عدم نمایش نقاط
     */
    poi: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * نمایش یا عدم نمایش خطوط ترافیک
     */
    traffic: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * نوع نقشه در هنگام شروع
     * <br>
     * neshan
    | dreamy
    | dreamy-gold
    | standard-night
    | standard-day
    | osm-bright
     */
    defaultType: {
        type: PropType<MapType>;
        default: string;
    };
    /**
     * آرایه‌ای از انواع نقشه‌هایی که می‌خواهید در تنظیمات نمایش داده شود.
     */
    mapTypes: {
        type: PropType<MapType[]>;
        default: MapType[];
    };
    /**
     * تغییر کلاس بخش تنظیمات برای حالت دستکتاپ
     */
    desktopSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر کلاس بخش تنظیمات برای حالت موبایل
     */
    mobileSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر استایل بخش تنظیمات برای حالت دستکتاپ
     */
    desktopSettingsStyle: ObjectConstructor;
    /**
     * تغییر استایل بخش تنظیمات برای حالت موبایل
     */
    mobileSettingsStyle: ObjectConstructor;
    /**
     * تغییر کلاس پاپ آپ موقت (هنگامی که کاربر با موس هاور می‌کند)
     */
    temporaryPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر کلاس پاپ آپ دائم (هنگامی که کاربر کلیک می‌کند)
     */
    persistantPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر استایل پاپ آپ موقت (هنگامی که کاربر با موس هاور می‌کند)
     */
    temporaryPopupContainerStyle: ObjectConstructor;
    /**
     * تغییر استایل پاپ آپ دائم (هنگامی که کاربر کلیک می‌کند)
     */
    persistantPopupContainerStyle: ObjectConstructor;
    /**
     * عدم نمایش تنظیمات
     */
    hideSettings: BooleanConstructor;
    /**
     * عدم نمایش بخش سرج و نتایج
     */
    hideSearchContainer: BooleanConstructor;
    /**
     *
     */
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
    reverseOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    viewType: PropType<ViewType>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        /**
         * کلید نقشه، گرفته شده از پلتفرم نشان
         */
        mapKey: {
            type: StringConstructor;
            required: true;
        };
        /**
         * کلید سرویس‌ها برای تبدیل نقطه به آدرس (Reverse) و جستجو (search)
         */
        serviceKey: {
            type: StringConstructor;
            default: string;
        };
        /**
         * مرکز نقشه در هنگام شروع
         */
        center: {
            type: PropType<CoordsObj>;
            default: null;
        };
        /**
         * میزان زوم نقشه در هنگام شروع
         */
        zoom: {
            type: NumberConstructor;
            default: number;
        };
        /**
         * نمایش یا عدم نمایش نقاط
         */
        poi: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * نمایش یا عدم نمایش خطوط ترافیک
         */
        traffic: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * نوع نقشه در هنگام شروع
         * <br>
         * neshan
        | dreamy
        | dreamy-gold
        | standard-night
        | standard-day
        | osm-bright
         */
        defaultType: {
            type: PropType<MapType>;
            default: string;
        };
        /**
         * آرایه‌ای از انواع نقشه‌هایی که می‌خواهید در تنظیمات نمایش داده شود.
         */
        mapTypes: {
            type: PropType<MapType[]>;
            default: MapType[];
        };
        /**
         * تغییر کلاس بخش تنظیمات برای حالت دستکتاپ
         */
        desktopSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        /**
         * تغییر کلاس بخش تنظیمات برای حالت موبایل
         */
        mobileSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        /**
         * تغییر استایل بخش تنظیمات برای حالت دستکتاپ
         */
        desktopSettingsStyle: ObjectConstructor;
        /**
         * تغییر استایل بخش تنظیمات برای حالت موبایل
         */
        mobileSettingsStyle: ObjectConstructor;
        /**
         * تغییر کلاس پاپ آپ موقت (هنگامی که کاربر با موس هاور می‌کند)
         */
        temporaryPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        /**
         * تغییر کلاس پاپ آپ دائم (هنگامی که کاربر کلیک می‌کند)
         */
        persistantPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        /**
         * تغییر استایل پاپ آپ موقت (هنگامی که کاربر با موس هاور می‌کند)
         */
        temporaryPopupContainerStyle: ObjectConstructor;
        /**
         * تغییر استایل پاپ آپ دائم (هنگامی که کاربر کلیک می‌کند)
         */
        persistantPopupContainerStyle: ObjectConstructor;
        /**
         * عدم نمایش تنظیمات
         */
        hideSettings: BooleanConstructor;
        /**
         * عدم نمایش بخش سرج و نتایج
         */
        hideSearchContainer: BooleanConstructor;
        /**
         *
         */
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
        reverseOnClick: {
            type: BooleanConstructor;
            default: boolean;
        };
        scale: {
            type: NumberConstructor;
            default: number;
        };
        viewType: PropType<ViewType>;
    }>> & {
        "onOn-zoom"?: ((...args: any[]) => any) | undefined;
        "onOn-click"?: ((...args: any[]) => any) | undefined;
    }>>;
    store: {
        state: {
            api: {
                REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
            } | null;
            searchLoading: boolean;
            reverseLoading: boolean;
            mapContainer: HTMLDivElement | null;
            map: {
                setMapType: (value: MapType) => void;
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
                getEventCoordinate: (event: Event) => Coordinate;
                getEventPixel: (event: Event) => import("openlayers").Pixel;
                getTarget: () => string | Element;
                getTargetElement: () => Element;
                getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                getOverlayById: (id: string | number) => import("openlayers").Overlay;
                getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                getLayerGroup: () => import("openlayers").layer.Group;
                getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
            mapType: MapType;
            zoom: number;
            poiLayer: boolean;
            trafficLayer: boolean;
            viewType: ViewType;
            scale: number;
            drawerActivation: boolean;
            drawerShowDetails: boolean;
            mobileDrawerShowDetails: boolean;
            overlay: {
                getElement: () => Element;
                getId: () => string | number;
                getMap: () => import("openlayers").Map;
                getOffset: () => number[];
                getPosition: () => Coordinate;
                getPositioning: () => import("openlayers").OverlayPositioning;
                setElement: (element: Element) => void;
                setMap: (map: import("openlayers").Map) => void;
                setOffset: (offset: number[]) => void;
                setPosition: (position: Coordinate | undefined) => void;
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
                getPosition: () => Coordinate;
                getPositioning: () => import("openlayers").OverlayPositioning;
                setElement: (element: Element) => void;
                setMap: (map: import("openlayers").Map) => void;
                setOffset: (offset: number[]) => void;
                setPosition: (position: Coordinate | undefined) => void;
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
                city: import("./Map.model").NuString;
                district: import("./Map.model").NuString;
                formatted_address: import("./Map.model").NuString;
                in_odd_even_zone: boolean;
                in_traffic_zone: boolean;
                municipality_zone: import("./Map.model").NuString;
                neighbourhood: import("./Map.model").NuString;
                place: import("./Map.model").NuString;
                route_name: import("./Map.model").NuString;
                route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                state: import("./Map.model").NuString;
                status: import("./Map.model").NuString;
                village: import("./Map.model").NuString;
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
                city: import("./Map.model").NuString;
                district: import("./Map.model").NuString;
                formatted_address: import("./Map.model").NuString;
                in_odd_even_zone: boolean;
                in_traffic_zone: boolean;
                municipality_zone: import("./Map.model").NuString;
                neighbourhood: import("./Map.model").NuString;
                place: import("./Map.model").NuString;
                route_name: import("./Map.model").NuString;
                route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                state: import("./Map.model").NuString;
                status: import("./Map.model").NuString;
                village: import("./Map.model").NuString;
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
        getters: {
            drawerWidth: string;
            loading: boolean;
            touchPlatform: boolean;
        };
        actions: any;
    };
    setToken: (token: string) => void;
    fontSize: import("vue").Ref<string>;
    neshanBrandContainer: HTMLDivElement;
    getNeshanBrandContainer: () => HTMLDivElement | undefined;
    updateNeshanBrandContainerScale: () => void;
    updateNeshanBrandContainerPos: () => void;
    mobileDrawerModel: import("vue").Ref<boolean>;
    filteredTiles: {
        title: MapType;
        url: string;
    }[];
    mapContainer: import("vue").Ref<HTMLDivElement | undefined>;
    importMap: (url: string, tagName?: string) => HTMLElement;
    sanitizedCenter: import("vue").Ref<[number, number] | undefined>;
    startMap: () => Promise<void>;
    popupContainer: import("vue").Ref<HTMLDivElement | undefined>;
    persistantContainer: import("vue").Ref<HTMLDivElement | undefined>;
    eventsEmits: (event: "on-zoom" | "on-click", ...args: any[]) => void;
    setupMapEvents: () => void;
    handleResultHover: (item: import("../store/markers/markers.model").SearchItem) => void;
    handleResultClick: (item: import("../store/markers/markers.model").SearchItem) => void;
    handleSearch: ({ term, coords }: HandleSearchProps) => void;
    handleMobileDrawerClick: (event: MouseEvent) => void;
    onScriptLoad: () => Promise<void>;
    DesktopLayers: import("vue").DefineComponent<{
        tiles: {
            type: PropType<import("./Map.model").Tile[]>;
            default: () => never[];
        };
        settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
        settingsBoxStyle: ObjectConstructor;
    }, {
        store: {
            state: {
                api: {
                    REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                    SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                } | null;
                searchLoading: boolean;
                reverseLoading: boolean;
                mapContainer: HTMLDivElement | null;
                map: {
                    setMapType: (value: MapType) => void;
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
                    getEventCoordinate: (event: Event) => Coordinate;
                    getEventPixel: (event: Event) => import("openlayers").Pixel;
                    getTarget: () => string | Element;
                    getTargetElement: () => Element;
                    getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                    getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                    getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                    getOverlayById: (id: string | number) => import("openlayers").Overlay;
                    getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                    getLayerGroup: () => import("openlayers").layer.Group;
                    getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                    getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                mapType: MapType;
                zoom: number;
                poiLayer: boolean;
                trafficLayer: boolean;
                viewType: ViewType;
                scale: number;
                drawerActivation: boolean;
                drawerShowDetails: boolean;
                mobileDrawerShowDetails: boolean;
                overlay: {
                    getElement: () => Element;
                    getId: () => string | number;
                    getMap: () => import("openlayers").Map;
                    getOffset: () => number[];
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
            getters: {
                drawerWidth: string;
                loading: boolean;
                touchPlatform: boolean;
            };
            actions: any;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tiles: {
            type: PropType<import("./Map.model").Tile[]>;
            default: () => never[];
        };
        settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
        settingsBoxStyle: ObjectConstructor;
    }>>, {
        tiles: import("./Map.model").Tile[];
    }>;
    MobileLayers: import("vue").DefineComponent<{
        modelValue: BooleanConstructor;
        tiles: {
            type: PropType<import("./Map.model").Tile[]>;
            default: () => never[];
        };
        settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
        settingsBoxStyle: ObjectConstructor;
    }, {
        instance: import("vue").ComponentInternalInstance | null;
        store: {
            state: {
                api: {
                    REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                    SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                } | null;
                searchLoading: boolean;
                reverseLoading: boolean;
                mapContainer: HTMLDivElement | null;
                map: {
                    setMapType: (value: MapType) => void;
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
                    getEventCoordinate: (event: Event) => Coordinate;
                    getEventPixel: (event: Event) => import("openlayers").Pixel;
                    getTarget: () => string | Element;
                    getTargetElement: () => Element;
                    getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                    getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                    getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                    getOverlayById: (id: string | number) => import("openlayers").Overlay;
                    getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                    getLayerGroup: () => import("openlayers").layer.Group;
                    getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                    getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                mapType: MapType;
                zoom: number;
                poiLayer: boolean;
                trafficLayer: boolean;
                viewType: ViewType;
                scale: number;
                drawerActivation: boolean;
                drawerShowDetails: boolean;
                mobileDrawerShowDetails: boolean;
                overlay: {
                    getElement: () => Element;
                    getId: () => string | number;
                    getMap: () => import("openlayers").Map;
                    getOffset: () => number[];
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
            getters: {
                drawerWidth: string;
                loading: boolean;
                touchPlatform: boolean;
            };
            actions: any;
        };
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            modelValue: BooleanConstructor;
            tiles: {
                type: PropType<import("./Map.model").Tile[]>;
                default: () => never[];
            };
            settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
            settingsBoxStyle: ObjectConstructor;
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        updateModel: (value: boolean) => void;
        showTiles: import("vue").Ref<boolean>;
        close: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: BooleanConstructor;
        tiles: {
            type: PropType<import("./Map.model").Tile[]>;
            default: () => never[];
        };
        settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
        settingsBoxStyle: ObjectConstructor;
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        tiles: import("./Map.model").Tile[];
        modelValue: boolean;
    }>;
    Drawer: import("vue").DefineComponent<{
        results: PropType<import("../store/markers/markers.model").SearchItem[]>;
        searchCoords: {
            type: PropType<CoordsObj>;
            default: () => {
                longitude: number;
                latitude: number;
            };
        };
        loading: BooleanConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            results: PropType<import("../store/markers/markers.model").SearchItem[]>;
            searchCoords: {
                type: PropType<CoordsObj>;
                default: () => {
                    longitude: number;
                    latitude: number;
                };
            };
            loading: BooleanConstructor;
        }>> & {
            onSearch?: ((...args: any[]) => any) | undefined;
            "onResult-click"?: ((...args: any[]) => any) | undefined;
            "onResult-hover"?: ((...args: any[]) => any) | undefined;
        }>>;
        store: {
            state: {
                api: {
                    REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                    SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                } | null;
                searchLoading: boolean;
                reverseLoading: boolean;
                mapContainer: HTMLDivElement | null;
                map: {
                    setMapType: (value: MapType) => void;
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
                    getEventCoordinate: (event: Event) => Coordinate;
                    getEventPixel: (event: Event) => import("openlayers").Pixel;
                    getTarget: () => string | Element;
                    getTargetElement: () => Element;
                    getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                    getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                    getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                    getOverlayById: (id: string | number) => import("openlayers").Overlay;
                    getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                    getLayerGroup: () => import("openlayers").layer.Group;
                    getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                    getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                mapType: MapType;
                zoom: number;
                poiLayer: boolean;
                trafficLayer: boolean;
                viewType: ViewType;
                scale: number;
                drawerActivation: boolean;
                drawerShowDetails: boolean;
                mobileDrawerShowDetails: boolean;
                overlay: {
                    getElement: () => Element;
                    getId: () => string | number;
                    getMap: () => import("openlayers").Map;
                    getOffset: () => number[];
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
            getters: {
                drawerWidth: string;
                loading: boolean;
                touchPlatform: boolean;
            };
            actions: any;
        };
        searchText: import("vue").Ref<string>;
        emits: (event: "search" | "result-click" | "result-hover", ...args: any[]) => void;
        emitSearch: (searchData: HandleSearchProps) => void;
        emitResultClick: (item: import("../store/markers/markers.model").SearchItem) => void;
        emitResultHover: (item: import("../store/markers/markers.model").SearchItem) => void;
        mapDrawer: import("vue").Ref<HTMLDivElement | undefined>;
        searchSection: import("vue").Ref<any>;
        toggleDrawerMaxDimenstions: (activated: boolean) => void;
        SearchSection: import("vue").DefineComponent<{
            searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
            searchBoxStyle: ObjectConstructor;
            searchText: {
                type: StringConstructor;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
                searchBoxStyle: ObjectConstructor;
                searchText: {
                    type: StringConstructor;
                };
            }>> & {
                "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
                "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
                onSubmit?: ((...args: any[]) => any) | undefined;
            }>>;
            store: {
                state: {
                    api: {
                        REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                        SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                    } | null;
                    searchLoading: boolean;
                    reverseLoading: boolean;
                    mapContainer: HTMLDivElement | null;
                    map: {
                        setMapType: (value: MapType) => void;
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
                        getEventCoordinate: (event: Event) => Coordinate;
                        getEventPixel: (event: Event) => import("openlayers").Pixel;
                        getTarget: () => string | Element;
                        getTargetElement: () => Element;
                        getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                        getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                        getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                        getOverlayById: (id: string | number) => import("openlayers").Overlay;
                        getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                        getLayerGroup: () => import("openlayers").layer.Group;
                        getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                        getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                    mapType: MapType;
                    zoom: number;
                    poiLayer: boolean;
                    trafficLayer: boolean;
                    viewType: ViewType;
                    scale: number;
                    drawerActivation: boolean;
                    drawerShowDetails: boolean;
                    mobileDrawerShowDetails: boolean;
                    overlay: {
                        getElement: () => Element;
                        getId: () => string | number;
                        getMap: () => import("openlayers").Map;
                        getOffset: () => number[];
                        getPosition: () => Coordinate;
                        getPositioning: () => import("openlayers").OverlayPositioning;
                        setElement: (element: Element) => void;
                        setMap: (map: import("openlayers").Map) => void;
                        setOffset: (offset: number[]) => void;
                        setPosition: (position: Coordinate | undefined) => void;
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
                        getPosition: () => Coordinate;
                        getPositioning: () => import("openlayers").OverlayPositioning;
                        setElement: (element: Element) => void;
                        setMap: (map: import("openlayers").Map) => void;
                        setOffset: (offset: number[]) => void;
                        setPosition: (position: Coordinate | undefined) => void;
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
                        city: import("./Map.model").NuString;
                        district: import("./Map.model").NuString;
                        formatted_address: import("./Map.model").NuString;
                        in_odd_even_zone: boolean;
                        in_traffic_zone: boolean;
                        municipality_zone: import("./Map.model").NuString;
                        neighbourhood: import("./Map.model").NuString;
                        place: import("./Map.model").NuString;
                        route_name: import("./Map.model").NuString;
                        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                        state: import("./Map.model").NuString;
                        status: import("./Map.model").NuString;
                        village: import("./Map.model").NuString;
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
                        city: import("./Map.model").NuString;
                        district: import("./Map.model").NuString;
                        formatted_address: import("./Map.model").NuString;
                        in_odd_even_zone: boolean;
                        in_traffic_zone: boolean;
                        municipality_zone: import("./Map.model").NuString;
                        neighbourhood: import("./Map.model").NuString;
                        place: import("./Map.model").NuString;
                        route_name: import("./Map.model").NuString;
                        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                        state: import("./Map.model").NuString;
                        status: import("./Map.model").NuString;
                        village: import("./Map.model").NuString;
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
                getters: {
                    drawerWidth: string;
                    loading: boolean;
                    touchPlatform: boolean;
                };
                actions: any;
            };
            width: string;
            emit: (event: "update:search-text" | "update:search-coords" | "submit", ...args: any[]) => void;
            text: import("vue").WritableComputedRef<string | undefined>;
            emitSearch: (term?: string) => void;
            emitTimeout: number;
            runTimeout: (value?: string | undefined, delay?: number) => void;
            Icon: import("vue").DefineComponent<{
                name: {
                    type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                    default: string;
                };
                size: {
                    type: NumberConstructor;
                    default: number;
                };
                color: StringConstructor;
                scale: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    name: {
                        type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                        default: string;
                    };
                    size: {
                        type: NumberConstructor;
                        default: number;
                    };
                    color: StringConstructor;
                    scale: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {}>>;
                computedSize: import("vue").ComputedRef<number>;
                store: {
                    state: {
                        api: {
                            REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                            SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                        } | null;
                        searchLoading: boolean;
                        reverseLoading: boolean;
                        mapContainer: HTMLDivElement | null;
                        map: {
                            setMapType: (value: MapType) => void;
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
                            getEventCoordinate: (event: Event) => Coordinate;
                            getEventPixel: (event: Event) => import("openlayers").Pixel;
                            getTarget: () => string | Element;
                            getTargetElement: () => Element;
                            getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                            getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                            getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                            getOverlayById: (id: string | number) => import("openlayers").Overlay;
                            getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                            getLayerGroup: () => import("openlayers").layer.Group;
                            getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                            getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                        mapType: MapType;
                        zoom: number;
                        poiLayer: boolean;
                        trafficLayer: boolean;
                        viewType: ViewType;
                        scale: number;
                        drawerActivation: boolean;
                        drawerShowDetails: boolean;
                        mobileDrawerShowDetails: boolean;
                        overlay: {
                            getElement: () => Element;
                            getId: () => string | number;
                            getMap: () => import("openlayers").Map;
                            getOffset: () => number[];
                            getPosition: () => Coordinate;
                            getPositioning: () => import("openlayers").OverlayPositioning;
                            setElement: (element: Element) => void;
                            setMap: (map: import("openlayers").Map) => void;
                            setOffset: (offset: number[]) => void;
                            setPosition: (position: Coordinate | undefined) => void;
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
                            getPosition: () => Coordinate;
                            getPositioning: () => import("openlayers").OverlayPositioning;
                            setElement: (element: Element) => void;
                            setMap: (map: import("openlayers").Map) => void;
                            setOffset: (offset: number[]) => void;
                            setPosition: (position: Coordinate | undefined) => void;
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
                            city: import("./Map.model").NuString;
                            district: import("./Map.model").NuString;
                            formatted_address: import("./Map.model").NuString;
                            in_odd_even_zone: boolean;
                            in_traffic_zone: boolean;
                            municipality_zone: import("./Map.model").NuString;
                            neighbourhood: import("./Map.model").NuString;
                            place: import("./Map.model").NuString;
                            route_name: import("./Map.model").NuString;
                            route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                            state: import("./Map.model").NuString;
                            status: import("./Map.model").NuString;
                            village: import("./Map.model").NuString;
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
                            city: import("./Map.model").NuString;
                            district: import("./Map.model").NuString;
                            formatted_address: import("./Map.model").NuString;
                            in_odd_even_zone: boolean;
                            in_traffic_zone: boolean;
                            municipality_zone: import("./Map.model").NuString;
                            neighbourhood: import("./Map.model").NuString;
                            place: import("./Map.model").NuString;
                            route_name: import("./Map.model").NuString;
                            route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                            state: import("./Map.model").NuString;
                            status: import("./Map.model").NuString;
                            village: import("./Map.model").NuString;
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
                    getters: {
                        drawerWidth: string;
                        loading: boolean;
                        touchPlatform: boolean;
                    };
                    actions: any;
                };
                inlineSvgs: {
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
                    }; /**
                     * تغییر استایل بخش تنظیمات برای حالت موبایل
                     */
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
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                    default: string;
                };
                size: {
                    type: NumberConstructor;
                    default: number;
                };
                color: StringConstructor;
                scale: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>>, {
                scale: boolean;
                name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
                size: number;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:search-text" | "update:search-coords" | "submit")[], "update:search-text" | "update:search-coords" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
            searchBoxStyle: ObjectConstructor;
            searchText: {
                type: StringConstructor;
            };
        }>> & {
            "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
            "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
            onSubmit?: ((...args: any[]) => any) | undefined;
        }, {}>;
        ResultsSection: import("vue").DefineComponent<{
            resultBoxClass: ArrayConstructor;
            resultBoxStyle: ObjectConstructor;
            results: {
                type: PropType<import("../store/markers/markers.model").SearchItem[]>;
                default: () => never[];
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                resultBoxClass: ArrayConstructor;
                resultBoxStyle: ObjectConstructor;
                results: {
                    type: PropType<import("../store/markers/markers.model").SearchItem[]>;
                    default: () => never[];
                };
            }>> & {
                "onResult-click"?: ((...args: any[]) => any) | undefined;
                "onResult-hover"?: ((...args: any[]) => any) | undefined;
            }>>;
            store: {
                state: {
                    api: {
                        REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                        SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                    } | null;
                    searchLoading: boolean;
                    reverseLoading: boolean;
                    mapContainer: HTMLDivElement | null;
                    map: {
                        setMapType: (value: MapType) => void;
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
                        getEventCoordinate: (event: Event) => Coordinate;
                        getEventPixel: (event: Event) => import("openlayers").Pixel;
                        getTarget: () => string | Element;
                        getTargetElement: () => Element;
                        getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                        getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                        getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                        getOverlayById: (id: string | number) => import("openlayers").Overlay;
                        getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                        getLayerGroup: () => import("openlayers").layer.Group;
                        getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                        getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                    mapType: MapType;
                    zoom: number;
                    poiLayer: boolean;
                    trafficLayer: boolean;
                    viewType: ViewType;
                    scale: number;
                    drawerActivation: boolean;
                    drawerShowDetails: boolean;
                    mobileDrawerShowDetails: boolean;
                    overlay: {
                        getElement: () => Element;
                        getId: () => string | number;
                        getMap: () => import("openlayers").Map;
                        getOffset: () => number[];
                        getPosition: () => Coordinate;
                        getPositioning: () => import("openlayers").OverlayPositioning;
                        setElement: (element: Element) => void;
                        setMap: (map: import("openlayers").Map) => void;
                        setOffset: (offset: number[]) => void;
                        setPosition: (position: Coordinate | undefined) => void;
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
                        getPosition: () => Coordinate;
                        getPositioning: () => import("openlayers").OverlayPositioning;
                        setElement: (element: Element) => void;
                        setMap: (map: import("openlayers").Map) => void;
                        setOffset: (offset: number[]) => void;
                        setPosition: (position: Coordinate | undefined) => void;
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
                        city: import("./Map.model").NuString;
                        district: import("./Map.model").NuString;
                        formatted_address: import("./Map.model").NuString;
                        in_odd_even_zone: boolean;
                        in_traffic_zone: boolean;
                        municipality_zone: import("./Map.model").NuString;
                        neighbourhood: import("./Map.model").NuString;
                        place: import("./Map.model").NuString;
                        route_name: import("./Map.model").NuString;
                        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                        state: import("./Map.model").NuString;
                        status: import("./Map.model").NuString;
                        village: import("./Map.model").NuString;
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
                        city: import("./Map.model").NuString;
                        district: import("./Map.model").NuString;
                        formatted_address: import("./Map.model").NuString;
                        in_odd_even_zone: boolean;
                        in_traffic_zone: boolean;
                        municipality_zone: import("./Map.model").NuString;
                        neighbourhood: import("./Map.model").NuString;
                        place: import("./Map.model").NuString;
                        route_name: import("./Map.model").NuString;
                        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                        state: import("./Map.model").NuString;
                        status: import("./Map.model").NuString;
                        village: import("./Map.model").NuString;
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
                getters: {
                    drawerWidth: string;
                    loading: boolean;
                    touchPlatform: boolean;
                };
                actions: any;
            };
            resultSection: import("vue").Ref<HTMLDivElement | undefined>;
            emits: (event: "result-click" | "result-hover", ...args: any[]) => void;
            handleHoverEmit: (item: import("../store/markers/markers.model").SearchItem) => void;
            emitHover: (item: import("../store/markers/markers.model").SearchItem) => void;
            emitClick: (item: import("../store/markers/markers.model").SearchItem) => void;
            ResultItem: import("vue").DefineComponent<{
                item: PropType<import("../store/markers/markers.model").SearchItem>;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                item: PropType<import("../store/markers/markers.model").SearchItem>;
            }>>, {}>;
            Loading: import("vue").DefineComponent<{
                color: {
                    type: StringConstructor;
                    default: string;
                };
                dense: BooleanConstructor;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                color: {
                    type: StringConstructor;
                    default: string;
                };
                dense: BooleanConstructor;
            }>>, {
                color: string;
                dense: boolean;
            }>;
            PointDetails: import("vue").DefineComponent<{
                item: PropType<import("../store/markers/markers.model").SelectedMarker>;
                collapse: BooleanConstructor;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    item: PropType<import("../store/markers/markers.model").SelectedMarker>;
                    collapse: BooleanConstructor;
                }>> & {}>>;
                pointDetailsContainer: import("vue").Ref<HTMLDivElement | undefined>;
                iconName: import("vue").ComputedRef<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | undefined>;
                width: import("vue").Ref<number>;
                formattedItem: import("vue").ComputedRef<{
                    place: import("./Map.model").NuString;
                    address: import("./Map.model").NuString;
                    region: import("./Map.model").NuString;
                    neighbourhood: string;
                    in_odd_even_zone: boolean | null;
                    in_traffic_zone: boolean | null;
                } | undefined>;
                Icon: import("vue").DefineComponent<{
                    name: {
                        type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                        default: string;
                    };
                    size: {
                        type: NumberConstructor;
                        default: number;
                    };
                    color: StringConstructor;
                    scale: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        name: {
                            type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                            default: string;
                        };
                        size: {
                            type: NumberConstructor;
                            default: number;
                        };
                        color: StringConstructor;
                        scale: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    }>> & {}>>;
                    computedSize: import("vue").ComputedRef<number>;
                    store: {
                        state: {
                            api: {
                                REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                                SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                            } | null;
                            searchLoading: boolean;
                            reverseLoading: boolean;
                            mapContainer: HTMLDivElement | null;
                            map: {
                                setMapType: (value: MapType) => void;
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
                                getEventCoordinate: (event: Event) => Coordinate;
                                getEventPixel: (event: Event) => import("openlayers").Pixel;
                                getTarget: () => string | Element;
                                getTargetElement: () => Element;
                                getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                                getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                                getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                                getOverlayById: (id: string | number) => import("openlayers").Overlay;
                                getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                                getLayerGroup: () => import("openlayers").layer.Group;
                                getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                                getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                            mapType: MapType;
                            zoom: number;
                            poiLayer: boolean;
                            trafficLayer: boolean;
                            viewType: ViewType;
                            scale: number;
                            drawerActivation: boolean;
                            drawerShowDetails: boolean;
                            mobileDrawerShowDetails: boolean;
                            overlay: {
                                getElement: () => Element;
                                getId: () => string | number;
                                getMap: () => import("openlayers").Map;
                                getOffset: () => number[];
                                getPosition: () => Coordinate;
                                getPositioning: () => import("openlayers").OverlayPositioning;
                                setElement: (element: Element) => void;
                                setMap: (map: import("openlayers").Map) => void;
                                setOffset: (offset: number[]) => void;
                                setPosition: (position: Coordinate | undefined) => void;
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
                                getPosition: () => Coordinate;
                                getPositioning: () => import("openlayers").OverlayPositioning;
                                setElement: (element: Element) => void;
                                setMap: (map: import("openlayers").Map) => void;
                                setOffset: (offset: number[]) => void;
                                setPosition: (position: Coordinate | undefined) => void;
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
                                city: import("./Map.model").NuString;
                                district: import("./Map.model").NuString;
                                formatted_address: import("./Map.model").NuString;
                                in_odd_even_zone: boolean;
                                in_traffic_zone: boolean;
                                municipality_zone: import("./Map.model").NuString;
                                neighbourhood: import("./Map.model").NuString;
                                place: import("./Map.model").NuString;
                                route_name: import("./Map.model").NuString;
                                route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                                state: import("./Map.model").NuString;
                                status: import("./Map.model").NuString;
                                village: import("./Map.model").NuString;
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
                                city: import("./Map.model").NuString;
                                district: import("./Map.model").NuString;
                                formatted_address: import("./Map.model").NuString;
                                in_odd_even_zone: boolean;
                                in_traffic_zone: boolean;
                                municipality_zone: import("./Map.model").NuString;
                                neighbourhood: import("./Map.model").NuString;
                                place: import("./Map.model").NuString;
                                route_name: import("./Map.model").NuString;
                                route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                                state: import("./Map.model").NuString;
                                status: import("./Map.model").NuString;
                                village: import("./Map.model").NuString;
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
                        getters: {
                            drawerWidth: string;
                            loading: boolean;
                            touchPlatform: boolean;
                        };
                        actions: any;
                    };
                    inlineSvgs: {
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
                        }; /**
                         * تغییر استایل بخش تنظیمات برای حالت موبایل
                         */
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
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    name: {
                        type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                        default: string;
                    };
                    size: {
                        type: NumberConstructor;
                        default: number;
                    };
                    color: StringConstructor;
                    scale: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>>, {
                    scale: boolean;
                    name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
                    size: number;
                }>;
                markerUrls: {
                    main: string;
                    search: string;
                    colorSvg: string;
                    greySvg: string;
                    preview256: string;
                    searchPrev: string;
                };
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                item: PropType<import("../store/markers/markers.model").SelectedMarker>;
                collapse: BooleanConstructor;
            }>>, {
                collapse: boolean;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("result-click" | "result-hover")[], "result-click" | "result-hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            resultBoxClass: ArrayConstructor;
            resultBoxStyle: ObjectConstructor;
            results: {
                type: PropType<import("../store/markers/markers.model").SearchItem[]>;
                default: () => never[];
            };
        }>> & {
            "onResult-click"?: ((...args: any[]) => any) | undefined;
            "onResult-hover"?: ((...args: any[]) => any) | undefined;
        }, {
            results: import("../store/markers/markers.model").SearchItem[];
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "result-click" | "result-hover")[], "search" | "result-click" | "result-hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        results: PropType<import("../store/markers/markers.model").SearchItem[]>;
        searchCoords: {
            type: PropType<CoordsObj>;
            default: () => {
                longitude: number;
                latitude: number;
            };
        };
        loading: BooleanConstructor;
    }>> & {
        onSearch?: ((...args: any[]) => any) | undefined;
        "onResult-click"?: ((...args: any[]) => any) | undefined;
        "onResult-hover"?: ((...args: any[]) => any) | undefined;
    }, {
        loading: boolean;
        searchCoords: CoordsObj;
    }>;
    MobileDetailsSection: import("vue").DefineComponent<{}, {
        store: {
            state: {
                api: {
                    REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                    SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                } | null;
                searchLoading: boolean;
                reverseLoading: boolean;
                mapContainer: HTMLDivElement | null;
                map: {
                    setMapType: (value: MapType) => void;
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
                    getEventCoordinate: (event: Event) => Coordinate;
                    getEventPixel: (event: Event) => import("openlayers").Pixel;
                    getTarget: () => string | Element;
                    getTargetElement: () => Element;
                    getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                    getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                    getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                    getOverlayById: (id: string | number) => import("openlayers").Overlay;
                    getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                    getLayerGroup: () => import("openlayers").layer.Group;
                    getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                    getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                mapType: MapType;
                zoom: number;
                poiLayer: boolean;
                trafficLayer: boolean;
                viewType: ViewType;
                scale: number;
                drawerActivation: boolean;
                drawerShowDetails: boolean;
                mobileDrawerShowDetails: boolean;
                overlay: {
                    getElement: () => Element;
                    getId: () => string | number;
                    getMap: () => import("openlayers").Map;
                    getOffset: () => number[];
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    getPosition: () => Coordinate;
                    getPositioning: () => import("openlayers").OverlayPositioning;
                    setElement: (element: Element) => void;
                    setMap: (map: import("openlayers").Map) => void;
                    setOffset: (offset: number[]) => void;
                    setPosition: (position: Coordinate | undefined) => void;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
                    city: import("./Map.model").NuString;
                    district: import("./Map.model").NuString;
                    formatted_address: import("./Map.model").NuString;
                    in_odd_even_zone: boolean;
                    in_traffic_zone: boolean;
                    municipality_zone: import("./Map.model").NuString;
                    neighbourhood: import("./Map.model").NuString;
                    place: import("./Map.model").NuString;
                    route_name: import("./Map.model").NuString;
                    route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                    state: import("./Map.model").NuString;
                    status: import("./Map.model").NuString;
                    village: import("./Map.model").NuString;
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
            getters: {
                drawerWidth: string;
                loading: boolean;
                touchPlatform: boolean;
            };
            actions: any;
        };
        mobileDetailsSectionContainer: import("vue").Ref<HTMLDivElement | undefined>;
        detailsContainer: import("vue").Ref<HTMLDivElement | undefined>;
        fullScreen: import("vue").Ref<boolean>;
        detailsContainerMaxHeight: import("vue").Ref<string>;
        detailsContainerBorderRadius: import("vue").Ref<string>;
        detailsContainerTransition: import("vue").Ref<string>;
        handleTouchMove: (evt: TouchEvent) => void;
        handleTouchEnd: () => void;
        closeScreen: () => void;
        timeout: number;
        addTemporaryTransition: (transitionTime?: number) => void;
        hideModal: () => void;
        collapseSheet: () => void;
        openSheet: () => void;
        drawerConstants: {
            width: string;
            bottomSheetNormalHeight: string;
            bottomSheetloadingHeight: string;
            bottomSheetBorderRadius: string;
        };
        Icon: import("vue").DefineComponent<{
            name: {
                type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                default: string;
            };
            size: {
                type: NumberConstructor;
                default: number;
            };
            color: StringConstructor;
            scale: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                    default: string;
                };
                size: {
                    type: NumberConstructor;
                    default: number;
                };
                color: StringConstructor;
                scale: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {}>>;
            computedSize: import("vue").ComputedRef<number>;
            store: {
                state: {
                    api: {
                        REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                        SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                    } | null;
                    searchLoading: boolean;
                    reverseLoading: boolean;
                    mapContainer: HTMLDivElement | null;
                    map: {
                        setMapType: (value: MapType) => void;
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
                        getEventCoordinate: (event: Event) => Coordinate;
                        getEventPixel: (event: Event) => import("openlayers").Pixel;
                        getTarget: () => string | Element;
                        getTargetElement: () => Element;
                        getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                        getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                        getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                        getOverlayById: (id: string | number) => import("openlayers").Overlay;
                        getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                        getLayerGroup: () => import("openlayers").layer.Group;
                        getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                        getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                    mapType: MapType;
                    zoom: number;
                    poiLayer: boolean;
                    trafficLayer: boolean;
                    viewType: ViewType;
                    scale: number;
                    drawerActivation: boolean;
                    drawerShowDetails: boolean;
                    mobileDrawerShowDetails: boolean;
                    overlay: {
                        getElement: () => Element;
                        getId: () => string | number;
                        getMap: () => import("openlayers").Map;
                        getOffset: () => number[];
                        getPosition: () => Coordinate;
                        getPositioning: () => import("openlayers").OverlayPositioning;
                        setElement: (element: Element) => void;
                        setMap: (map: import("openlayers").Map) => void;
                        setOffset: (offset: number[]) => void;
                        setPosition: (position: Coordinate | undefined) => void;
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
                        getPosition: () => Coordinate;
                        getPositioning: () => import("openlayers").OverlayPositioning;
                        setElement: (element: Element) => void;
                        setMap: (map: import("openlayers").Map) => void;
                        setOffset: (offset: number[]) => void;
                        setPosition: (position: Coordinate | undefined) => void;
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
                        city: import("./Map.model").NuString;
                        district: import("./Map.model").NuString;
                        formatted_address: import("./Map.model").NuString;
                        in_odd_even_zone: boolean;
                        in_traffic_zone: boolean;
                        municipality_zone: import("./Map.model").NuString;
                        neighbourhood: import("./Map.model").NuString;
                        place: import("./Map.model").NuString;
                        route_name: import("./Map.model").NuString;
                        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                        state: import("./Map.model").NuString;
                        status: import("./Map.model").NuString;
                        village: import("./Map.model").NuString;
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
                        city: import("./Map.model").NuString;
                        district: import("./Map.model").NuString;
                        formatted_address: import("./Map.model").NuString;
                        in_odd_even_zone: boolean;
                        in_traffic_zone: boolean;
                        municipality_zone: import("./Map.model").NuString;
                        neighbourhood: import("./Map.model").NuString;
                        place: import("./Map.model").NuString;
                        route_name: import("./Map.model").NuString;
                        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                        state: import("./Map.model").NuString;
                        status: import("./Map.model").NuString;
                        village: import("./Map.model").NuString;
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
                getters: {
                    drawerWidth: string;
                    loading: boolean;
                    touchPlatform: boolean;
                };
                actions: any;
            };
            inlineSvgs: {
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
                }; /**
                 * تغییر استایل بخش تنظیمات برای حالت موبایل
                 */
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                default: string;
            };
            size: {
                type: NumberConstructor;
                default: number;
            };
            color: StringConstructor;
            scale: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            scale: boolean;
            name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
            size: number;
        }>;
        PointDetails: import("vue").DefineComponent<{
            item: PropType<import("../store/markers/markers.model").SelectedMarker>;
            collapse: BooleanConstructor;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                item: PropType<import("../store/markers/markers.model").SelectedMarker>;
                collapse: BooleanConstructor;
            }>> & {}>>;
            pointDetailsContainer: import("vue").Ref<HTMLDivElement | undefined>;
            iconName: import("vue").ComputedRef<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | undefined>;
            width: import("vue").Ref<number>;
            formattedItem: import("vue").ComputedRef<{
                place: import("./Map.model").NuString;
                address: import("./Map.model").NuString;
                region: import("./Map.model").NuString;
                neighbourhood: string;
                in_odd_even_zone: boolean | null;
                in_traffic_zone: boolean | null;
            } | undefined>;
            Icon: import("vue").DefineComponent<{
                name: {
                    type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                    default: string;
                };
                size: {
                    type: NumberConstructor;
                    default: number;
                };
                color: StringConstructor;
                scale: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    name: {
                        type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                        default: string;
                    };
                    size: {
                        type: NumberConstructor;
                        default: number;
                    };
                    color: StringConstructor;
                    scale: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {}>>;
                computedSize: import("vue").ComputedRef<number>;
                store: {
                    state: {
                        api: {
                            REVERSE: (lng: number, lat: number) => Promise<import("../store/markers/markers.model").PrimaryReverseResult>;
                            SEARCH: (term: string, coords: Coordinate) => Promise<import("../store/markers/markers.model").SearchResult>;
                        } | null;
                        searchLoading: boolean;
                        reverseLoading: boolean;
                        mapContainer: HTMLDivElement | null;
                        map: {
                            setMapType: (value: MapType) => void;
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
                            getEventCoordinate: (event: Event) => Coordinate;
                            getEventPixel: (event: Event) => import("openlayers").Pixel;
                            getTarget: () => string | Element;
                            getTargetElement: () => Element;
                            getCoordinateFromPixel: (pixel: import("openlayers").Pixel) => Coordinate;
                            getControls: () => import("openlayers").Collection<import("openlayers").control.Control>;
                            getOverlays: () => import("openlayers").Collection<import("openlayers").Overlay>;
                            getOverlayById: (id: string | number) => import("openlayers").Overlay;
                            getInteractions: () => import("openlayers").Collection<import("openlayers").interaction.Interaction>;
                            getLayerGroup: () => import("openlayers").layer.Group;
                            getLayers: () => import("openlayers").Collection<import("openlayers").layer.Base>;
                            getPixelFromCoordinate: (coordinate: Coordinate) => import("openlayers").Pixel;
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
                        mapType: MapType;
                        zoom: number;
                        poiLayer: boolean;
                        trafficLayer: boolean;
                        viewType: ViewType;
                        scale: number;
                        drawerActivation: boolean;
                        drawerShowDetails: boolean;
                        mobileDrawerShowDetails: boolean;
                        overlay: {
                            getElement: () => Element;
                            getId: () => string | number;
                            getMap: () => import("openlayers").Map;
                            getOffset: () => number[];
                            getPosition: () => Coordinate;
                            getPositioning: () => import("openlayers").OverlayPositioning;
                            setElement: (element: Element) => void;
                            setMap: (map: import("openlayers").Map) => void;
                            setOffset: (offset: number[]) => void;
                            setPosition: (position: Coordinate | undefined) => void;
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
                            getPosition: () => Coordinate;
                            getPositioning: () => import("openlayers").OverlayPositioning;
                            setElement: (element: Element) => void;
                            setMap: (map: import("openlayers").Map) => void;
                            setOffset: (offset: number[]) => void;
                            setPosition: (position: Coordinate | undefined) => void;
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
                            city: import("./Map.model").NuString;
                            district: import("./Map.model").NuString;
                            formatted_address: import("./Map.model").NuString;
                            in_odd_even_zone: boolean;
                            in_traffic_zone: boolean;
                            municipality_zone: import("./Map.model").NuString;
                            neighbourhood: import("./Map.model").NuString;
                            place: import("./Map.model").NuString;
                            route_name: import("./Map.model").NuString;
                            route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                            state: import("./Map.model").NuString;
                            status: import("./Map.model").NuString;
                            village: import("./Map.model").NuString;
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
                            city: import("./Map.model").NuString;
                            district: import("./Map.model").NuString;
                            formatted_address: import("./Map.model").NuString;
                            in_odd_even_zone: boolean;
                            in_traffic_zone: boolean;
                            municipality_zone: import("./Map.model").NuString;
                            neighbourhood: import("./Map.model").NuString;
                            place: import("./Map.model").NuString;
                            route_name: import("./Map.model").NuString;
                            route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | null;
                            state: import("./Map.model").NuString;
                            status: import("./Map.model").NuString;
                            village: import("./Map.model").NuString;
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
                    getters: {
                        drawerWidth: string;
                        loading: boolean;
                        touchPlatform: boolean;
                    };
                    actions: any;
                };
                inlineSvgs: {
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
                    }; /**
                     * تغییر استایل بخش تنظیمات برای حالت موبایل
                     */
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
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                    default: string;
                };
                size: {
                    type: NumberConstructor;
                    default: number;
                };
                color: StringConstructor;
                scale: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>>, {
                scale: boolean;
                name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
                size: number;
            }>;
            markerUrls: {
                main: string;
                search: string;
                colorSvg: string;
                greySvg: string;
                preview256: string;
                searchPrev: string;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            item: PropType<import("../store/markers/markers.model").SelectedMarker>;
            collapse: BooleanConstructor;
        }>>, {
            collapse: boolean;
        }>;
        Loading: import("vue").DefineComponent<{
            color: {
                type: StringConstructor;
                default: string;
            };
            dense: BooleanConstructor;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: StringConstructor;
                default: string;
            };
            dense: BooleanConstructor;
        }>>, {
            color: string;
            dense: boolean;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-zoom" | "on-click")[], "on-zoom" | "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * کلید نقشه، گرفته شده از پلتفرم نشان
     */
    mapKey: {
        type: StringConstructor;
        required: true;
    };
    /**
     * کلید سرویس‌ها برای تبدیل نقطه به آدرس (Reverse) و جستجو (search)
     */
    serviceKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * مرکز نقشه در هنگام شروع
     */
    center: {
        type: PropType<CoordsObj>;
        default: null;
    };
    /**
     * میزان زوم نقشه در هنگام شروع
     */
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * نمایش یا عدم نمایش نقاط
     */
    poi: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * نمایش یا عدم نمایش خطوط ترافیک
     */
    traffic: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * نوع نقشه در هنگام شروع
     * <br>
     * neshan
    | dreamy
    | dreamy-gold
    | standard-night
    | standard-day
    | osm-bright
     */
    defaultType: {
        type: PropType<MapType>;
        default: string;
    };
    /**
     * آرایه‌ای از انواع نقشه‌هایی که می‌خواهید در تنظیمات نمایش داده شود.
     */
    mapTypes: {
        type: PropType<MapType[]>;
        default: MapType[];
    };
    /**
     * تغییر کلاس بخش تنظیمات برای حالت دستکتاپ
     */
    desktopSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر کلاس بخش تنظیمات برای حالت موبایل
     */
    mobileSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر استایل بخش تنظیمات برای حالت دستکتاپ
     */
    desktopSettingsStyle: ObjectConstructor;
    /**
     * تغییر استایل بخش تنظیمات برای حالت موبایل
     */
    mobileSettingsStyle: ObjectConstructor;
    /**
     * تغییر کلاس پاپ آپ موقت (هنگامی که کاربر با موس هاور می‌کند)
     */
    temporaryPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر کلاس پاپ آپ دائم (هنگامی که کاربر کلیک می‌کند)
     */
    persistantPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    /**
     * تغییر استایل پاپ آپ موقت (هنگامی که کاربر با موس هاور می‌کند)
     */
    temporaryPopupContainerStyle: ObjectConstructor;
    /**
     * تغییر استایل پاپ آپ دائم (هنگامی که کاربر کلیک می‌کند)
     */
    persistantPopupContainerStyle: ObjectConstructor;
    /**
     * عدم نمایش تنظیمات
     */
    hideSettings: BooleanConstructor;
    /**
     * عدم نمایش بخش سرج و نتایج
     */
    hideSearchContainer: BooleanConstructor;
    /**
     *
     */
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
    reverseOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    viewType: PropType<ViewType>;
}>> & {
    "onOn-zoom"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    zoom: number;
    scale: number;
    serviceKey: string;
    center: CoordsObj;
    poi: boolean;
    traffic: boolean;
    defaultType: MapType;
    mapTypes: MapType[];
    hideSettings: boolean;
    hideSearchContainer: boolean;
    popupOnMarkerHover: boolean;
    popupOnResultHover: boolean;
    zoomOnMarkerClick: boolean;
    zoomOnResultClick: boolean;
    cluster: boolean;
    clusterThreshold: number;
    reverseOnClick: boolean;
}>;
export default _sfc_main;
