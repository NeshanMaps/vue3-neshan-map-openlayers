<template>
  <!-- <img :src="require('@/assets/search-marker.png')" /> -->
  <div
    ref="mapContainer"
    class="map pos-relative"
    :class="{
      small: store.getters.screen.small,
    }"
  >
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
        :results="store.state.searchResults"
        @search="handleSearch"
        @result-click="handleResultClick"
        @result-hover="handleResultHover"
      />
    </slot>
  </div>
  <MobileDetailsSection
    v-if="store.getters.screen.small"
    v-show="store.state.mobileDrawerShowDetails"
  ></MobileDetailsSection>
  <div class="map-popup-container" ref="popupContainer"></div>
  <div class="map-popup-container" ref="persistantContainer"></div>
</template>
<script lang="ts">
declare const ol: any
import { tiles, urls } from "../parameters"
import { sanitizeLocation, getLocation } from "../utils"
import { eventsMixin } from "../mixins"
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
  reactive,
} from "vue"
import {
  CoordsObj,
  MapType,
  ResultHoverCallback,
  ResultClickCallback,
  MarkersIconCallback,
  MarkerHoverCallback,
  OlMap,
  DivElementRef,
  HandleSearchProps,
} from "./Map.model"
import { Coordinate } from "openlayers"
import { SearchOptions } from "../store/markers/markers.model"
export default {
  name: "NeshanMap",
}
</script>
<script setup lang="ts">
import Settings from "./settings/SettingsComp.vue"
import Drawer from "./drawer/DrawerComp.vue"
import MobileDetailsSection from "./MobileDetailsSection.vue"

const props = defineProps({
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

store.setApi(createApi(props.serviceKey))
/**
 * Sets the given token for api
 * @param token
 */
const setToken = (token: string) => {
  store.setApi(createApi(token))
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

const sanitizedCenter = ref<Coordinate | undefined>(
  sanitizeLocation(props.center)
)
const mapType = ref(props.defaultType)
const reactiveTiles = reactive(
  tiles.filter((tile) => props.mapTypes.includes(tile.title))
)
const popupContainer: DivElementRef = ref()
const persistantContainer: DivElementRef = ref()

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
  store.state.map?.switchPoiLayer(value)
}
/**
 * Switches traffic layer
 * @param value - Whether it should be on or off
 */
const toggleTraffic = (value: boolean) => {
  store.state.map?.switchTrafficLayer(value)
}

/**
 * Setups Map, adds serviceToken to api
 */
onMounted(() => {
  const scriptTag = importMap(urls.map)
  scriptTag.onload = () => {
    startMap()
    setupMapEvents()
    store.actions.dimensions.updateBreakpoints()
    store.actions.dimensions.updateMapDimensions(mapContainer)
  }
})
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

const mapContainer = ref<HTMLDivElement>()
/**
 * Starts the map and adds it to element with id='map'
 * Gets the mapKey, zoom, traffic and poi from props.
 * Gets the center from either sanitizedCenter variable or gets it from divice location
 * or Neshan building location.
 */
const startMap = async () => {
  if (!mapContainer.value) return
  const coords = sanitizedCenter.value || (await getLocation())
  const newMap: OlMap = new ol.Map({
    target: mapContainer.value,
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
  store.setMap(newMap)
  // Currently there is a problem with assigning different map type on initilization
  changeMapType(mapType.value)
  shakeMap()
}
/**
 * Changes Map type
 * @param type - Exact name of a given map name
 */
const changeMapType = (type: MapType) => {
  store.state.map?.setMapType(type)
  mapType.value = type
}
/**
 * Updates map frame so the offset problem is no more.
 */
const shakeMap = () => {
  setTimeout(() => store.state.map?.updateSize(), 300)
}

const eventsEmits = defineEmits(["on-zoom", "on-click"])
const { setupMapEvents, handleResultHover, handleResultClick, zoom } =
  eventsMixin({
    emits: eventsEmits,
    resultHoverCallback: props.resultHoverCallback,
    resultClickCallback: props.resultClickCallback,
    markerHoverCallback: props.markerHoverCallback,
    zoomOnMarkerClick: props.zoomOnMarkerClick,
    zoomOnResultClick: props.zoomOnResultClick,
    popupOnMarkerHover: props.popupOnMarkerHover,
    popupOnResultHover: props.popupOnResultHover,
    mapContainer,
    popupContainer,
    persistantContainer,
  })

/**
 * Changes cluster source to marker source on cluster threshold passing and vice versa
 */
watch(zoom, (nv, ov) => {
  if (nv >= props.clusterThreshold && ov < props.clusterThreshold) {
    store.actions.markers.toggleClusterSource(store.state.searchMarkers, true)
  } else if (nv < props.clusterThreshold && ov >= props.clusterThreshold) {
    store.actions.markers.toggleClusterSource(store.state.searchMarkers, false)
  }
})

const handleSearch = ({ term = "", coords }: HandleSearchProps) => {
  const reliableCoords =
    coords || store.state.mainMarkerCoords || sanitizedCenter.value
  if (!reliableCoords || !store.state.api) return
  const options: SearchOptions = {
    cluster: props.cluster,
    clusterThreshold: props.clusterThreshold,
    markersIconCallback: props.markersIconCallback,
  }
  store.actions.markers.search({ term, coords: reliableCoords }, options)
}

/**
 * Makes it possible to have access to search function from outside of the component
 */
defineExpose({
  search: handleSearch,
})
</script>

<style lang="scss" scoped>
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
  font-size: var(--text-sm);
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

.small .map-popup-container {
  font-size: var(--text-xs);
}
</style>

<style lang="scss">
.ol-overlay-container {
  pointer-events: none;
}
</style>
