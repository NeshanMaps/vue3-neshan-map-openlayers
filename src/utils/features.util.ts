declare const ol: any
import {
  CreateIconProps,
  CreateLayerProps,
  CreateMapPointsOptions,
  CreateMarkers,
  CreateMarkersOptions,
  CreateMarkersPoints,
  CreateMarkersPointsItem,
  CreateRawStyleProps,
  CreateStyleProps,
  MarkersIconCallback,
  Ol,
  Source,
  Style,
  Text,
  VectorLayer,
} from "../components/Map.model"
import { markerUrls } from "@/parameters"
import { PrimarySearchItem } from "../store/markers/markers.model"
import { Coordinate, Feature, geom, Extent } from "openlayers"
import { transformCoords } from "./location.util"

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
export const createMarkers: CreateMarkers = (points, options) => {
  const [{ iconScale } = {} as CreateMarkersPointsItem] = points
  const features = createFeaturesFromPoints(
    points,
    options?.markersIconCallback,
    {
      isCluster: options?.cluster,
      ...options?.props,
    }
  )
  let layer: VectorLayer
  let _style: Style | undefined
  if (options?.cluster) {
    layer = createClusterLayer(features, options)
  } else {
    const { styleFunc, style } = createStyle({
      hidePopup: options?.hidePopup,
      iconScale,
      anchor: options?.anchor,
    })
    _style = style
    const source = createSource(features)
    layer = createLayer({ style: styleFunc, source })
  }
  return { layer, style: _style }
}

export const createText = (): Text => {
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
  })
}

export const createIcon = ({
  iconScale = 0.24,
  src = markerUrls.main,
  anchor = [0.5, 0.5],
}: CreateIconProps = {}): Ol.style.Image => {
  return new ol.style.Icon({
    src,
    scale: iconScale,
    anchor,
  })
}

export const createRawStyle = ({ image, text }: CreateRawStyleProps): Style => {
  return new ol.style.Style({
    image: image,
    text: text,
  })
}

export const createStyle = ({
  hidePopup = false,
  iconScale,
  anchor,
}: CreateStyleProps) => {
  const _style = createRawStyle({})
  const styleFunc = styleFuncGen(_style, {
    hidePopup,
    iconScale,
    anchor,
  })
  return { style: _style, styleFunc }
}

/**
 * Creates ol source from given features
 * @param features
 * @returns ol source
 */
const createSource = (features: Feature[]): Source => {
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
  target = "points",
  style,
  source,
}: CreateLayerProps): VectorLayer => {
  return new ol.layer.Vector({
    target,
    source,
    style,
  })
}

/**
 * Converts points given from neshan server to openlayers-friendly points
 * checks if icon type has a respective icon url
 * @param items - Items from search result
 * @param options.color - color of the markers
 * @param options.iconScale - scale of the markers
 */
export const createMapPoints = async (
  items: PrimarySearchItem[],
  options?: CreateMapPointsOptions
) => {
  return await Promise.all(
    items.map(async (item) => {
      const point: Coordinate = [item.location.x, item.location.y]
      const mapPoint = transformCoords(point, "EPSG:4326", "EPSG:3857")
      const iconImageExists = await checkIconImageExistance(item.type)
      const iconUrl = (iconImageExists.exists)
        ? iconImageExists.searchUrl
        : markerUrls.search + "general.png"
      return {
        coords: mapPoint,
        text: item.title,
        iconUrl,
        iconScale: options?.iconScale || 0.25,
        originalItem: item,
      }
    })
  )
}
/**
 * Checks if icon url exists or not
 * @param iconName
 * @returns
 */
export const checkIconImageExistance = async (iconName: string) => {
  const searchUrl = markerUrls.search + iconName + ".png"
  return { searchUrl, exists: await urlExists(searchUrl) }
}

const urlExists = (url: string) => {
  return new Promise((resolve) => {
    fetch(url, { method: "head" })
      .then((status) => resolve(status.ok))
      .catch(() => resolve(false))
  })
}

/**
 * Creates an style function to dynamically change popup text and marker icons
 * @param style - The static raw style
 * @param options.hidePopup - Will not use popups and just hard text
 * @returns
 */
