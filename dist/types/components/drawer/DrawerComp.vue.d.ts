import { PropType } from "vue";
import { CoordsObj } from "../Map.model";
import { SearchItem } from "@/store/markers/markers.model";
declare const _default: import("vue").DefineComponent<{
    results: PropType<SearchItem[]>;
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
    loading: BooleanConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "result-click" | "result-hover")[], "search" | "result-click" | "result-hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    results: PropType<SearchItem[]>;
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
    loading: BooleanConstructor;
}>> & {
    onSearch?: (...args: any[]) => any;
    "onResult-click"?: (...args: any[]) => any;
    "onResult-hover"?: (...args: any[]) => any;
}, {
    loading: boolean;
    searchCoords: CoordsObj;
}>;
export default _default;
