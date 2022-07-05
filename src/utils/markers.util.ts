declare const ol: any; // eslint-disable-line
import {
  IconColor,
  SearchItem,
  CoordsArr,
  CreateIconProps,
  CreateStyleProps,
  CreateLayerProps,
  CreateMarkersProps,
  CreateMarkersPropsItem
} from "../components/Map.model";

export const markerUrls = {
  red: "https://img.icons8.com/color/344/marker--v1.png",
  // blue: "https://img.icons8.com/ultraviolet/344/marker.png",
  blue: "https://cdn-icons.flaticon.com/png/512/5616/premium/5616461.png?token=exp=1657019697~hmac=76f95f6acf11241e906b5fc7fcaa5d59",
};

export const createText = (): any => { // eslint-disable-line
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
export const createIcon = ({
  color = "red",
  iconScale = 0.1,
}: CreateIconProps = {}): any => { // eslint-disable-line
  return new ol.style.Icon({
    src: markerUrls[color],
    scale: iconScale,
    anchor: [0.5, 1],
  });
};
export const createStyle = ({ image, text }: CreateStyleProps): any => { // eslint-disable-line
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
export const createSource = (features: any): any => { // eslint-disable-line
  return new ol.source.Vector({
    features,
  });
};

/**
 * Creates ol layer
 * @returns ol layer
 */
export const createLayer = ({
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
export const createMapPoints = (items: SearchItem[], color = "blue") => {
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
 * @returns style and layer.
 */
export const createMarkers = (points: CreateMarkersProps, showPopup = false) => {
  const [
    { style, image, color, iconScale } = {} as CreateMarkersPropsItem,
  ] = points;
  const features = points.map(
    (point) =>
      new ol.Feature({
        geometry: new ol.geom.Point(point.coords),
        text: point.text,
      })
  );
  const _text = createText();
  const _image = image || createIcon({ color, iconScale });
  const _style = style || createStyle({ text: _text, image: _image });
  const styleFunc = (feature: any) => {
    _style.getText().setText(feature.get("text"));
    return _style;
  };
  const finalStyle = showPopup ? _style : styleFunc
  const source = createSource(features);
  const _pinLayer = createLayer({ style: finalStyle, source });
  return { layer: _pinLayer, style: _style };
}

