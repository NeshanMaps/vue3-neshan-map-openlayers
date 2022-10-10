import { EventsMixinProps } from "../components/Map.model"
import { SearchItem } from "../store/markers/markers.model"
import { Feature, MapBrowserEvent } from "openlayers"
import {
  getCoordsAndTextFromFeature,
  getClusterExtent,
  getCoordsFromFeature,
  transformCoords,
} from "../utils"
import { markersOffset } from "@/parameters"

export function eventsMixin({
  emits,
  store,
  markerHoverCallback,
  zoomOnMarkerClick,
  zoomOnResultClick,
  popupOnMarkerHover,
  popupOnResultHover,
  reverseOnClick,
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

  /**
   * Emits the new zoom value
   */
  const setupZoomEvent = () => {
    if (!store.state.map) return
    store.state.zoom = store.state.map.getView().getZoom()
    store.state.map.on("moveend", () => {
      if (!store.state.map) return
      const newZoom = store.state.map.getView().getZoom()
      if (store.state.zoom != newZoom) {
        emits("on-zoom", newZoom)
        store.state.zoom = newZoom
      }
    })
  }
  /**
   * Sets up hover event for marker popups
   */
  const setupMarkerHoverEvent = () => {
    store.actions.overlays.setupOverlays()
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
              offset: isMainMarker ? markersOffset.high : markersOffset.short,
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
      store.actions.dimensions.updateMapDimensions()
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
    const coords = transformCoords(event.coordinate)
    const selectedFeature = store.actions.markers.getFeatureFromEvent(event)
    const isMainMarker: boolean = selectedFeature?.getProperties().mainMarker
    if (!isMainMarker && store.state.mainMarker) {
      store.state.map?.removeLayer(store.state.mainMarker)
    }
    store.actions.overlays.changeOverlayStats(undefined, "persistent")
    if (selectedFeature) {
      if (zoomOnMarkerClick) {
        handleFeatureClick(selectedFeature)
      }
    } else if (reverseOnClick) {
      const result = await store.actions.markers.reverseOnPoint(coords)
      emittingMarker = result.marker
      emittingData = result.data
    }
    emits("on-click", {
      event,
      marker: emittingMarker,
      coords,
      apiData: emittingData,
      map: store.state.map,
      selectedFeature,
    })
  }

  /**
   * Zooms on feature and if its just a marker, shows it on details section
   * @param feature
   */
  const handleFeatureClick = (feature: Feature) => {
    store.actions.overlays.changeOverlayStats()
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
    const clusterResult = store.actions.markers.getClusterByCoords(
      item.mapCoords
    )
    const cluster = clusterResult.cluster
    const feature =
      clusterResult.feature ||
      store.actions.markers.getMarkerByCoords(item.mapCoords)
    if (!feature) return
    const coords = getCoordsFromFeature(cluster || feature)
    if (popupOnResultHover) {
      store.actions.overlays.changeOverlayStats({
        coords,
        text: item.title,
      })
    }
    emits("on-result-hover", { item, cluster, marker: feature })
  }

  /**
   * Zooms on the relating marker
   * and adds its overlay
   * whenever its result on result box
   * gets clicked
   * @param item - Search item
   */
  const handleResultClick = (item: SearchItem) => {
    store.actions.overlays.changeOverlayStats()
    store.state.drawerActivation = false
    if (zoomOnResultClick) {
      store.actions.markers.selectFeauture(item)
    }
    emits("on-result-click", item)
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
  }
}
