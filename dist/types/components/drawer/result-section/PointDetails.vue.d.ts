import { PropType } from "vue";
import { SelectedMarker } from "../../../store/markers/markers.model";
declare const _sfc_main: import("vue").DefineComponent<{
    item: PropType<SelectedMarker>;
    collapse: BooleanConstructor;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        item: PropType<SelectedMarker>;
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
    item: PropType<SelectedMarker>;
    collapse: BooleanConstructor;
}>>, {
    collapse: boolean;
}>;
export default _sfc_main;
