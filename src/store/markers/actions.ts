import { VectorLayer } from "../../components/Map.model"
import {
  AddMarkers,
  GetClusterByCoords,
  GetMarkerByCoords,
  GetSearchResultByFeature,
  ReverseOnPointOptions,
  ReverseResult,
  SearchItem,
  SearchOptions,
  SearchProps,
  SelectFeautureOptions,
  ZoomToExtentOptions,
} from "./markers.model"
import {
  createClusterSource,
  createMapPoints,
  createMarkers,
  getClusterExtent,
  getCoordsFromFeature,
  getFeatureExtent,
  getTitleFromData,
  transformCoords,
} from "@/utils"
import { Coordinate, Extent, Feature, MapBrowserEvent } from "openlayers"
import { markersOffset, markerUrls, zoomConstants } from "@/parameters"
import { Context } from "../store.model"

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
 * @param point.props - props to set for point feature
 * @param options.cluster - If these markers need to be clusterd on given zoom number
 * @param options.clusterThreshold - Zoom number that markers should be clusterd on zoom condition above that given zoom
 * @param options.showPopup - If you want show the text as popup
 * @param options.props - Props to set for all features
 * @returns style and layer.
 */
const addMarkers: AddMarkers = ({ state }, points, options) => {
  const { layer, style } = createMarkers(points, options)
  state.map?.addLayer(layer)
  return { layer, style }
}

/**
 * Toggles cluster source to deactivate or apply clustering (The layer will remain a cluster layer)
 * @param layer
 * @param deactivate - whether to deactivate clustering or apply it.
 */
const toggleClusterSource = (
  context: Context,
  layer: VectorLayer,
  deactivate: boolean
) => {
  if (!layer) return
  const clusterFeatures = layer.getSource().getFeatures() || []
  if (!clusterFeatures.some((cf) => cf.get("isCluster"))) return
  const features = clusterFeatures.reduce((result: Feature[], cf) => {
    const features: Feature[] = cf.get("features")
    return [...result, ...features]
  }, [])
  const newDistance = deactivate ? 0 : 30
  const newSource = createClusterSource(features, {
    distance: newDistance,
    minDistance: newDistance,
  })
  layer.setSource(newSource)
}

/**
 * Takes the title of a marker and returns the found cluster and its surrounding cluster
 * @param coords - Coorinates of wanted feature
 * @returns The found feature and its cluster
 */
const getClusterByCoords: GetClusterByCoords = (context, coords) => {
  const clusters = context.state.searchMarkers?.getSource().getFeatures()
  let foundFeature: Feature | undefined
  const cluster = clusters?.find((cluster) => {
    const feature = getMarkerInClusterByCoords(context, cluster, coords)
    if (feature) {
      foundFeature = feature
    }
    return feature
  })
  return {
    feature: foundFeature,
    cluster,
  }
}

/**
 * Take a cluster and a title and returns the feature inside the cluster by its title
 * @param cluster - The cluster we are looking for feature in it
 * @param coords - Coordinate of wanted feature
 * @returns The found feature
 */
const getMarkerInClusterByCoords = (
  context: Context,
  cluster: Feature,
  coords: Coordinate
) => {
  const features: Feature[] | undefined = cluster.get("features")
  return features?.find((feat) => feat.getId() === coords.join("-"))
}

/**
 * Takes the title of a marker and returns it.
 * @param coords - Coordinate of wanted feature
 * @returns The found marker
 */
const getMarkerByCoords: GetMarkerByCoords = ({ state }, coords) => {
  return state.searchMarkers?.getSource().getFeatureById(coords.join("-"))
}

/**
 * Takes a feature and returns its relating search item
 * @param feature
 * @returns Search Item
 */
const getSearchResultByFeature: GetSearchResultByFeature = (
  { state },
  feature
) => {
  const title = feature.get("text")
  return state.searchResults.find(
    (si) => si.title === (Array.isArray(title) ? title[0] : title)
  )
}

/**
 * Take the layer and zooms on its features
 * @param layer
 * @param options.duration - Zooming duration
 */
const zoomToLayer = (
  context: Context,
  layer: VectorLayer,
  options?: ZoomToExtentOptions
) => {
  const extent: Extent = layer.getSource().getExtent()
  zoomToExtent(context, extent, options)
}

