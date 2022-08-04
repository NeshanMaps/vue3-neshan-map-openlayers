<template>
  <!-- <img :src="require('@/assets/search-marker.png')" /> -->
  <div :id="mapId" class="map pos-relative">
    <slot
      v-if="!hideSettings"
      name="settings"
      :tiles="reactiveTiles"
      :mapType="mapType"
      :poi="poiLayer"
      :traffic="trafficLayer"
    >
      <Settings
        :tiles="reactiveTiles"
        :mapType="mapType"
        @update:map-type="changeMapType($event)"
        :settingsBoxClass="settingsBoxClass"
        v-model:traffic="trafficLayer"
        v-model:poi="poiLayer"
      />
    </slot>
    <slot v-if="!hideSearchContainer" name="search-container">
      <Drawer
        :results="searchResults"
        @search="search"
        @result-click="handleResultClick"
        @result-hover="handleResultHover"
      />
    </slot>
  </div>
  <MobileDetailsSection></MobileDetailsSection>
  <div class="map-popup-container" ref="popupContainer"></div>
  <div class="map-popup-container" ref="persistantContainer"></div>
</template>
<script lang="ts">
declare const ol: any
import { tiles, urls } from "../parameters"
import { sanitizeLocation, getLocation, createMapPoints } from "../utils"
import { eventsMixin, overlayMixin, markersMixin } from "../mixins"
import { createApi } from "../apis"
import { store } from "../store"
import {
  defineProps,
  onMounted,
  PropType,
  ref,
  watch,
  defineExpose,
  defineEmits,
} from "vue"
import {
  CoordsObj,
  Api,
  CoordsArr,
  SearchProps,
  MapType,
  SearchItem,
  ResultHoverCallback,
  ResultClickCallback,
  MarkersIconCallback,
  MarkerHoverCallback,
  OlMap,
  VectorLayer,
} from "./Map.model"
export default {
  name: "NeshanMap",
}
</script>
<script setup lang="ts">
import Settings from "./settings/index.vue"
import Drawer from "./drawer/Drawer.vue"
import MobileDetailsSection from "./MobileDetailsSection.vue"

const props = defineProps({
  mapId: {
    type: String,
    default: "map",
  },
  mapKey: {
    type: String,
    required: true,
  },
  serviceKey: {
    type: String,
    default: "",
  },
  center: {
    type: Object as PropType<CoordsObj>,
    default: null,
  },
  zoom: {
    type: Number,
    default: 12,
  },
  poi: Boolean,
  traffic: Boolean,
  defaultType: {
    type: String as PropType<MapType>,
    default: "neshan",
  },
  mapTypes: {
    type: Array as PropType<MapType[]>,
    default: tiles.map((tile) => tile.title),
  },
  settingsBoxClass: Array,
  settingsBoxStyle: Object,
  hideSettings: Boolean,
  typesClass: Array,
  hideSearchBox: Boolean,
  hideSearchContainer: Boolean,
  hideResultBox: Boolean,
  resultHoverCallback: Function as PropType<ResultHoverCallback>,
  resultClickCallback: Function as PropType<ResultClickCallback>,
  markersIconCallback: Function as PropType<MarkersIconCallback>,
  markerHoverCallback: Function as PropType<MarkerHoverCallback>,
  popupOnMarkerHover: {
    type: Boolean,
    default: true,
  },
  popupOnResultHover: {
    type: Boolean,
    default: true,
  },
  zoomOnMarkerClick: {
    type: Boolean,
    default: true,
  },
  zoomOnResultClick: {
    type: Boolean,
    default: true,
  },
  cluster: {
    type: Boolean,
    default: true,
  },
  clusterThreshold: {
    type: Number,
    default: 18,
  },
})

const api = ref<Api>(createApi(props.serviceKey))
/**
 * Sets the given token for api
 * @param token
 */
const setToken = (token: string) => {
  api.value = createApi(token)
}
/**
 * Whenever service token changes,
 * applies it to api
 */
watch(
  () => props.serviceKey,
  (nv) => {
    setToken(nv)
  }
)

const sanitizedCenter = ref<CoordsArr | undefined>(
  sanitizeLocation(props.center)
)
const map = ref<OlMap>()
const mainMarker = ref<VectorLayer>()
const mainMarkerCoords = ref<CoordsArr>()
const searchMarkers = ref<VectorLayer>()
const mapType = ref(props.defaultType)
const reactiveTiles = ref(
  tiles.filter((tile) => props.mapTypes.includes(tile.title))
)
const popupContainer = ref<HTMLElement | null>(null)
const persistantContainer = ref<HTMLElement | null>(null)

const trafficLayer = ref(props.traffic)
const poiLayer = ref(props.poi)
watch(
  () => props.traffic,
  (nv) => {
    trafficLayer.value = nv
  }
)
watch(
  () => props.poi,
  (nv) => {
    poiLayer.value = nv
  }
)
watch(trafficLayer, (nv) => {
  toggleTraffic(nv)
})
watch(poiLayer, (nv) => {
  togglePoi(nv)
})
/**
 * Switches poi layer
 * @param value - Whether it should be on or off
 */
const togglePoi = (value: boolean) => {
  map.value?.switchPoiLayer(value)
}
/**
 * Switches traffic layer
 * @param value - Whether it should be on or off
 */
const toggleTraffic = (value: boolean) => {
  map.value?.switchTrafficLayer(value)
}

/**
 * Adds the map from given url to given script
 * @param url - Url of map or another script
 * @param tagName - Name of the expected tag
 * @returns Created tag
 */
