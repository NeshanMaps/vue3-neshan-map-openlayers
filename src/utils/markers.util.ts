declare const ol: any; // eslint-disable-line
import {
  IconColor,
  SearchItem,
  CoordsArr,
  CreateIconProps,
  CreateStyleProps,
  CreateLayerProps,
} from "../components/Map.model";

export const markerUrls = {
  red: "https://img.icons8.com/color/344/marker--v1.png",
  blue: "https://img.icons8.com/ultraviolet/344/marker.png",
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
 * Changes points given from neshan server to openlayers-friendly points
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
      iconScale: 0.07,
    };
  });
};
