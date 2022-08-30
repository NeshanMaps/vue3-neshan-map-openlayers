import { CreateIconProps, CreateLayerProps, CreateMapPointsOptions, CreateMarkers, CreateMarkersPoints, CreateRawStyleProps, CreateStyleProps, MarkersIconCallback, Ol, Source, Style, VectorLayer } from "../components/Map.model";
import { PrimarySearchItem } from "../store/markers/markers.model";
import { Feature } from "openlayers";
/**
 * Receives an array of points and returns a layer of markers.
 * @param points - Array of points.
 * @param point.coords - Coordinates of that point.
 * @param point.text - If you have a particular text for the point.
 * @param point.color - If you have a particular color for that point (only checks the first point for now).
 * @param point.image - If you have a particular image for that point (only checks the first point for now).
 * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
 * @param point.originalItem - original item from neshan search result
 * @param point.props - props to set for point feature
 * @param options.hidePopup - If you don't want to show popup
 * @param options.cluster - If these markers need to be clusterd on given zoom number
 * @param options.clusterThreshold - Zoom number that markers should be clusterd on zoom condition above that given zoom
 * @param options.props - Props to set for all features
 * @returns style and layer.
 */
export declare const createMarkers: CreateMarkers;
export declare const createIcon: ({ iconScale, src, anchor, }?: CreateIconProps) => Ol.style.Image;
export declare const createRawStyle: ({ image, text }: CreateRawStyleProps) => Style;
export declare const createStyle: ({ hidePopup, iconScale, anchor, }: CreateStyleProps) => {
    style: Ol.style.Style;
    styleFunc: Ol.StyleFunction;
};
/**
 * Creates ol layer
 * @returns ol layer
 */
export declare const createLayer: ({ target, style, source, }: CreateLayerProps) => VectorLayer;
/**
 * Converts points given from neshan server to openlayers-friendly points
 * checks if icon type has a respective icon url
 * @param items - Items from search result
 * @param options.color - color of the markers
 * @param options.iconScale - scale of the markers
 */
export declare const createMapPoints: (items: PrimarySearchItem[], options?: CreateMapPointsOptions) => Promise<{
    coords: Ol.Coordinate;
    text: string;
    iconUrl: string;
    iconScale: number;
    originalItem: PrimarySearchItem;
}[]>;
/**
 * Checks if icon url exists or not
 * @param iconName
 * @returns
 */
export declare const checkIconImageExistance: (iconName: string) => Promise<{
    url: string;
    exists: boolean;
}>;
export declare const createClusterSource: (features: Feature[], { minDistance, distance }?: {
    minDistance?: number;
    distance?: number;
}) => Source;
/**
 * Gets the sufficent extent to zoom on a cluster or marker
 * @param cluster
 * @returns extent
 */
export declare const getClusterExtent: (cluster: Feature) => Ol.Extent;
/**
 * Gets the extent of a feature
 * @param feature
 * @returns extent
 */
export declare const getFeatureExtent: (feature: Feature) => Ol.Extent;
/**
 * Takes a feature and returns text value from its properties
 * and ol coords on map
 * @param feature
 * @returns
 */
export declare const getCoordsAndTextFromFeature: (feature: Feature) => {
    featCoords: Ol.Coordinate;
    featText: string | string[];
};
/**
 * Gets OpenLayer Coordinates of the given feature
 * @param feature
 * @returns Coords array
 */
export declare const getCoordsFromFeature: (feature: Feature) => Ol.Coordinate;
/**
 * Receives an array of points and returns an array of features.
 * @param points - Array of points.
 * @param point.text - If you have a particular text for the point.
 * @param proint.props - Props to set for a feature
 * @param props - Props to set for features
 * @returns array of features.
 */
export declare const createFeaturesFromPoints: (points: CreateMarkersPoints, markersIconCallback?: MarkersIconCallback, props?: any) => Feature[];