/**
 * Gets the desired extent and zooms on it
 * @param extent - Extent of the area to zoom on
 * @param options.duration - Zooming duration
 */
const zoomToExtent = (
  { state, getters }: Context,
  extent: Extent,
  options?: ZoomToExtentOptions
) => {
  const duration = options?.duration || 500
  state.map?.getView().fit(extent, {
    size: state.map.getSize(),
    duration,
    maxZoom:
      state.zoom > zoomConstants.maxZoom ? state.zoom : zoomConstants.maxZoom,
    padding: [15, getters.touchPlatform ? 15 : 300, 15, 15],
  })
}

/**
 * Takes the marker and zooms on it
 * @param marker
 * @param options.duration - Zooming duration
 */
const zoomToMarker = (
  context: Context,
  marker: Feature,
  options?: ZoomToExtentOptions
) => {
  const extent = getFeatureExtent(marker)
  zoomToExtent(context, extent, options)
}

/**
 * Takes the cluster and zooms on it
 * @param cluster
 * @param options.duration - Zooming duration
 */
const zoomToCluster = (
  context: Context,
  cluster: Feature,
  options?: ZoomToExtentOptions
) => {
  const extent = getClusterExtent(cluster)
  zoomToExtent(context, extent, options)
}

/**
 * Takes the coordinates and zooms on it
 * @param coords
 * @param options.duration - Zooming duration
 */
const zoomToCoords = (
  context: Context,
  coords: Coordinate,
  options?: ZoomToExtentOptions
) => {
  const extent: Extent = [...coords, ...coords]
  zoomToExtent(context, extent, options)
}

/**
 * Zooms on given feature and shows its details on detail section
 * Adds a persistent overlay on it
 * @param feature
 * @param options
 */
const selectFeauture = (
  context: Context,
  feature: Feature | SearchItem | ReverseResult,
  options?: SelectFeautureOptions
) => {
  let isMainMarker = false
  let coords = <Coordinate>options?.coords
  let text = <string>options?.text
  if ("mapCoords" in feature) {
    coords ||= feature.mapCoords
    zoomToCoords(context, coords)
    if ("title" in feature) {
      text = feature.title
    } else {
      isMainMarker = true
      text = getTitleFromData(feature)
    }
  } else {
    zoomToMarker(context, feature)
    coords ||= getCoordsFromFeature(feature)
    isMainMarker = feature?.getProperties().mainMarker
    text ||= feature.getProperties().text
    if (Array.isArray(text)) text = text[0]
  }
  if (options?.delay !== 0) {
    setTimeout(() => {
      context.actions.overlays.changeOverlayStats(
        context,
        {
          coords,
          text,
          offset: isMainMarker ? markersOffset.high : markersOffset.short,
        },
        "persistent"
      )
    }, options?.delay || 500)
  } else {
    context.actions.overlays.changeOverlayStats(
      context,
      {
        coords,
        text,
        offset: isMainMarker ? markersOffset.high : markersOffset.short,
      },
      "persistent"
    )
  }
  const foundResult = isMainMarker
    ? context.state.reverseResult
    : !("mapCoords" in feature)
    ? context.actions.markers.getSearchResultByFeature(context, feature)
    : feature
  if (foundResult) {
    context.state.selectedMarker = foundResult
    context.actions.drawers.toggleResultDrawers(context, true)
  }
}

/**
 * Removes persistent overlay and marker layer from the map.
 * Deactivates drawers and clears selected marker
 */
const deselectAll = (context: Context) => {
  context.actions.overlays.changeOverlayStats(context, undefined, "persistent")
  if (context.state.mainMarker)
    context.state.map?.removeLayer(context.state.mainMarker)
  context.state.selectedMarker = null
  context.actions.drawers.toggleResultDrawers(context, false)
}

/**
 * Looks for features in current hover or click event of map
 * @param evt - Map hover or click event
 * @returns feature (If found)
 */
