import { PropType } from "vue";
import { SearchItem } from "@/components/Map.model";
declare const _default: import("vue").DefineComponent<{
    resultBoxClass: ArrayConstructor;
    resultBoxStyle: ObjectConstructor;
    results: {
        type: PropType<SearchItem[]>;
        default: () => never[];
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("result-click" | "result-hover")[], "result-click" | "result-hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
export default _default;