const styleFuncGen = (
  style: Style,
  { hidePopup = false, iconScale, anchor }: CreateStyleProps
): Ol.StyleFunction => {
  return (feature) => {
    if (hidePopup) {
      style.getText().setText(feature.get("text"))
    }
    const iconProps = feature.get("iconProps")
    if (iconProps) {
      style.setImage(createIcon(iconProps))
    } else {
      style.setImage(
        createIcon({ src: feature.get("iconUrl"), iconScale, anchor })
      )
    }
    return style
  }
}

export const createClusterSource = (
  features: Feature[],
  { minDistance = 30, distance = 30 } = {}
): Source => {
  return new ol.source.Cluster({
    distance,
    minDistance,
    source: createSource(features),
  })
}

const createClusterText = (size: number) => {
  return new ol.style.Text({
    text: size.toString(),
    font: "bold 15px serif",
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
 * @param hidePopup - whether it should show a popup on hover or is a static text
 * @returns
 */
const createClusterStyleFunc = (hidePopup?: boolean) => {
  const styleCache: { [s: string]: Style | Style[] | null } = {}
  return (clusterFeature: Feature) => {
    const innerFeatures: Feature[] = clusterFeature.get("features")
    if (!hidePopup) {
      clusterFeature.set(
        "text",
        innerFeatures.map((feat: Feature) => feat.get("text"))
      )
    }
    clusterFeature.set("isCluster", innerFeatures[0].get("isCluster"))
    const size = innerFeatures.length
    let style = styleCache[size]
    if (!style) {
      if (size !== 1) {
        style = createClusterStyle(size)
        styleCache[size] = style
      } else {
        const iconUrl: string = innerFeatures[0].get("iconUrl")
        const { styleFunc } = createStyle({ iconUrl, hidePopup })
        style = styleFunc(innerFeatures[0], 100) // 100 is to shut its type up
      }
    }
    return style
  }
}

const createClusterLayer = (
  features: Feature[],
  options?: CreateMarkersOptions
) => {
  const cluster_layer: VectorLayer = new ol.layer.Vector({
    source: createClusterSource(features, {
      minDistance: options?.clusterDistance,
      distance: options?.clusterDistance,
    }),
    style: createClusterStyleFunc(options?.hidePopup),
  })
  return cluster_layer
}

/**
 * Gets the sufficent extent to zoom on a cluster or marker
 * @param cluster
 * @returns extent
 */
export const getClusterExtent = (cluster: Feature) => {
  const originalFeatures = cluster.get("features")
  const extent: Extent = new ol.extent.createEmpty()
  originalFeatures.forEach((f: Feature) => {
    ol.extent.extend(extent, getFeatureExtent(f))
  })
  return extent
}

/**
 * Gets the extent of a feature
 * @param feature
 * @returns extent
 */
export const getFeatureExtent = (feature: Feature) => {
  return feature.getGeometry().getExtent()
}

/**
 * Takes a feature and returns text value from its properties
 * and ol coords on map
 * @param feature
 * @returns
 */
export const getCoordsAndTextFromFeature = (feature: Feature) => {
  const featCoords = getCoordsFromFeature(feature)
  const featText: string[] | string = feature.getProperties().text
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
export const getCoordsFromFeature = (feature: Feature) => {
  const geometry: geom.Point = <geom.Point>feature.getGeometry()
  return <Coordinate>geometry.getCoordinates().slice(0, 2) //slice because it return array of 3 args idk why
}

/**
 * Receives an array of points and returns an array of features.
 * @param points - Array of points.
 * @param point.text - If you have a particular text for the point.
 * @param proint.props - Props to set for a feature
 * @param props - Props to set for features
 * @returns array of features.
 */
export const createFeaturesFromPoints = (
  points: CreateMarkersPoints,
  markersIconCallback?: MarkersIconCallback,
  props?: any
): Feature[] => {
  return points.map((point) => {
    const feature: Feature = new ol.Feature({
      geometry: new ol.geom.Point(point.coords) as geom.Point,
      text: point.text,
      iconUrl: point.iconUrl,
      iconProps: markersIconCallback && markersIconCallback(point),
      ...point.props,
      ...props,
    })

    feature.setId(props.id || point.coords.join("-"))
    return feature
  })
}
