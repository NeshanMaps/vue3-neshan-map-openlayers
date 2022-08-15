import { PropType } from "vue";
import { SelectedMarker } from "@/store/markers/markers.model";
declare const _default: import("vue").DefineComponent<{
    item: {
        type: PropType<SelectedMarker>;
        default: any;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<SelectedMarker>;
        default: any;
    };
}>>, {
    item: SelectedMarker;
}>;
export default _default;
