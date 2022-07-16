import { PropType } from "vue";
import { MapType, Tile } from "../Map.model";
declare const _default: import("vue").DefineComponent<{
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
