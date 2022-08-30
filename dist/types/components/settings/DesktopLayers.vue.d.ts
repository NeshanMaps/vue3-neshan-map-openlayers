import { PropType } from "vue";
import { Tile } from "../Map.model";
declare const _default: import("vue").DefineComponent<{
    tiles: {
        type: PropType<Tile[]>;
        default: () => any[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tiles: {
        type: PropType<Tile[]>;
        default: () => any[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}>>, {
    tiles: Tile[];
}>;
export default _default;
