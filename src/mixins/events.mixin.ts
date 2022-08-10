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
import { breakpointsSegments, breakpointsSegmentsPixels } from "@/parameters"
import { BreakPoints, BreakpointsSegments } from "@/store/state.model"
import { Feature, MapBrowserEvent } from "openlayers"
import { ref, toRaw } from "vue"
import {
  getCoordsAndTextFromFeature,
  getTitleFromData,
  getClusterExtent,
  transformCoords,
  getFeatureExtent,
  getCoordsFromFeature,
} from "../utils"
import {
  ReverseOnPointOptions,
  SelectFeautureOptions,
} from "./events.mixin.model"

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
  mapContainer,
  getMarkerByTitle,
  getClusterByTitle,
  getSearchResultByFeature,
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
        const innerFeatures: Feature[] | undefined =
          hoveredFeature.get("features")
        const { featCoords, featText } =
          getCoordsAndTextFromFeature(hoveredFeature)
        if (!innerFeatures || innerFeatures.length === 1) {
          if (popupOnMarkerHover) {
            changeOverlayStats({
              text: Array.isArray(featText) ? featText[0] : featText,
              coords: featCoords,
            })
          }
          return
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
    window.addEventListener("resize", updateMapDimensions)
    window.addEventListener("resize", updateBreakpoints)
  }
  /**
   * Updates map height value on window resize
   */
  const updateMapDimensions = () => {
    if (!mapContainer.value) return
    store.setMapDimenstions({
      height: mapContainer.value.clientHeight,
      width: mapContainer.value.clientWidth,
    })
  }
  /**
   * Updates store breakpoints on windows resize
   */
  const updateBreakpoints = () => {
    const width = window.innerWidth
    const keys = <(keyof BreakpointsSegments)[]>Object.keys(breakpointsSegments)
    const newBreakpoints: BreakPoints = JSON.parse(
      JSON.stringify(toRaw(store.state.breakpoints))
    )
    keys.forEach((brp, i) => {
      const nextBrp = keys[i + 1]
      if (width >= breakpointsSegmentsPixels[brp]) {
        newBreakpoints.lt[brp] = false
        if (!nextBrp || width < breakpointsSegmentsPixels[nextBrp]) {
          newBreakpoints[brp] = true
          newBreakpoints.gt[brp] = false
        } else {
          newBreakpoints[brp] = false
          newBreakpoints.gt[brp] = true
        }
      } else if (width < breakpointsSegmentsPixels[brp]) {
        newBreakpoints.lt[brp] = true
        newBreakpoints.gt[brp] = false
      }
    })
    store.setBreakPoints(newBreakpoints)
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
    changeOverlayStats(undefined, "persistant")
    let emittingMarker
    let emittingData
    let emittingStdPoint
    const selectedFeature = getFeatureFromEvent(event)
    if (mainMarker.value) map.value?.removeLayer(mainMarker.value)
    if (zoomOnMarkerClick && selectedFeature) {
      handleFeatureClick(selectedFeature)
    } else {
      if (store.getters.screen.small) store.toggleMobileDrawerShowDetails(true)
      else store.toggleDrawerActivation(true)
      store.toggleReverseLoading(true)
      const result = await reverseOnPoint(event.coordinate)
      emittingMarker = result.marker
      emittingData = result.data
      emittingStdPoint = result.stdPoint
      store.toggleReverseLoading(false)
    }
    emits("on-click", {
      event,
      marker: emittingMarker,
      stdPoint: emittingData,
      data: emittingStdPoint,
      map,
      selectedFeature,
    })
  }

  /**
   * Zooms on feature and if its just a marker, shows it on details section
   * @param feature
   */
  const handleFeatureClick = (feature: Feature) => {
    const features: Feature[] | undefined = feature.get("features")
    if (features && features.length > 1) {
      zoomToCluster(feature)
    } else {
      selectFeauture(feature, { delay: 0 })
    }
  }

  /**
   * Places a marker on a point on ol map
   * Sends a reverse request on that position
   * and adds a title based on returned value
   * @param point - OL Coords
   * @param putMarker - Whether to put marker on locating area
   * @returns marker, standard coords of point and api result data
   */
  const reverseOnPoint = async (
    point: CoordsArr,
    {
      useMarker = true,
      usePopup = true,
      customText,
    }: ReverseOnPointOptions = {}
  ) => {
    try {
      changeOverlayStats(undefined, "persistant")
      const stdPoint = transformCoords(point)
      let marker: VectorLayer | null = null
      if (useMarker) {
        const { layer } = addMarkers([{ coords: point, text: "" }])
        mainMarkerCoords.value = stdPoint
        mainMarker.value = layer
        marker = layer
      }
      const data = await api.value.REVERSE(...stdPoint)
      store.setSelectedMarker(data)
      store.toggleDrawerShowDetails(true)
      if (usePopup) {
        const text = customText || getTitleFromData(data)
        changeOverlayStats({ coords: point, text }, "persistant")
      }
      return { marker, stdPoint, data }
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  /**
   * Takes the cluster and zooms on it
   * @param cluster
   * @param options.duration - Zooming duration
   */
  const zoomToCluster = (cluster: Feature, options?: ZoomToExtentOptions) => {
    const extent = getClusterExtent(cluster)
    zoomToExtent(extent, options)
  }

  /**
   * Takes the marker and zooms on it
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
      padding: [15, store.getters.screen.small ? 15 : 300, 15, 15],
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
   * Zooms on given feature and shows its details on detail section
   * Adds a persistant overlay on it
   * @param feature
   * @param options
   */
  const selectFeauture = (
    feature: Feature,
    options?: SelectFeautureOptions
  ) => {
    zoomToMarker(feature)
    const coords = options?.coords || getCoordsFromFeature(feature)
    let text = options?.text || feature.getProperties().text
    if (Array.isArray(text)) text = text[0]
    if (options?.delay !== 0) {
      setTimeout(() => {
        changeOverlayStats({ coords, text }, "persistant")
      }, options?.delay || 500)
    } else {
      changeOverlayStats({ coords, text }, "persistant")
    }
    const foundResult = getSearchResultByFeature(feature)
    if (foundResult) {
      store.setSelectedMarker(foundResult)
      store.toggleDrawerShowDetails(true)
      if (!store.state.drawerActivation) store.toggleDrawerActivation(true)
    }
  }

  /**
   * Shows a popup on the relating marker
   * whenever mouse overs on its result on result box
   * also can get a callBack from user
   * @param item - Search item
   */
  const handleResultHover = (item: SearchItem) => {
    let foundFeature = getClusterByTitle(item.title).cluster
    if (!foundFeature) foundFeature = getMarkerByTitle(item.title)
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
   * and adds its overlay
   * whenever its result on result box
   * gets clicked
   * @param item - Search item
   */
  const handleResultClick = (item: SearchItem) => {
    let foundFeature = getClusterByTitle(item.title).feature
    if (!foundFeature) foundFeature = getMarkerByTitle(item.title)
    if (foundFeature) {
      changeOverlayStats()
      if (zoomOnResultClick) {
        selectFeauture(foundFeature, { text: item.title })
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
    updateMapDimensions,
    zoom,
    updateBreakpoints,
  }
}
