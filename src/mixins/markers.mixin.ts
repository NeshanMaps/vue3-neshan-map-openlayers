import {
  CreateMarkersOptions,
  CreateMarkersProps,
  MarkersMixinProps,
} from '../components/Map.model'
import { createMarkers } from '../utils'

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
  const addMarkers = (points: CreateMarkersProps, options?: CreateMarkersOptions) => {
    const { layer, style } = createMarkers(points, options)
    map.value.addLayer(layer)
    return { layer, style }
  }

  /**
   * Removes markers from map
   */
  const clearMarkerLayer = (layer: any) => {
    map.value.removeLayer(layer.value)
    layer.value = null
  }

  return {
    addMarkers,
    clearMarkerLayer,
  }
}
