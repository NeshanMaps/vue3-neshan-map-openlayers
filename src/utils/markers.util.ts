declare const ol: any;
import {
  IconColor,
  SearchItem,
  CoordsArr,
  CreateIconProps,
  CreateStyleProps,
  CreateLayerProps,
  CreateMarkersProps,
  CreateMarkersPropsItem,
  MarkersMixinProps,
} from "../components/Map.model";

export function markersFunc({ map, markersIconCallback }: MarkersMixinProps) {
  const markerUrls = {
    red: "https://img.icons8.com/color/344/marker--v1.png",
    // blue: "https://img.icons8.com/ultraviolet/344/marker.png",
    blue: "https://cdn-icons.flaticon.com/png/512/5616/premium/5616461.png?token=exp=1657019697~hmac=76f95f6acf11241e906b5fc7fcaa5d59",
  };

  /**
   * Receives an array of points and returns an array of features.
   * @param points - Array of points.
   * @param point.text - If you have a particular text for the point.
   * @returns array of features.
   */
  const createFeaturesFromPoints = (points: CreateMarkersProps) => {
    return points.map(
      (point) =>
        new ol.Feature({
          geometry: new ol.geom.Point(point.coords),
          text: point.text,
          iconProps: markersIconCallback && markersIconCallback(point),
        })
    );
  };

  const createText = (): any => {
    return new ol.style.Text({
      overflow: true,
      scale: 1.6,
      offsetY: -43,
      fill: new ol.style.Fill({
        color: "#fff",
      }),
      stroke: new ol.style.Stroke({
        color: "0",
        width: 2,
      }),
    });
  };
  const createIcon = ({
    color = "red",
    iconScale = 0.1,
    src = markerUrls[color],
    anchor = [0.5, 1],
  }: CreateIconProps = {}): any => {
    return new ol.style.Icon({
      src,
      scale: iconScale,
      anchor,
    });
  };
  const createStyle = ({ image, text }: CreateStyleProps): any => {
    return new ol.style.Style({
      image: image,
      text: text,
    });
  };

  /**
   * Creates ol source from given features
   * @param features
   * @returns ol source
   */
  const createSource = (features: any): any => {
    return new ol.source.Vector({
      features,
    });
  };

  /**
   * Creates ol layer
   * @returns ol layer
   */
  const createLayer = ({
    target = "points",
    style,
    source,
  }: CreateLayerProps) => {
    return new ol.layer.Vector({
      target,
      source,
      style,
    });
  };

  /**
   * Converts points given from neshan server to openlayers-friendly points
   * @param items Items from search result
   * @param color color of the markers
   */
  const createMapPoints = (items: SearchItem[], color = "blue") => {
    return items.map((item) => {
      const point = Object.values(item.location);
      const stdPoint: CoordsArr = ol.proj.transform(
        point,
        "EPSG:4326",
        "EPSG:3857"
      );
      return {
        coords: stdPoint,
        text: item.title,
        color: color as IconColor,
        iconScale: 0.06,
        originalItem: item,
      };
    });
  };

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
   * @param showPopup - If you want show the text as popup
   * @returns style and layer.
   */
  const createMarkers = (points: CreateMarkersProps, showPopup = false) => {
    const [{ style, image, color, iconScale } = {} as CreateMarkersPropsItem] =
      points;
    const features = createFeaturesFromPoints(points);
    const _text = createText();
    const _image = image || createIcon({ color, iconScale });
    const _style = style || createStyle({ text: _text, image: _image });
    const styleFunc = styleFuncGen(_style)
    const finalStyle = showPopup ? _style : styleFunc;
    const source = createSource(features);
    const _pinLayer = createLayer({ style: finalStyle, source });
    return { layer: _pinLayer, style: _style };
  };

  const styleFuncGen = (style: any) => {
    return (feature: any) => {
      style.getText().setText(feature.get("text"));
      const iconProps = feature.get("iconProps")
      if (iconProps) {
        style.setImage(createIcon(feature.get("iconProps")));
      }
      return style;
    };
  }

  /**
   * Receives an array of points and marks them on map.
   * @param points - Array of points.
   * @param point.coords - Coordinates of that point.
   * @param point.text - If you have a particular text for the point.
   * @param point.style - If you have a particular style for that point (only checks the first point for now).
   * @param point.color - If you have a particular color for that point (only checks the first point for now).
   * @param point.image - If you have a particular image for that point (only checks the first point for now).
   * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
   * @param point.originalItem - original item from neshan search result
   * @param showPopup - If you want show the text as popup
   *  @returns style and layer.
   */
  const addMarkers = (points: CreateMarkersProps, showPopup = false) => {
    const { layer, style } = createMarkers(points, showPopup);
    map.value.addLayer(layer);
    return { layer, style };
  };

  /**
   * Removes markers from map
   */
  const clearMarkerLayer = (layer: any) => {
    map.value.removeLayer(layer.value);
    layer.value = null;
  };

  return {
    createText,
    createIcon,
    createStyle,
    createSource,
    createLayer,
    createMapPoints,
    createMarkers,
    addMarkers,
    clearMarkerLayer,
  };
}
