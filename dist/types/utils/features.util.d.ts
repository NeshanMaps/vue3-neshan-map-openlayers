import { CreateIconProps, CreateLayerProps, CreateMarkersOptions, CreateMarkersProps, CreateStyleProps, IconColor, MarkersIconCallback, SearchItem } from '@/components/Map.model';
export declare const createText: () => any;
export declare const createIcon: ({ color, iconScale, src, anchor, }?: CreateIconProps) => any;
export declare const createStyle: ({ image, text }: CreateStyleProps) => any;
/**
 * Creates ol layer
 * @returns ol layer
 */
export declare const createLayer: ({ target, style, source, }: CreateLayerProps) => any;
/**
 * Converts points given from neshan server to openlayers-friendly points
 * @param items - Items from search result
 * @param color - color of the markers
 */
export declare const createMapPoints: (items: SearchItem[], color?: string) => {
    coords: import("@/components/Map.model").DoubleNums;
    text: string;
    color: IconColor;
    iconScale: number;
    originalItem: SearchItem;
}[];
/**
 * Receives an array of points and returns a layer of markers.
 * @param points - Array of points.
 * @param point.coords - Coordinates of that point.
 * @param point.text - If you have a particular text for the point.
 * @param point.style - If you have a particular style for that point (only checks the first point for now).
 * @param point.color - If you have a particular color for that point (only checks the first point for now).
 * @param point.image - If you have a particular image for that point (only checks the first point for now).
 * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
 * @param point.originalItem - original item from neshan search result
 * @param options.showPopup - If you want show the text as popup
 * @returns style and layer.
 */
export declare const createMarkers: (points: CreateMarkersProps, options?: CreateMarkersOptions | undefined) => {
    layer: any;
    style: any;
};
/**
 * Gets the sufficent extent to zoom on a cluster or marker
 * @param cluster
 * @returns extent
 */
export declare const getClusterExtent: (cluster: any) => import("@/components/Map.model").QuadrupleNums;
/**
 * Takes a feature and returns text value from its properties
 * and ol coords on map
 * @param feature
 * @returns
 */
export declare const getCoordsAndTextFromFeature: (feature: any) => {
    featCoords: import("@/components/Map.model").DoubleNums;
    featText: string[];
};
/**
 * Gets OpenLayer Coordinates of the given feature
 * @param feature
 * @returns Coords array
 */
export declare const getCoordsFromFeature: (feature: any) => import("@/components/Map.model").DoubleNums;
/**
 * Receives an array of points and returns an array of features.
 * @param points - Array of points.
 * @param point.text - If you have a particular text for the point.
 * @returns array of features.
 */
export declare const createFeaturesFromPoints: (points: CreateMarkersProps, markersIconCallback?: MarkersIconCallback | undefined) => any[];
