declare const _default: import("vue").DefineComponent<{
    searchBoxClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "update:search-text" | "update:search-coords")[], "submit" | "update:search-text" | "update:search-coords", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}>> & {
    onSubmit?: (...args: any[]) => any;
    "onUpdate:search-text"?: (...args: any[]) => any;
    "onUpdate:search-coords"?: (...args: any[]) => any;
}, {}>;
export default _default;
