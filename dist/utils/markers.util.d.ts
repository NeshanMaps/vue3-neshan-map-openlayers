import { IconColor, SearchItem, CoordsArr, CreateIconProps, CreateStyleProps, CreateLayerProps } from "../components/Map.model";
export declare const markerUrls: {
    red: string;
    blue: string;
};
export declare const createText: () => any;
export declare const createIcon: ({ color, iconScale, }?: CreateIconProps) => any;
export declare const createStyle: ({ image, text }: CreateStyleProps) => any;
/**
 * Creates ol source from given features
 * @param features
 * @returns ol source
 */
export declare const createSource: (features: any) => any;
/**
 * Creates ol layer
 * @returns ol layer
 */
export declare const createLayer: ({ target, style, source, }: CreateLayerProps) => any;
/**
 * Changes points given from neshan server to openlayers-friendly points
 * @param items Items from search result
 * @param color color of the markers
 */
export declare const createMapPoints: (items: SearchItem[], color?: string) => {
    coords: CoordsArr;
    text: string;
    color: IconColor;
    iconScale: number;
}[];
