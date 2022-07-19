import { PropType } from 'vue';
import { CoordsObj } from '../Map.model';
declare const _default: import("vue").DefineComponent<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    activated: BooleanConstructor;
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
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:search-text" | "update:search-coords" | "update:activation" | "submit")[], "update:search-text" | "update:search-coords" | "update:activation" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    activated: BooleanConstructor;
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
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:activation"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
}, {
    activated: boolean;
    searchText: string;
    searchCoords: CoordsObj;
}>;
export default _default;
