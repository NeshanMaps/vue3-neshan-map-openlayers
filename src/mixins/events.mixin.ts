import {
  EventsMixinProps,
} from "../components/Map.model"
import { store } from "@/store"
import { SearchItem } from "../store/markers/markers.model"
import { Feature, MapBrowserEvent } from "openlayers"
import { ref } from "vue"
import {
  getCoordsAndTextFromFeature,
  getClusterExtent,
} from "../utils"

export function eventsMixin({
  emits,
  resultHoverCallback,
  resultClickCallback,
  markerHoverCallback,
  zoomOnMarkerClick,
  zoomOnResultClick,
  popupOnMarkerHover,
  popupOnResultHover,
  mapContainer,
  popupContainer,
  persistantContainer,
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
    store.state.map?.on("click", (event) => {
      handleClickEvent(<MapBrowserEvent>event)
    })
  }

  const zoom = ref(0)
  /**
   * Emits the new zoom value
   */
  const setupZoomEvent = () => {
    if (!store.state.map) return
    zoom.value = store.state.map.getView().getZoom()
    store.state.map.on("moveend", () => {
      if (!store.state.map) return
      const newZoom = store.state.map.getView().getZoom()
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
    store.actions.overlays.setupOverlays({
      popupContainer,
      persistantContainer,
    })
    store.state.map?.on("pointermove", function (evt) {
      const hoveredFeature = store.actions.markers.getFeatureFromEvent(
        <MapBrowserEvent>evt
      )
      if (hoveredFeature) {
        const isMainMarker: boolean = hoveredFeature.getProperties().mainMarker
        const innerFeatures: Feature[] | undefined =
          hoveredFeature.get("features")
        const { featCoords, featText } =
          getCoordsAndTextFromFeature(hoveredFeature)
        if (!innerFeatures || innerFeatures.length === 1) {
          if (popupOnMarkerHover) {
            store.actions.overlays.changeOverlayStats({
              text: Array.isArray(featText) ? featText[0] : featText,
              coords: featCoords,
              offset: isMainMarker ? [0, -60] : [0, -40],
            })
          }
          return
        }
        if (markerHoverCallback) {
          markerHoverCallback({
            changeOverlayStats: store.actions.overlays.changeOverlayStats,
            map: store.state.map,
            feature: hoveredFeature,
          })
        }
      }
      store.actions.overlays.changeOverlayStats()
    })
  }

  const setupResizeEvents = () => {
    window.addEventListener("resize", () =>
      store.actions.dimensions.updateMapDimensions(mapContainer)
    )
    window.addEventListener(
      "resize",
      store.actions.dimensions.updateBreakpoints
    )
  }

  /**
   * After clicking on map, if there is no feature in there,
   * sets a marker on that coords.
   * Sends a request to api.reverse and labels the marker
   * otherwise it zooms and expands on that feature
   * In both cases emits an event named 'on-click' afterwards.
   * @param event - Map click event.
   */
  const handleClickEvent = async (event: MapBrowserEvent) => {
    let emittingMarker
    let emittingData
    let emittingStdPoint
    const selectedFeature = store.actions.markers.getFeatureFromEvent(event)
    const isMainMarker: boolean = selectedFeature?.getProperties().mainMarker
    if (!isMainMarker && store.state.mainMarker)
      store.state.map?.removeLayer(store.state.mainMarker)
    store.actions.overlays.changeOverlayStats(undefined, "persistant")
    if (zoomOnMarkerClick && selectedFeature) {
      handleFeatureClick(selectedFeature)
    } else {
      if (store.getters.screen.small) store.toggleMobileDrawerShowDetails(true)
      else store.toggleDrawerActivation(true)
      store.toggleReverseLoading(true)
      const result = await store.actions.markers.reverseOnPoint(event.coordinate)
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
      map: store.state.map,
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
      store.actions.markers.zoomToCluster(feature)
    } else {
      store.actions.markers.selectFeauture(feature, { delay: 0 })
    }
  }

  /**
   * Shows a popup on the relating marker
   * whenever mouse overs on its result on result box
   * also can get a callBack from user
   * @param item - Search item
   */
  const handleResultHover = (item: SearchItem) => {
    let foundFeature = store.actions.markers.getClusterByTitle(
      item.title
    ).cluster
    if (!foundFeature)
      foundFeature = store.actions.markers.getMarkerByTitle(item.title)
    if (foundFeature) {
      if (popupOnResultHover) {
        const { featCoords } = getCoordsAndTextFromFeature(foundFeature)
        store.actions.overlays.changeOverlayStats({
          coords: featCoords,
          text: item.title,
        })
      }
      if (resultHoverCallback) {
        resultHoverCallback({ map: store.state.map, feature: foundFeature })
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
    let foundFeature = store.actions.markers.getClusterByTitle(
      item.title
    ).feature
    if (!foundFeature)
      foundFeature = store.actions.markers.getMarkerByTitle(item.title)
    if (foundFeature) {
      store.actions.overlays.changeOverlayStats()
      if (zoomOnResultClick) {
        store.actions.markers.selectFeauture(foundFeature, { text: item.title })
      }
      if (resultClickCallback) {
        resultClickCallback({ map: store.state.map, feature: foundFeature })
      }
    }
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
    zoom,
  }
}
