import {
  CoordsArr,
  EventsMixinProps,
  Extent,
  Ol,
  SearchItem,
  VectorLayer,
  ZoomToExtentOptions,
} from "@/components/Map.model"
import { store } from "@/store"
import { breakpointsSegments, breakpointsSegmentsPixels } from "@/store/state"
import { BreakpointsSegments } from "@/store/state.model"
import { Feature, MapBrowserEvent } from "openlayers"
import { ref } from "vue"
import {
  getCoordsAndTextFromFeature,
  getTitleFromData,
  getClusterExtent,
  transformCoords,
  getFeatureExtent,
} from "../utils"

export function eventsMixin({
  map,
  mainMarker,
  mainMarkerCoords,
  api,
  emits,
  resultHoverCallback,
  resultClickCallback,
  markerHoverCallback,
  zoomOnMarkerClick,
  zoomOnResultClick,
  popupOnMarkerHover,
  popupOnResultHover,
  setupOverlays,
  changeOverlayStats,
  addMarkers,
  mapId,
  findMarkerByTitle,
  findClusterByTitle,
}: EventsMixinProps) {
  /**
   * Sets the required events up for the map.
   */
  const setupMapEvents = () => {
    setupClickEvent()
    setupZoomEvent()
    setupMarkerHoverEvent()
    setupResizeEvents()
  }

  const setupClickEvent = () => {
    map.value?.on("click", (event) => {
      handleClickEvent(<Ol.MapBrowserEvent>event)
    })
  }

  const zoom = ref(0)
  /**
   * Emits the new zoom value
   */
  const setupZoomEvent = () => {
    if (!map.value) return
    zoom.value = map.value.getView().getZoom()
    map.value.on("moveend", () => {
      if (!map.value) return
      const newZoom = map.value.getView().getZoom()
      if (zoom.value != newZoom) {
        emits("on-zoom", newZoom)
        zoom.value = newZoom
      }
    })
  }
  /**
   * Sets up hover event for marker popups
   */
  const setupMarkerHoverEvent = () => {
    setupOverlays()
    map.value?.on("pointermove", function (evt) {
      const hoveredFeature = getFeatureFromEvent(<MapBrowserEvent>evt)
      if (hoveredFeature) {
        const isCluster = hoveredFeature.get("isCluster")
        const { featCoords, featText } =
          getCoordsAndTextFromFeature(hoveredFeature)
        if (isCluster) {
          if (featText && featText.length === 1) {
            if (popupOnMarkerHover) {
              changeOverlayStats({ text: featText[0], coords: featCoords })
            }
            return
          }
        } else {
          if (featText && typeof featText === "string") {
            if (popupOnMarkerHover) {
              changeOverlayStats({ text: featText, coords: featCoords })
            }
            return
          }
        }
        if (markerHoverCallback) {
          markerHoverCallback({
            changeOverlayStats,
            map,
            feature: hoveredFeature,
          })
        }
      }
      changeOverlayStats()
    })
  }

  const setupResizeEvents = () => {
    window.addEventListener("resize", updateMapHeight)
    window.addEventListener("resize", updateBreakpoints)
  }
  /**
   * Updates map height value on window resize
   */
  const updateMapHeight = () => {
    const mapContainer = document.getElementById(mapId)
    if (!mapContainer) return
    store.setMapHeight(mapContainer.clientHeight)
  }
  /**
   * Updates store breakpoints on windows resize
   */
  const updateBreakpoints = () => {
    const width = window.innerWidth
    const keys = <(keyof BreakpointsSegments)[]>Object.keys(breakpointsSegments)
    keys.forEach((brp, i) => {
      if (width >= breakpointsSegmentsPixels[brp]) {
        store.state.breakpoints.lt[brp] = false
        store.state.breakpoints.gt[brp] = true
        const nextBrp = keys[i + 1]
        if (!nextBrp || breakpointsSegmentsPixels[nextBrp] > width) {
          store.state.breakpoints[brp] = true
        } else {
          store.state.breakpoints[brp] = false
        }
      } else if (width < breakpointsSegmentsPixels[brp]) {
        store.state.breakpoints.lt[brp] = true
        store.state.breakpoints.gt[brp] = false
      }
    })
  }

  /**
   * After clicking on map, if there is no feature in there,
   * sets a marker on that coords.
   * Sends a request to api.reverse and labels the marker
   * otherwise it zooms and expands on that feature
   * In both cases emits an event named 'on-click' afterwards.
   * @param event - Map click event.
   */
  const handleClickEvent = async (event: Ol.MapBrowserEvent) => {
    const selectedFeature = getFeatureFromEvent(event)
    if (selectedFeature) {
      const isCluster = selectedFeature.get("isCluster")
      if (zoomOnMarkerClick) {
        isCluster
          ? zoomToCluster(selectedFeature)
          : zoomToMarker(selectedFeature)
      }
      emits("on-click", { event, selectedFeature, map })
    } else {
      if (mainMarker.value) map.value?.removeLayer(mainMarker.value)
      const point: CoordsArr = event.coordinate
      const { marker, stdPoint, data } = await reverseOnPoint(point)
      emits("on-click", { event, marker, stdPoint, data, map })
    }
  }

  /**
   * Places a marker on a point on ol map
   * Sends a reverse request on that position
   * and adds a title based on returned value
   * @param point - OL Coords
   * @returns marker, standard coords of point and api result data
   */
  const reverseOnPoint = async (point: CoordsArr) => {
    try {
      changeOverlayStats(undefined, 'persistant')
      store.toggleDrawerActivation(true)
      store.toggleLoading(true)
      const { layer: marker } = addMarkers([{ coords: point, text: "" }])
      // const { layer: marker, style } = addMarkers([{ coords: point, text: "" }])
      const stdPoint = transformCoords(point)
      mainMarkerCoords.value = stdPoint
      mainMarker.value = marker
      const data = await api.value.REVERSE(...stdPoint)
      store.setSelectedMarkerLocation(data)
      const text = getTitleFromData(data)
      changeOverlayStats({ coords: point, text }, "persistant")
      // style?.getText().setText(text)
      // marker.setStyle(style)
      return { marker, stdPoint, data }
    } catch (error) {
      console.log(error)
      return {}
    } finally {
      store.toggleLoading(false)
    }
  }

  /**
   * Take the cluster and zooms on it
   * @param cluster
   * @param options.duration - Zooming duration
   */
  const zoomToCluster = (cluster: Feature, options?: ZoomToExtentOptions) => {
    const extent = getClusterExtent(cluster)
    zoomToExtent(extent, options)
  }

  /**
   * Take the marker and zooms on it
   * @param marker
   * @param options.duration - Zooming duration
   */
  const zoomToMarker = (marker: Feature, options?: ZoomToExtentOptions) => {
    const extent = getFeatureExtent(marker)
    zoomToExtent(extent, options)
  }
  /**
   * Gets the desired extent and zooms on it
   * @param extent - Extent of the area to zoom on
   * @param options.duration - Zooming duration
   */
  const zoomToExtent = (extent: Extent, options?: ZoomToExtentOptions) => {
    const duration = options?.duration || 500
    map.value?.getView().fit(extent, {
      size: map.value.getSize(),
      duration,
      minResolution: 0.3,
      padding: [50, 400, 50, 50],
    })
  }

  /**
   * Take the layer and zooms on it
   * @param layer
   * @param options.duration - Zooming duration
   */
  const zoomToLayer = (layer: VectorLayer, options?: ZoomToExtentOptions) => {
    const extent: Extent = layer.getSource().getExtent()
    zoomToExtent(extent, options)
  }

  /**
   * Shows a popup on the relating marker
   * whenever mouse overs on its result on result box
   * also can get a callBack from user
   * @param item - Search item
   */
  const handleResultHover = (item: SearchItem) => {
    let foundFeature = findClusterByTitle(item.title)
    if (!foundFeature) foundFeature = findMarkerByTitle(item.title)
    if (foundFeature) {
      if (popupOnResultHover) {
        const { featCoords } = getCoordsAndTextFromFeature(foundFeature)
        changeOverlayStats({ coords: featCoords, text: item.title })
      }
      if (resultHoverCallback) {
        resultHoverCallback({ map: map.value, feature: foundFeature })
      }
    }
  }

  /**
   * Zooms on the relating marker
   * whenever its result on result box
   * gets clicked
   * @param item - Search item
   */
  const handleResultClick = (item: SearchItem) => {
    let foundFeature = findClusterByTitle(item.title)
    if (!foundFeature) foundFeature = findMarkerByTitle(item.title)
    if (foundFeature) {
      if (zoomOnResultClick) {
        const isCluster = foundFeature.get("isCluster")
        isCluster ? zoomToCluster(foundFeature) : zoomToMarker(foundFeature)
      }
      if (resultClickCallback) {
        resultClickCallback({ map: map.value, feature: foundFeature })
      }
    }
  }

  /**
   * Looks for features in current hover or click event of map
   * @param evt - Map hover or click event
   * @returns feature (If found)
   */
  const getFeatureFromEvent = (evt: MapBrowserEvent) => {
    return <Feature | undefined>(
      map.value?.forEachFeatureAtPixel(evt.pixel, (feature) => feature)
    )
  }

  return {
    setupMapEvents,
    setupClickEvent,
    setupZoomEvent,
    setupMarkerHoverEvent,
    handleClickEvent,
    handleResultHover,
    handleResultClick,
    getClusterExtent,
    zoomToExtent,
    zoomToCluster,
    zoomToLayer,
    updateMapHeight,
    zoom,
    updateBreakpoints,
  }
}
