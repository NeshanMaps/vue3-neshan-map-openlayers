import { Feature } from "openlayers"
import { toRaw } from "vue"
import {
  CreateMarkers,
  MarkersMixinProps,
  VectorLayerRef,
} from "../components/Map.model"
import { createClusterSource, createMarkers } from "../utils"

export function markersMixin({ map }: MarkersMixinProps) {
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
   * @param options.showPopup - If you want show the text as popup
   * @returns style and layer.
   */
  const addMarkers: CreateMarkers = (points, options) => {
    const { layer, style } = createMarkers(points, options)
    map.value?.addLayer(layer)
    return { layer, style }
  }

  /**
   * Removes markers from map
   */
  const clearMarkerLayer = (layer: VectorLayerRef) => {
    if (!layer.value) return
    map.value?.removeLayer(layer.value)
    layer.value = undefined
  }

  /**
   * Toggles cluster source to deactivate or apply clustering
   * @param layer
   * @param deactivate - whether to deactivate clustering or apply it.
   */
  const toggleClusterSource = (layer: VectorLayerRef, deactivate: boolean) => {
    if (!layer.value) return
    const rawLayer = toRaw(layer.value)
    const clusterFeatures = rawLayer.getSource().getFeatures() || []
    const features = clusterFeatures.reduce((result: Feature[], cf) => {
      const features: Feature[] = cf.get("features")
      return [...result, ...features]
    }, [])
    const newDistance = deactivate ? 0 : 30
    const newSource = createClusterSource(features, {
      distance: newDistance,
      minDistance: newDistance,
    })
    layer.value.setSource(newSource)
  }

  return {
    addMarkers,
    clearMarkerLayer,
    toggleClusterSource,
  }
}
