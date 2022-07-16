import { PropType } from "vue";
import { CoordsObj } from "../Map.model";
declare const _default: import("vue").DefineComponent<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
        default: string;
    };
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:mapType" | "update:search-text" | "update:search-coords" | "submit")[], "update:mapType" | "update:search-text" | "update:search-coords" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
        default: string;
    };
    searchCoords: {
        type: PropType<CoordsObj>;
        default: () => {
            longitude: number;
            latitude: number;
        };
    };
}>> & {
    "onUpdate:mapType"?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
}, {
    searchText: string;
    searchCoords: CoordsObj;
}>;
export default _default;