const importMap = (url: string, tagName = "my-openlayer") => {
  const foundDoc = document.getElementById(tagName)
  if (foundDoc) return foundDoc // was already loaded
  const scriptTag = document.createElement("script")
  scriptTag.src = url
  scriptTag.id = tagName
  document.getElementsByTagName("head")[0].appendChild(scriptTag)
  return scriptTag
}

/**
 * Starts the map and adds it to element with id='map'
 * Gets the mapKey, zoom, traffic and poi from props.
 * Gets the center from either sanitizedCenter variable or gets it from divice location
 * or Neshan building location.
 */
const startMap = async () => {
  const coords = sanitizedCenter.value || (await getLocation())
  const newMap = new ol.Map({
    target: props.mapId,
    key: props.mapKey,
    // mapType: 'standard-night',
    poi: poiLayer.value,
    traffic: trafficLayer.value,
    view: new ol.View({
      center: ol.proj.fromLonLat(coords),
      zoom: props.zoom,
      smoothExtentConstraint: true,
      // projection: 'EPSG:4326' //Default was EPSG:3857
    }),
  })
  map.value = newMap
  // Currently there is a problem with assigning different map type on initilization
  changeMapType(mapType.value)
  shakeMap()
}
/**
 * Changes Map type
 * @param type - Exact name of a given map name
 */
const changeMapType = (type: MapType) => {
  map.value?.setMapType(type)
  mapType.value = type
}
/**
 * Updates map frame so the offset problem is no more.
 */
const shakeMap = () => {
  setTimeout(() => map.value?.updateSize(), 300)
}

const {
  addMarkers,
  clearMarkerLayer,
  toggleClusterSource,
  findMarkerByTitle,
  findClusterByTitle,
} = markersMixin({
  map,
  searchMarkers,
})
const searchResults = ref<SearchItem[]>([])
/**
 * Does a neshan search based on given parameters
 * @param searchParams.text - Part of or whole name of the place.
 * @param searchParams.coords - Coordinates you want to search around.
 */
const search = async ({ term = "", coords }: SearchProps) => {
  try {
    store.toggleSearchLoading(true)
    const reliableCoords =
      coords || mainMarkerCoords.value || sanitizedCenter.value
    if (!reliableCoords) return
    const result = await api.value.SEARCH(term, reliableCoords)
    store.toggleDrawerShowDetails(false)
    clearMarkerLayer(searchMarkers)
    searchResults.value = result.items
    const points = createMapPoints(result.items)
    const { layer } = addMarkers(points, {
      markersIconCallback: props.markersIconCallback,
      cluster: props.cluster,
      clusterThreshold: props.clusterThreshold,
    })
    changeOverlayStats(undefined, "persistant")
    searchMarkers.value = layer
    // Apparently it takse some async time to cluster the source
    setTimeout(() => {
      const features = layer.getSource().getFeatures()
      //To fix a problem with zooming on single feature layers extent
      if (features.length === 1) {
        zoomToCluster(features[0], { duration: 1500 })
      } else {
        zoomToLayer(layer, { duration: 1500 })
      }
    }, 200)
  } catch (error) {
    console.log(error)
  } finally {
    store.toggleSearchLoading(false)
  }
}

const eventsEmits = defineEmits(["on-zoom", "on-click"])
const { setupOverlays, changeOverlayStats } = overlayMixin({
  map,
  popupContainer,
  persistantContainer,
})
const {
  setupMapEvents,
  handleResultHover,
  handleResultClick,
  zoomToLayer,
  zoomToCluster,
  updateMapDimensions,
  updateBreakpoints,
  zoom,
} = eventsMixin({
  map,
  mainMarker,
  mainMarkerCoords,
  api,
  emits: eventsEmits,
  resultHoverCallback: props.resultHoverCallback,
  resultClickCallback: props.resultClickCallback,
  markerHoverCallback: props.markerHoverCallback,
  zoomOnMarkerClick: props.zoomOnMarkerClick,
  zoomOnResultClick: props.zoomOnResultClick,
  popupOnMarkerHover: props.popupOnMarkerHover,
  popupOnResultHover: props.popupOnResultHover,
  addMarkers,
  setupOverlays,
  changeOverlayStats,
  mapId: props.mapId,
  findMarkerByTitle,
  findClusterByTitle,
})
/**
 * Changes cluster source to marker source on cluster threshold passing and vice versa
 */
watch(zoom, (nv, ov) => {
  if (nv >= props.clusterThreshold && ov < props.clusterThreshold) {
    toggleClusterSource(searchMarkers, true)
  } else if (nv < props.clusterThreshold && ov >= props.clusterThreshold) {
    toggleClusterSource(searchMarkers, false)
  }
})

/**
 * Setups Map, adds serviceToken to api
 */
onMounted(() => {
  const scriptTag = importMap(urls.map)
  scriptTag.onload = () => {
    startMap()
    setupMapEvents()
    updateBreakpoints()
    updateMapDimensions()
  }
})

/**
 * Makes it possible to have access to search function from outside of the component
 */
defineExpose({
  search,
})
</script>

<style lang="scss">
@import url("https://static.neshan.org/sdk/openlayers/5.3.0/ol.css");
@import url("@/assets/main.scss");

.map {
  height: 100%;
  direction: rtl;
}

.map-popup-container {
  background-color: white;
  -webkit-box-shadow: 0px 0px 4px 2px #0000008d;
  box-shadow: 0px 0px 4px 2px #00000046;
  border-radius: 5px;
  padding: 2px 5px;
  &::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: rgb(255, 255, 255) transparent transparent transparent;
  }
}

.ol-overlay-container {
  pointer-events: none;
}
</style>
