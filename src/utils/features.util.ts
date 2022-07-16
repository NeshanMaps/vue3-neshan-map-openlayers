declare const ol: any
import {
  CoordsArr,
  CreateIconProps,
  CreateLayerProps,
  CreateMarkersOptions,
  CreateMarkersProps,
  CreateMarkersPropsItem,
  CreateStyleProps,
  Extent,
  IconColor,
  MarkersIconCallback,
  SearchItem,
} from '@/components/Map.model'
import { markerUrls } from '@/parameters'

export const createText = (): any => {
  return new ol.style.Text({
    overflow: true,
    scale: 1.6,
    offsetY: -43,
    fill: new ol.style.Fill({
      color: '#fff',
    }),
    stroke: new ol.style.Stroke({
      color: '0',
      width: 2,
    }),
  })
}

export const createIcon = ({
  color = 'red',
  iconScale = 0.1,
  src = markerUrls[color],
  anchor = [0.5, 1],
}: CreateIconProps = {}): any => {
  return new ol.style.Icon({
    src,
    scale: iconScale,
    anchor,
  })
}
export const createStyle = ({ image, text }: CreateStyleProps): any => {
  return new ol.style.Style({
    image: image,
    text: text,
  })
}

/**
 * Creates ol source from given features
 * @param features
 * @returns ol source
 */
const createSource = (features: any): any => {
  return new ol.source.Vector({
    features,
    // projection: map.value.getView().projection, // Is it neccesary?
  })
}

/**
 * Creates ol layer
 * @returns ol layer
 */
export const createLayer = ({
  target = 'points',
  style,
  source,
}: CreateLayerProps) => {
  return new ol.layer.Vector({
    target,
    source,
    style,
  })
}

/**
 * Converts points given from neshan server to openlayers-friendly points
 * @param items - Items from search result
 * @param color - color of the markers
 */
export const createMapPoints = (items: SearchItem[], color = 'blue') => {
  return items.map((item) => {
    const point = Object.values(item.location)
    const stdPoint: CoordsArr = ol.proj.transform(
      point,
      'EPSG:4326',
      'EPSG:3857'
    )
    return {
      coords: stdPoint,
      text: item.title,
      color: color as IconColor,
      iconScale: 0.06,
      originalItem: item,
    }
  })
}

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
export const createMarkers = (
  points: CreateMarkersProps,
  options?: CreateMarkersOptions
) => {
  const [{ style, image, color, iconScale } = {} as CreateMarkersPropsItem] =
    points
  const features = createFeaturesFromPoints(
    points,
    options?.markersIconCallback
  )
  const _text = createText()
  const _image = image || createIcon({ color, iconScale })
  const _style = style || createStyle({ text: _text, image: _image })
  // const styleFunc = styleFuncGen({ style: _style, hardText: showPopup })
  // const source = createSource(features);
  // const _pinLayer = createLayer({ style: styleFunc, source });
  const clusterLayer = createClusterLayer(features, options?.showPopup)
  return { layer: clusterLayer, style: _style }
}

const styleFuncGen = ({
  style,
  hardText = false,
}: {
  style: any
  hardText?: boolean
}) => {
  return (feature: any) => {
    if (hardText) {
      style.getText().setText(feature.get('text'))
    }
    const iconProps = feature.get('iconProps')
    if (iconProps) {
      style.setImage(createIcon(feature.get('iconProps')))
    }
    return style
  }
}

const createClusterSource = (features: any) => {
  return new ol.source.Cluster({
    distance: 30,
    minDistance: 30,
    source: createSource(features),
  })
}

const createClusterText = (size: number) => {
  return new ol.style.Text({
    text: size.toString(),
    font: 'bold 15px serif',
    fill: new ol.style.Fill({
      color: [0, 0, 0, 1],
    }),
  })
}

const createClusterCircle = () => {
  return new ol.style.Circle({
    radius: 15,
    stroke: new ol.style.Stroke({
      color: [255, 255, 255, 0.7],
      width: 4,
    }),
    fill: new ol.style.Fill({
      color: [0, 153, 255, 0.7],
    }),
  })
}

const createClusterStyle = (size: number) => {
  return new ol.style.Style({
    image: createClusterCircle(),
    text: createClusterText(size),
  })
}

/**
 * Creates a style function for the clusters.
 * That if they are pointing to a single marker
 * the icon shown is the icon for single markers.
 * @param styleCache - An object to remember the set styles
 * @param showPopup - whether it should show a popup on hover or is a static text
 * @returns
 */
const createClusterStyleFunc = (
  styleCache: { [s: string]: any },
  showPopup?: boolean
) => {
  return (clusterFeature: any) => {
    const innerFeatures = clusterFeature.get('features')
    if (showPopup) {
      clusterFeature.set(
        'text',
        innerFeatures.map((feat: any) => feat.get('text'))
      )
    }
    const size = innerFeatures.length
    let style = styleCache[size]
    if (!style) {
      if (size !== 1) {
        style = createClusterStyle(size)
        styleCache[size] = style
      } else {
        const _text = createText()
        const _image = createIcon({ color: 'blue', iconScale: 0.15 })
        const _style = createStyle({ text: _text, image: _image })
        const styleFunc = styleFuncGen({
          style: _style,
          hardText: !showPopup,
        })
        style = styleFunc(innerFeatures[0])
      }
    }
    return style
  }
}

const createClusterLayer = (features: any[], showPopup?: boolean) => {
  const styleCache: { [s: string]: any } = {}
  const cluster_layer = new ol.layer.Vector({
    source: createClusterSource(features),
    style: createClusterStyleFunc(styleCache, showPopup),
  })
  return cluster_layer
}

/**
 * Gets the sufficent extent to zoom on a cluster or marker
 * @param cluster
 * @returns extent
 */
export const getClusterExtent = (cluster: any) => {
  const originalFeatures = cluster.get('features')
  const extent: Extent = new ol.extent.createEmpty()
  originalFeatures.forEach((f: any) => {
    ol.extent.extend(extent, f.getGeometry().getExtent())
  })
  return extent
}

/**
 * Takes a feature and returns text value from its properties
 * and ol coords on map
 * @param feature
 * @returns
 */
export const getCoordsAndTextFromFeature = (feature: any) => {
  const featCoords = getCoordsFromFeature(feature)
  const featText: string[] = feature.getProperties().text
  return {
    featCoords,
    featText,
  }
}

/**
 * Gets OpenLayer Coordinates of the given feature
 * @param feature
 * @returns Coords array
 */
export const getCoordsFromFeature = (feature: any): CoordsArr => {
  return feature.getGeometry().getCoordinates().slice(0, 2) //slice because it return array of 3 args idk why
}

/**
 * Receives an array of points and returns an array of features.
 * @param points - Array of points.
 * @param point.text - If you have a particular text for the point.
 * @returns array of features.
 */
export const createFeaturesFromPoints = (
  points: CreateMarkersProps,
  markersIconCallback?: MarkersIconCallback
) => {
  return points.map(
    (point) =>
      new ol.Feature({
        geometry: new ol.geom.Point(point.coords),
        text: point.text,
        iconProps: markersIconCallback && markersIconCallback(point),
      })
  )
}
