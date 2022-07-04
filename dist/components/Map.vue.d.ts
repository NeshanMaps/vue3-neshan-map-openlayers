import { PropType } from "vue";
import { CoordsObj, MapType } from "./Map.model";
declare const _default: import("vue").DefineComponent<{
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
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-click" | "on-zoom")[], "on-click" | "on-zoom", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-zoom"?: ((...args: any[]) => any) | undefined;
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
}>;
export default _default;
