import { PropType } from "vue";
import { CoordsObj, ResultHoverCallback, ResultClickCallback, MarkersIconCallback, MarkerHoverCallback, HandleSearchProps } from "./Map.model";
import { MapType, ViewType } from "../store/map/map.model";
declare const _sfc_main: import("vue").DefineComponent<{
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
    desktopSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    mobileSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    desktopSettingsStyle: ObjectConstructor;
    mobileSettingsStyle: ObjectConstructor;
    temporaryPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    persistantPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    temporaryPopupContainerStyle: ObjectConstructor;
    persistantPopupContainerStyle: ObjectConstructor;
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
        desktopSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        mobileSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        desktopSettingsStyle: ObjectConstructor;
        mobileSettingsStyle: ObjectConstructor;
        temporaryPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        persistantPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        temporaryPopupContainerStyle: ObjectConstructor;
        persistantPopupContainerStyle: ObjectConstructor;
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
    setToken: (token: string) => void;
    fontSize: import("vue").Ref<string>;
    mobileDrawerModel: import("vue").Ref<boolean>;
    filteredTiles: {
        title: MapType;
        url: string;
    }[];
    importMap: (url: string, tagName?: string) => HTMLElement;
    sanitizedCenter: import("vue").Ref<[number, number] | undefined>;
    mapContainer: import("vue").Ref<HTMLDivElement | undefined>;
    startMap: () => Promise<void>;
    popupContainer: import("vue").Ref<HTMLDivElement | undefined>;
    persistantContainer: import("vue").Ref<HTMLDivElement | undefined>;
    eventsEmits: (event: "on-zoom" | "on-click", ...args: any[]) => void;
    setupMapEvents: () => void;
    handleResultHover: (item: import("../store/markers/markers.model").SearchItem) => void;
    handleResultClick: (item: import("../store/markers/markers.model").SearchItem) => void;
    handleSearch: ({ term, coords }: HandleSearchProps) => void;
    handleMobileDrawerClick: (event: MouseEvent) => void;
    store: any;
    DesktopLayers: import("vue").DefineComponent<{
        tiles: {
            type: PropType<import("./Map.model").Tile[]>;
            default: () => never[];
        };
        settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
        settingsBoxStyle: ObjectConstructor;
    }, {
        store: any;
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
        store: any;
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
            typesClass: ArrayConstructor;
            searchText: {
                type: StringConstructor;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
                searchBoxStyle: ObjectConstructor;
                typesClass: ArrayConstructor;
                searchText: {
                    type: StringConstructor;
                };
            }>> & {
                "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
                "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
                onSubmit?: ((...args: any[]) => any) | undefined;
            }>>;
            width: string;
            emit: (event: "update:search-text" | "update:search-coords" | "submit", ...args: any[]) => void;
            text: import("vue").WritableComputedRef<string | undefined>;
            emitSearch: (term?: string) => void;
            emitTimeout: number;
            runTimeout: (value?: string | undefined, delay?: number) => void;
            store: any;
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
            }, {
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
            }>>, {
                name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
                size: number;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:search-text" | "update:search-coords" | "submit")[], "update:search-text" | "update:search-coords" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
            searchBoxStyle: ObjectConstructor;
            typesClass: ArrayConstructor;
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
            resultSection: import("vue").Ref<HTMLDivElement | undefined>;
            emits: (event: "result-click" | "result-hover", ...args: any[]) => void;
            handleHoverEmit: (item: import("../store/markers/markers.model").SearchItem) => void;
            emitHover: (item: import("../store/markers/markers.model").SearchItem) => void;
            emitClick: (item: import("../store/markers/markers.model").SearchItem) => void;
            store: any;
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
                }, {
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
                }>>, {
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
        store: any;
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
        store: any;
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
        }, {
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
        }>>, {
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
            }, {
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
            }>>, {
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
        drawerConstants: {
            width: string;
            bottomSheetNormalHeight: string;
            bottomSheetloadingHeight: string;
            bottomSheetBorderRadius: string;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-zoom" | "on-click")[], "on-zoom" | "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    desktopSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    mobileSettingsClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    desktopSettingsStyle: ObjectConstructor;
    mobileSettingsStyle: ObjectConstructor;
    temporaryPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    persistantPopupContainerClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    temporaryPopupContainerStyle: ObjectConstructor;
    persistantPopupContainerStyle: ObjectConstructor;
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
    popupOnMarkerHover: boolean;
    popupOnResultHover: boolean;
    zoomOnMarkerClick: boolean;
    zoomOnResultClick: boolean;
    cluster: boolean;
    clusterThreshold: number;
    reverseOnClick: boolean;
    scale: number;
}>;
export default _sfc_main;