const getFeatureFromEvent = (context: Context, evt: MapBrowserEvent) => {
  return <Feature | undefined>(
    context.state.map?.forEachFeatureAtPixel(evt.pixel, (feature) => feature)
  )
}
/**
 * Places a marker on a point on ol map
 * Sends a reverse request on that position
 * and adds a title based on returned value
 * @param coords - OL Coords
 * @param options.useMarker - Whether to put marker on locating area or not
 * @returns marker, standard coords of point and api result data
 */
const reverseOnPoint = async (
  context: Context,
  coords: Coordinate,
  { useMarker = true, usePopup = true, customText }: ReverseOnPointOptions = {}
) => {
  try {
    context.state.reverseLoading = true
    const mapCoords = transformCoords(coords, "EPSG:4326", "EPSG:3857")
    if (context.getters.touchPlatform)
      context.state.mobileDrawerShowDetails = true
    else context.state.drawerActivation = true
    let marker: VectorLayer | null = null
    if (useMarker) {
      const { layer } = context.actions.markers.addMarkers(
        context,
        [
          {
            coords: mapCoords,
            text: "",
            iconScale: 0.1,
            iconUrl: markerUrls.main,
          },
        ],
        {
          props: {
            mainMarker: true,
            isCluster: false,
          },
          anchor: [0.5, 1],
        }
      )
      context.state.mainMarkerCoords = coords
      context.state.mainMarker = layer
      marker = layer
    }
    if (!context.state.api) throw "No reverse api"
    const data = await context.state.api.REVERSE(...coords)
    const extendedData = {
      ...data,
      mapCoords: coords,
    }
    context.state.selectedMarker = extendedData
    context.state.reverseResult = extendedData
    context.actions.drawers.toggleResultDrawers(context, true)
    const text = customText || getTitleFromData(extendedData)
    context.state.mainMarker?.getSource().getFeatures()[0].set("text", text)
    if (usePopup) {
      context.actions.overlays.changeOverlayStats(
        context,
        { coords: mapCoords, text, offset: markersOffset.high },
        "persistent"
      )
    }
    return { marker, coords, data }
  } catch (error) {
    console.log(error)
    return {}
  } finally {
    context.state.reverseLoading = false
  }
}

/**
 * Does a neshan search based on given parameters
 * @param searchParams.text - Part of or whole name of the place.
 * @param searchParams.coords - Coordinates you want to search around.
 */
const search = async (
  context: Context,
  { term = "", coords }: SearchProps,
  options?: SearchOptions
) => {
  try {
    context.state.searchLoading = true
    if (!context.state.api) return
    const result = await context.state.api.SEARCH(term, coords)
    context.state.drawerShowDetails = false
    if (context.state.searchMarkers)
      context.state.map?.removeLayer(context.state.searchMarkers)
    const points = await createMapPoints(result.items)
    const resultsWithMapCoords = points.map((point) => ({
      ...point.originalItem,
      iconUrl: point.iconUrl,
      mapCoords: point.coords,
    }))
    context.state.searchResults = resultsWithMapCoords
    const { layer } = context.actions.markers.addMarkers(context, points, {
      markersIconCallback: options?.markersIconCallback,
      cluster: options?.cluster,
      clusterThreshold: options?.clusterThreshold,
    })
    context.actions.overlays.changeOverlayStats(
      context,
      undefined,
      "persistent"
    )
    context.state.searchMarkers = layer
    // Apparently it takse some async time to cluster the source
    setTimeout(() => {
      const features = layer.getSource().getFeatures()
      //To fix a problem with zooming on single feature layers extent
      if (features.length === 1) {
        context.actions.markers.zoomToCluster(context, features[0], {
          duration: 1500,
        })
      } else {
        context.actions.markers.zoomToLayer(context, layer, { duration: 1500 })
      }
    }, 200)
    return {
      markers: layer,
      data: result
    }
  } catch (error) {
    console.log(error)
  } finally {
    context.state.searchLoading = false
  }
}

export const markersActions = {
  addMarkers,
  toggleClusterSource,
  getClusterByCoords,
  getMarkerInClusterByCoords,
  getMarkerByCoords,
  getSearchResultByFeature,
  zoomToLayer,
  zoomToExtent,
  zoomToCoords,
  zoomToMarker,
  zoomToCluster,
  selectFeauture,
  deselectAll,
  getFeatureFromEvent,
  reverseOnPoint,
  search,
}
