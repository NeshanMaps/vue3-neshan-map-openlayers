import { IconColor, SearchItem, CreateIconProps, CreateStyleProps, CreateLayerProps, CreateMarkersProps, MarkersMixinProps } from "../components/Map.model";
export declare function markersFunc({ map, markersIconCallback }: MarkersMixinProps): {
    createText: () => any;
    createIcon: ({ color, iconScale, src, anchor, }?: CreateIconProps) => any;
    createStyle: ({ image, text }: CreateStyleProps) => any;
    createSource: (features: any) => any;
    createLayer: ({ target, style, source, }: CreateLayerProps) => any;
    createMapPoints: (items: SearchItem[], color?: string) => {
        coords: import("../components/Map.model").DoubleNums;
        text: string;
        color: IconColor;
        iconScale: number;
        originalItem: SearchItem;
    }[];
    createMarkers: (points: CreateMarkersProps, showPopup?: boolean) => {
        layer: any;
        style: any;
    };
    addMarkers: (points: CreateMarkersProps, showPopup?: boolean) => {
        layer: any;
        style: any;
    };
    clearMarkerLayer: (layer: any) => void;
};
