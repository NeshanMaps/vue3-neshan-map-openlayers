import { PropType } from "vue";
import { SearchItem } from "../../../store/markers/markers.model";
declare const _sfc_main: import("vue").DefineComponent<{
    resultBoxClass: ArrayConstructor;
    resultBoxStyle: ObjectConstructor;
    results: {
        type: PropType<SearchItem[]>;
        default: () => never[];
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        resultBoxClass: ArrayConstructor;
        resultBoxStyle: ObjectConstructor;
        results: {
            type: PropType<SearchItem[]>;
            default: () => never[];
        };
    }>> & {
        "onResult-click"?: ((...args: any[]) => any) | undefined;
        "onResult-hover"?: ((...args: any[]) => any) | undefined;
    }>>;
    resultSection: import("vue").Ref<HTMLDivElement | undefined>;
    emits: (event: "result-click" | "result-hover", ...args: any[]) => void;
    handleHoverEmit: (item: SearchItem) => void;
    emitHover: (item: SearchItem) => void;
    emitClick: (item: SearchItem) => void;
    store: any;
    ResultItem: import("vue").DefineComponent<{
        item: PropType<SearchItem>;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: PropType<SearchItem>;
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
        item: PropType<import("../../../store/markers/markers.model").SelectedMarker>;
        collapse: BooleanConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            item: PropType<import("../../../store/markers/markers.model").SelectedMarker>;
            collapse: BooleanConstructor;
        }>> & {}>>;
        pointDetailsContainer: import("vue").Ref<HTMLDivElement | undefined>;
        iconName: import("vue").ComputedRef<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | undefined>;
        width: import("vue").Ref<number>;
        formattedItem: import("vue").ComputedRef<{
            place: import("../../Map.model").NuString;
            address: import("../../Map.model").NuString;
            region: import("../../Map.model").NuString;
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
        item: PropType<import("../../../store/markers/markers.model").SelectedMarker>;
        collapse: BooleanConstructor;
    }>>, {
        collapse: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("result-click" | "result-hover")[], "result-click" | "result-hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    resultBoxClass: ArrayConstructor;
    resultBoxStyle: ObjectConstructor;
    results: {
        type: PropType<SearchItem[]>;
        default: () => never[];
    };
}>> & {
    "onResult-click"?: ((...args: any[]) => any) | undefined;
    "onResult-hover"?: ((...args: any[]) => any) | undefined;
}, {
    results: SearchItem[];
}>;
export default _sfc_main;
