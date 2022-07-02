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
          <ResultBox :results="searchResults" />
        </slot>
      </div>
    </slot>
  </div>
</template>
<script lang="ts">
declare const ol: any; // eslint-disable-line
import { tiles, urls } from "../parameters";
import {
  createMapPoints,
  getTitleFromData,
  sanitizeLocation,
  getLocation,
  createIcon,
  createLayer,
  createSource,
  createStyle,
  createText,
} from "../utils";
import { createApi } from "../apis";
import {
  defineProps,
  onMounted,
  PropType,
  ref,
  watch,
  defineEmits,
  defineExpose,
  nextTick,
} from "vue";
import {
  CoordsObj,
  Api,
  CoordsArr,
  SearchProps,
  AddMarkersProps,
  AddMarkersPropsItem,
  MapType,
  SearchItem,
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
});

const sanitizedCenter = ref<CoordsArr | null>(null);
const map = ref<any>(null);
const mainMarker = ref<any>(null);
const mainMarkerCoords = ref<CoordsArr | null>(null);
const searchMarkers = ref<any>(null);
const api = ref<Api | null>(null);
const mapType = ref(props.defaultType);
const reactiveTiles = ref(
  tiles.filter((tile) => props.mapTypes.includes(tile.title))
);

const emit = defineEmits(["on-click", "on-zoom"]);

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
  // Currently these is a problem with assigning different map type on initilization
  changeMapType(mapType.value);
};
/**
 * Sets the required events up for the map.
 */
const setupMapEvents = () => {
  let currentZoom: number = map.value.getView().getZoom();
  map.value.on("click", (event: any) => {
    handleClickEvent(event);
  });
  map.value.on("moveend", () => {
    const newZoom: number = map.value.getView().getZoom();
    if (currentZoom != newZoom) {
      emit("on-zoom", newZoom);
      currentZoom = newZoom;
    }
  });
};

/**
 * After clicking on map, sets a marker on that coords.
 * Sends a request to api.reverse and labels the marker
 * Then emits an event named 'on-click'.
 * @param event - Map click event.
 */
const handleClickEvent = async (event: any) => {
  try {
    map.value.removeLayer(mainMarker.value);
    const point: CoordsArr = event.coordinate;
    const { layer: marker, style } = addMarkers([{ coords: point, text: " " }]);
    const stdPoint: CoordsArr = ol.proj.transform(
      point,
      "EPSG:3857",
      "EPSG:4326"
    );
    mainMarkerCoords.value = stdPoint;
    const data = await api.value!.REVERSE(...stdPoint);
    const text = getTitleFromData(data);
    style.getText().setText(text);
    marker.setStyle(style);
    mainMarker.value = marker;
    emit("on-click", { event, marker, stdPoint, data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Receives an array of points and marks them on map.
 * @param points - Array of points.
 * @param point.text - Coordinates of that point.
 * @param point.text - If you have a particular text for the point.
 * @param point.layer - if you wanna apply them to your desired layer (only checks the first point for now).
 * @param point.style - If you have a particular style for that point (only checks the first point for now).
 * @param point.color - If you have a particular color for that point (only checks the first point for now).
 * @param point.image - If you have a particular image for that point (only checks the first point for now).
 * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
 * @returns style and layer.
 */
const addMarkers = (points: AddMarkersProps) => {
  const [
    { layer, style, image, color, iconScale } = {} as AddMarkersPropsItem,
  ] = points;
  const features = points.map(
    (point) =>
      new ol.Feature({
        geometry: new ol.geom.Point(point.coords),
        text: point.text,
      })
  );
  const _text = createText();
  const _image = image || createIcon({ color, iconScale });
  const _style = style || createStyle({ text: _text, image: _image });
  const styleFunc = (feature: any) => {
    _style.getText().setText(feature.get("text"));
    return _style;
  };
  const source = createSource(features);
  const _pinLayer = layer || createLayer({ style: styleFunc, source });
  map.value.addLayer(_pinLayer);
  return { layer: _pinLayer, style: _style };
};

const searchResults = ref<SearchItem[]>([]);
/**
 * Does a neshan search based on given parameters
 * @param searchParams.text - Part of or whole name of the place.
 * @param searchParams.coords - Coordinates you want to search around.
 */
const search = async ({ term = "", coords }: SearchProps) => {
  try {
    const reliableCoords = (coords ||=
      mainMarkerCoords.value || sanitizedCenter.value!);
    const result = await api.value!.SEARCH(term, reliableCoords);
    clearMarkerLayer(searchMarkers);
    const points = createMapPoints(result.items);
    searchResults.value = result.items;
    const { layer } = addMarkers(points);
    searchMarkers.value = layer;
    const extent = layer.getSource().getExtent();
    map.value.getView().fit(extent, {
      size: map.value.getSize(),
      duration: 500,
    });
  } catch (error) {
    console.log(error);
  }
};
/**
 * Removes markers from map
 */
const clearMarkerLayer = (layer: any) => {
  map.value.removeLayer(layer.value);
  layer.value = null;
};

/**
 * Sets the given token for api
 * @param token
 */
const setToken = (token: string) => {
  api.value = createApi(token);
};
/**
 * Changes Map type
 * @param type - Exact name of a given map name
 */
const changeMapType = (type: MapType) => {
  map.value.setMapType(type);
  mapType.value = type;
};
/**
 * Setups Map, adds serviceToken to api
 * and sanitizes center object
 */
onMounted(() => {
  if (props.serviceKey) {
    setToken(props.serviceKey);
  }
  sanitizedCenter.value = sanitizeLocation(props.center);
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
</style>
