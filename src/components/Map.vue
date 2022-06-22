<template>
  <div id="map">
    <div id="settings">
      <div id="tiles">
        <div
          v-for="tile in readonlyTiles"
          :key="tile.title"
          @click="changeMapType(tile.title)"
          class="tile"
          :class="{ 'selected-tile': tile.title == mapType }"
        >
          <img :src="tile.url" />
          <div class="desc">
            {{ tile.title }}
          </div>
        </div>
      </div>
      <div id="checkboxes">
        <label
          >poi
          <input type="checkbox" name="poi" v-model="poiLayer" />
        </label>
        <label for="traffic"
          >traffic
          <input type="checkbox" name="traffic" v-model="trafficLayer" />
        </label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
declare const ol: any;
import {
  createApi,
  createIcon,
  createLayer,
  createSource,
  createStyle,
  createText,
  getTitleFromData,
  sanitizeLocation,
  tiles,
  urls,
  getLocation,
} from "./Map.util";
import {
  defineProps,
  onMounted,
  PropType,
  readonly,
  ref,
  toRefs,
  watch,
  defineEmits,
  defineExpose,
} from "vue";
import {
  CoordsObj,
  Api,
  CoordsArr,
  SearchProps,
  AddMarkersProps,
  AddMarkersPropsItem,
  IconColor,
} from "./Map.model";
export default {
  name: "NeshanMap",
};
</script>
<script setup lang="ts">
const props = defineProps({
  mapKey: {
    type: String,
    required: true,
  },
  serviceKey: {
    type: String as PropType<string>,
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
});

const sanitizedCenter = ref<CoordsArr | null>(null);
const map = ref<any>(null);
const mainMarker = ref<any>(null);
const mainMarkerCoords = ref<CoordsArr | null>(null);
const searchMarkers = ref<any>(null);
const api = ref<Api | null>(null);
const readonlyTiles = readonly(tiles);
const mapType = ref("neshan");
const { poi, traffic, serviceKey, mapKey, zoom, center } = toRefs(props);

const emit = defineEmits(["on-click"]);

/**
 * Whenever service token changes,
 * applies it to api
 */
watch(serviceKey, (nv) => {
  setToken(nv);
});

const trafficLayer = ref(traffic.value);
const poiLayer = ref(poi.value);
watch(traffic, (nv) => {
  trafficLayer.value = nv;
});
watch(poi, (nv) => {
  poiLayer.value = nv;
});
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
    key: mapKey.value,
    // mapType: 'standard-night',
    poi: poi.value,
    traffic: traffic.value,
    view: new ol.View({
      center: ol.proj.fromLonLat(coords),
      zoom: zoom.value,
      smoothExtentConstraint: true,
    }),
  });
  map.value = newMap;

  map.value.on("click", (event: any) => {
    handleClickEvent(event);
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
/**
 * Does a neshan search based on given parameters
 * @param searchParams.text - Part of or whole name of the place.
 * @param searchParams.coords - Coordinates you want to search around.
 */
const search = async ({ text = "", coords }: SearchProps) => {
  try {
    const reliableCoords = (coords ||=
      mainMarkerCoords.value || sanitizedCenter.value!);
    const result = await api.value!.SEARCH(text, reliableCoords);
    map.value.removeLayer(searchMarkers.value);
    searchMarkers.value = null;
    const points = result.items.map((item) => {
      const point = Object.values(item.location);
      const stdPoint: CoordsArr = ol.proj.transform(
        point,
        "EPSG:4326",
        "EPSG:3857"
      );
      return {
        coords: stdPoint,
        text: item.title,
        color: "blue" as IconColor,
        iconScale: 0.07,
      };
    });
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
const changeMapType = (type: string) => {
  map.value.setMapType(type);
  mapType.value = type;
};
/**
 * Setups Map, adds serviceToken to api
 * and sanitizes center object
 */
onMounted(() => {
  if (serviceKey) {
    setToken(serviceKey.value);
  }
  sanitizedCenter.value = sanitizeLocation(center.value);
  const scriptTag = importMap(urls.map);
  scriptTag.onload = startMap;
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

#settings {
  background-color: white;
  border-radius: 0.5vw;
  border: 1px solid rgb(178, 178, 178);
  position: absolute;
  z-index: 10;
  bottom: 3.5vh;
  max-width: 8.6vw;
  max-height: 8vw;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    max-width: 100%;
    max-height: 100%;
    transition: 1s;
  }
}

#checkboxes {
  display: flex;
  justify-content: space-around;
  padding-top: 1vw;
  padding-bottom: 1vw;
}

#tiles {
  display: flex;
}

.tile {
  cursor: pointer;
  img {
    width: 8vw;
    height: 8vw;
    border-radius: 1vw;
    margin-left: 0.3vw;
    margin-right: 0.3vw;
  }
}

.desc {
  overflow: hidden;
  padding-right: 0.1vw;
  padding-left: 0.1vw;
  text-align: center;
  font-size: small;
}

.selected-tile {
  border: 1px solid rgb(145, 145, 145);
}
</style>
