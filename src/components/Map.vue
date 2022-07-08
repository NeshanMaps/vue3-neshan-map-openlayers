<template>
  <div id="map">
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
      <div id="search-container">
        <slot v-if="!hideSearchBox" name="search-box">
          <SearchBox @submit="search" />
        </slot>
        <slot v-if="!hideResultBox" name="search-box">
          <ResultBox
            :results="searchResults"
            @result-hover="handleResultHover"
            @result-click="handleResultClick"
          />
        </slot>
      </div>
    </slot>
  </div>
  <div id="popup-container"></div>
</template>
<script lang="ts">
declare const ol: any; // eslint-disable-line
import { tiles, urls } from "../parameters";
import {
  sanitizeLocation,
  getLocation,
  eventsFunc,
  markersFunc,
} from "../utils";
import { createApi } from "../apis";
import {
  defineProps,
  onMounted,
  PropType,
  ref,
  watch,
  defineExpose,
  nextTick,
  defineEmits,
} from "vue";
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
Extent,
} from "./Map.model";
export default {
  name: "NeshanMap",
};
</script>
<script setup lang="ts">
import Settings from "./settings/index.vue";
import SearchBox from "./search-box/index.vue";
import ResultBox from "./result-box/index.vue";

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
});

const api = ref<Api>(createApi(props.serviceKey));
/**
 * Sets the given token for api
 * @param token
 */
const setToken = (token: string) => {
  api.value = createApi(token);
};
/**
 * Whenever service token changes,
 * applies it to api
 */
watch(
  () => props.serviceKey,
  (nv) => {
    setToken(nv);
  }
);

const sanitizedCenter = ref<CoordsArr | null>(sanitizeLocation(props.center));
const map = ref<any>(null);
const mainMarker = ref<any>(null);
const mainMarkerCoords = ref<CoordsArr | null>(null);
const searchMarkers = ref<any>(null);
const mapType = ref(props.defaultType);
const reactiveTiles = ref(
  tiles.filter((tile) => props.mapTypes.includes(tile.title))
);

const trafficLayer = ref(props.traffic);
const poiLayer = ref(props.poi);
watch(
  () => props.traffic,
  (nv) => {
    trafficLayer.value = nv;
  }
);
watch(
  () => props.poi,
  (nv) => {
    poiLayer.value = nv;
  }
);
watch(trafficLayer, (nv) => {
  toggleTraffic(nv);
});
watch(poiLayer, (nv) => {
  togglePoi(nv);
});
/**
 * Switches poi layer
 * @param value - Whether it should be on or off
 */
const togglePoi = (value: boolean) => {
  map.value.switchPoiLayer(value);
};
/**
 * Switches traffic layer
 * @param value - Whether it should be on or off
 */
const toggleTraffic = (value: boolean) => {
  map.value.switchTrafficLayer(value);
};

/**
 * Adds the map from given url to given script
 * @param url - Url of map or another script
 * @param tagName - Name of the expected tag
 * @returns Created tag
 */
const importMap = (url: string, tagName = "my-overlayer") => {
  const foundDoc = document.getElementById(tagName);
  if (foundDoc) return foundDoc; // was already loaded
  const scriptTag = document.createElement("script");
  scriptTag.src = url;
  scriptTag.id = tagName;
  document.getElementsByTagName("head")[0].appendChild(scriptTag);
  return scriptTag;
};

/**
 * Starts the map and adds it to element with id='map'
 * Gets the mapKey, zoom, traffic and poi from props.
 * Gets the center from either sanitizedCenter variable or gets it from divice location
 * or Neshan building location.
 */
const startMap = async () => {
  const coords = sanitizedCenter.value || (await getLocation());
  const newMap = new ol.Map({
    target: "map",
    key: props.mapKey,
    // mapType: 'standard-night',
    poi: poiLayer.value,
    traffic: trafficLayer.value,
    view: new ol.View({
      center: ol.proj.fromLonLat(coords),
      zoom: props.zoom,
      smoothExtentConstraint: true,
    }),
  });
  map.value = newMap;
  // Currently there is a problem with assigning different map type on initilization
  changeMapType(mapType.value);
};
/**
 * Changes Map type
 * @param type - Exact name of a given map name
 */
const changeMapType = (type: MapType) => {
  map.value.setMapType(type);
  mapType.value = type;
};

const { createMapPoints, addMarkers, clearMarkerLayer } = markersFunc({
  map,
  markersIconCallback: props.markersIconCallback,
});
const searchResults = ref<SearchItem[]>([]);
/**
 * Does a neshan search based on given parameters
 * @param searchParams.text - Part of or whole name of the place.
 * @param searchParams.coords - Coordinates you want to search around.
 */
const search = async ({ term = "", coords }: SearchProps) => {
  try {
    const reliableCoords =
      coords || mainMarkerCoords.value || sanitizedCenter.value;
    if (!reliableCoords) return;
    const result = await api.value.SEARCH(term, reliableCoords);
    clearMarkerLayer(searchMarkers);
    searchResults.value = result.items;
    const points = createMapPoints(result.items);
    const { layer } = addMarkers(points, true);
    searchMarkers.value = layer;
    setTimeout(() => { // Apparently it takse some sync time to cluster the source
      const extent: Extent = layer.getSource().getExtent();
      zoomToExtent(extent, { duration: 1000 })
    }, 200);
  } catch (error) {
    console.log(error);
  }
};

const eventsEmits = defineEmits(["on-zoom", "on-click"]);
const { setupMapEvents, handleResultHover, handleResultClick, zoomToExtent } = eventsFunc({
  map,
  mainMarker,
  mainMarkerCoords,
  searchMarkers,
  api,
  emits: eventsEmits,
  resultHoverCallback: props.resultHoverCallback,
  resultClickCallback: props.resultClickCallback,
  zoomOnMarkerClick: props.zoomOnMarkerClick,
  zoomOnResultClick: props.zoomOnResultClick,
  popupOnMarkerHover: props.popupOnMarkerHover,
  popupOnResultHover: props.popupOnResultHover,
});
/**
 * Setups Map, adds serviceToken to api
 * and sanitizes center object
 */
onMounted(() => {
  const scriptTag = importMap(urls.map);
  scriptTag.onload = () => {
    startMap();
    nextTick(() => {
      setupMapEvents();
    });
  };
});

/**
 * Makes it possible to have access to search function from outside of the component
 */
defineExpose({
  search,
});
</script>

<style lang="scss">
@import url("https://static.neshan.org/sdk/openlayers/5.3.0/ol.css");

#map {
  height: 100%;
  position: relative;
}

#search-container {
  position: absolute;
  z-index: 2;
  width: 300px;
  top: 4vh;
  left: 4vw;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.select-none {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
  supported by Chrome, Edge, Opera and Firefox */
}

#popup-container {
  background-color: white;
  -webkit-box-shadow: 0px 0px 4px 2px #0000008d;
  box-shadow: 0px 0px 4px 2px #00000046;
  border-radius: 5px;
  padding: 2px 5px;
}

.ol-overlay-container {
  pointer-events: none;
}
</style>
