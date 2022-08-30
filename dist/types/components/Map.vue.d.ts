import { PropType } from "vue";
import { CoordsObj, ResultHoverCallback, ResultClickCallback, MarkersIconCallback, MarkerHoverCallback } from "./Map.model";
import { MapType, ViewType } from "@/store/map/map.model";
declare const _default: import("vue").DefineComponent<{
    mapKey: {
        type: StringConstructor;
        required: true;
    };
    serviceKey: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: PropType<CoordsObj>;
        default: any;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    poi: BooleanConstructor;
    traffic: BooleanConstructor;
    defaultType: {
        type: PropType<MapType>;
        default: string;
    };
    mapTypes: {
        type: PropType<MapType[]>;
        default: MapType[];
    };
    desktopSettingsClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    mobileSettingsClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    desktopSettingsStyle: ObjectConstructor;
    mobileSettingsStyle: ObjectConstructor;
    temporaryPopupContainerClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    persistantPopupContainerClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    temporaryPopupContainerStyle: ObjectConstructor;
    persistantPopupContainerStyle: ObjectConstructor;
    hideSettings: BooleanConstructor;
    typesClass: ArrayConstructor;
    hideSearchBox: BooleanConstructor;
    hideSearchContainer: BooleanConstructor;
    hideResultBox: BooleanConstructor;
    resultHoverCallback: PropType<ResultHoverCallback>;
    resultClickCallback: PropType<ResultClickCallback>;
    markersIconCallback: PropType<MarkersIconCallback>;
    markerHoverCallback: PropType<MarkerHoverCallback>;
    popupOnMarkerHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupOnResultHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnMarkerClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnResultClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    cluster: {
        type: BooleanConstructor;
        default: boolean;
    };
    clusterThreshold: {
        type: NumberConstructor;
        default: number;
    };
    reverseOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    viewType: PropType<ViewType>;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-zoom" | "on-click")[], "on-zoom" | "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mapKey: {
        type: StringConstructor;
        required: true;
    };
    serviceKey: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: PropType<CoordsObj>;
        default: any;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    poi: BooleanConstructor;
    traffic: BooleanConstructor;
    defaultType: {
        type: PropType<MapType>;
        default: string;
    };
    mapTypes: {
        type: PropType<MapType[]>;
        default: MapType[];
    };
    desktopSettingsClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    mobileSettingsClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    desktopSettingsStyle: ObjectConstructor;
    mobileSettingsStyle: ObjectConstructor;
    temporaryPopupContainerClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    persistantPopupContainerClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    temporaryPopupContainerStyle: ObjectConstructor;
    persistantPopupContainerStyle: ObjectConstructor;
    hideSettings: BooleanConstructor;
    typesClass: ArrayConstructor;
    hideSearchBox: BooleanConstructor;
    hideSearchContainer: BooleanConstructor;
    hideResultBox: BooleanConstructor;
    resultHoverCallback: PropType<ResultHoverCallback>;
    resultClickCallback: PropType<ResultClickCallback>;
    markersIconCallback: PropType<MarkersIconCallback>;
    markerHoverCallback: PropType<MarkerHoverCallback>;
    popupOnMarkerHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupOnResultHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnMarkerClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnResultClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    cluster: {
        type: BooleanConstructor;
        default: boolean;
    };
    clusterThreshold: {
        type: NumberConstructor;
        default: number;
    };
    reverseOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    viewType: PropType<ViewType>;
}>> & {
    "onOn-zoom"?: (...args: any[]) => any;
    "onOn-click"?: (...args: any[]) => any;
}, {
    zoomOnMarkerClick: boolean;
    zoomOnResultClick: boolean;
    popupOnMarkerHover: boolean;
    popupOnResultHover: boolean;
    reverseOnClick: boolean;
    zoom: number;
    serviceKey: string;
    center: CoordsObj;
    poi: boolean;
    traffic: boolean;
    defaultType: MapType;
    mapTypes: MapType[];
    hideSettings: boolean;
    hideSearchBox: boolean;
    hideSearchContainer: boolean;
    hideResultBox: boolean;
    cluster: boolean;
    clusterThreshold: number;
    scale: number;
}>;
export default _default;
