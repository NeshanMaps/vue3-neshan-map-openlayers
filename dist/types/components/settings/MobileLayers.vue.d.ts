import { Tile } from "../Map.model";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    value: BooleanConstructor;
    tiles: {
        type: PropType<Tile[]>;
        default: () => any[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "update:mapType" | "update:traffice" | "update:poi")[], "update:value" | "update:mapType" | "update:traffice" | "update:poi", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: BooleanConstructor;
    tiles: {
        type: PropType<Tile[]>;
        default: () => any[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}>> & {
    "onUpdate:value"?: (...args: any[]) => any;
    "onUpdate:mapType"?: (...args: any[]) => any;
    "onUpdate:traffice"?: (...args: any[]) => any;
    "onUpdate:poi"?: (...args: any[]) => any;
}, {
    value: boolean;
    tiles: Tile[];
}>;
export default _default;
