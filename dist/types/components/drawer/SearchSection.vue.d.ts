declare const _default: import("vue").DefineComponent<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "update:search-text" | "update:search-coords")[], "submit" | "update:search-text" | "update:search-coords", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: ArrayConstructor;
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
