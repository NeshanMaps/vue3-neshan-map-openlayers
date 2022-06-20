<template>
  <div id="map">
    <div id="settings">
      <div id="tiles">
        <div
          v-for="tile in tiles"
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
          <input
            type="checkbox"
            name="poi"
            @change="togglePoi(poiLayer)"
            v-model="poiLayer"
          />
        </label>
        <label for="traffic"
          >traffic
          <input
            type="checkbox"
            name="traffic"
            @change="toggleTraffic(trafficLayer)"
            v-model="trafficLayer"
          />
        </label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
declare const ol: any;
const tiles = [
  {
    title: "osm-bright",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-bright.png",
  },
  {
    title: "standard-night",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-night.png",
  },
  {
    title: "standard-day",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-day.png",
  },
  {
    title: "neshan",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-neshan.png",
  },
  {
    title: "dreamy-gold",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy-gold.png",
  },
  {
    title: "dreamy",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy.png",
  },
];
const createHeaders = (token: string) => {
  return {
    "Api-Key": token,
  };
};
const urls = {
  reverse: "https://api.neshan.org/v4/reverse",
  search: "https://api.neshan.org/v1/search",
  map: "https://static.neshan.org/sdk/openlayers/5.3.0/ol.js",
};
const createApi = (token: string): Api => {
  return {
    REVERSE: async (lng, lat) => {
      const params = `?lat=${lat}&lng=${lng}`;
      const res = await fetch(urls.reverse + params, {
        headers: createHeaders(token),
      });
      return await res.json();
    },
    SEARCH: async (term, [lng, lat]) => {
      const params = `?term=${term}&lat=${lat}&lng=${lng}`;
      const res = await fetch(urls.search + params, {
        headers: createHeaders(token),
      });
      return await res.json();
    },
  };
};
const markerUrls = {
  red: "https://img.icons8.com/color/344/marker--v1.png",
  blue: "https://img.icons8.com/ultraviolet/344/marker.png",
};

const createText = (): any => {
  return new ol.style.Text({
    overflow: true,
    scale: 1.6,
    offsetY: -43,
    // backgroundFill: new ol.style.Fill({
    //   color: "#ffffff",
    // }),
    fill: new ol.style.Fill({
      color: "#fff",
    }),
    stroke: new ol.style.Stroke({
      color: "0",
      width: 2,
    }),
    // backgroundStroke: new ol.style.Stroke({
    //   color: "0",
    //   width: 1,
    // }),
    // padding: [2, 4, 2, 4],
  });
};
const createIcon = ({
  color = "red",
  iconScale = 0.1,
}: CreateIconProps = {}): any => {
  return new ol.style.Icon({
    src: markerUrls[color],
    scale: iconScale,
    anchor: [0.5, 1],
  });
};
const createStyle = ({ image, text }: CreateStyleProps): any => {
  return new ol.style.Style({
    image: image,
    text: text,
  });
};
const createSource = (features: any): any => {
  return new ol.source.Vector({
    features,
  });
};
const createLayer = ({
  target = "points",
  style,
  source,
}: CreateLayerProps) => {
  return new ol.layer.Vector({
    target,
    source,
    style,
  });
};
const getTitleFromData = (data: GetTitleFromDataProps) => {
  const mainTitle = data.place
    ? data.place
    : data.route_name
    ? data.route_name
    : "معبر بدون نام";
  const fullTitle = data.neighbourhood
    ? mainTitle + `، ${data.neighbourhood}`
    : mainTitle;
  return fullTitle;
};
const sanitizeLocation = (loc?: CoordsObj) => {
  return loc ? loc instanceof Object ? [loc.longitude, loc.latitude] as CoordsArr : loc : null;
};

import { defineComponent, PropType } from "vue";
import {
  CreateIconProps,
  CreateStyleProps,
  CreateLayerProps,
  GetTitleFromDataProps,
  CoordsObj,
  Api,
  CoordsArr,
  SearchProps,
  AddMarkersProps,
  AddMarkersPropsItem,
IconColor
} from "./Map.model";
export default defineComponent({
  name: "NeshanMap",
  props: {
    mapKey: {
      type: String,
      required: true,
    },
    serviceKey: String as PropType<string>,
    center: Object as PropType<CoordsObj>,
    zoom: {
      type: Number,
      default: 12,
    },
    poi: Boolean,
    traffic: Boolean,
  },
  data() {
    return {
      sanitizedCenter: null as CoordsArr | null,
      map: null as any,
      mainMarker: null,
      mainMarkerCoords: null as CoordsArr | null,
      searchMarkers: null,
      api: null as Api | null,
      tiles: tiles,
      mapType: "neshan",
      poiLayer: this.poi,
      trafficLayer: this.traffic,
    };
  },
  watch: {
    serviceKey(nv: string) {
      this.setToken(nv);
    },
  },
  methods: {
    async getLocation() {
      const positionPromise: Promise<GeolocationPosition> = new Promise(
        (resolve) => {
          navigator.geolocation.getCurrentPosition((pos) => {
            resolve(pos);
          });
        }
      );
      const position = await positionPromise;
      return position
        ? sanitizeLocation(position.coords)
        : [59.5870851, 36.311559];
    },
    async bundleMap() {
      const coords = this.sanitizedCenter || (await this.getLocation());
      const map = new ol.Map({
        target: "map",
        key: this.mapKey,
        // mapType: 'standard-night',
        poi: this.poi,
        traffic: this.traffic,
        view: new ol.View({
          center: ol.proj.fromLonLat(coords),
          zoom: this.zoom,
          smoothExtentConstraint: true,
        }),
      });
      this.map = map;

      map.on("click", (event: any) => {
        this.handleClickEvent(event);
      });
    },
    importMap() {
      const foundDoc = document.getElementById("my-overlayer")
      if (foundDoc) return foundDoc; // was already loaded
      const scriptTag = document.createElement("script");
      scriptTag.src = urls.map;
      scriptTag.id = "my-overlayer";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
      return scriptTag;
    },
    addMarkers(points: AddMarkersProps) {
      const [{ layer, style, image, color, iconScale } = {} as AddMarkersPropsItem] = points;
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
      this.map.addLayer(_pinLayer);
      return { layer: _pinLayer, style: _style };
    },
    async handleClickEvent(event: any) {
      try {
        this.map.removeLayer(this.mainMarker);
        const point: CoordsArr = event.coordinate;
        const { layer: marker, style } = this.addMarkers([
          { coords: point, text: " " },
        ]);
        const stdPoint: CoordsArr = ol.proj.transform(point, "EPSG:3857", "EPSG:4326");
        this.mainMarkerCoords = stdPoint
        const data = await this.api!.REVERSE(...stdPoint);
        const text = getTitleFromData(data);
        style.getText().setText(text);
        marker.setStyle(style);
        this.mainMarker = marker;
        this.$emit("on-click", { event, marker, stdPoint, data });
      } catch (error) {
        console.log(error);
      }
    },
    async search({ text = "", coords }: SearchProps) {
      try {
        const reliableCoords = coords ||= this.mainMarkerCoords || this.sanitizedCenter!;
        const result = await this.api!.SEARCH(text, reliableCoords);
        this.map.removeLayer(this.searchMarkers);
        this.searchMarkers = null;
        const points = result.items.map((item) => {
          const point = Object.values(item.location);
          const stdPoint: CoordsArr = ol.proj.transform(point, "EPSG:4326", "EPSG:3857");
          return {
            coords: stdPoint,
            text: item.title,
            color: "blue" as IconColor,
            iconScale: 0.07,
          };
        });
        const { layer } = this.addMarkers(points);
        this.searchMarkers = layer;
        const extent = layer.getSource().getExtent();
        this.map.getView().fit(extent, {
          size: this.map.getSize(),
          duration: 500,
        });
      } catch (error) {
        console.log(error);
      }
    },
    setToken(token: string) {
      this.api = createApi(token);
    },
    changeMapType(type: string) {
      this.map.setMapType(type);
      this.mapType = type;
    },
    togglePoi(value: boolean) {
      this.map.switchPoiLayer(value);
    },
    toggleTraffic(value: boolean) {
      this.map.switchTrafficLayer(value);
    },
  },
  mounted() {
    if (this.serviceKey) {
      this.setToken(this.serviceKey);
    }
    this.sanitizedCenter = sanitizeLocation(this.center);
    const scriptTag = this.importMap();
    scriptTag.onload = this.bundleMap;
  },
});
</script>

<style>
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
}

#settings:hover {
  max-width: 100%;
  max-height: 100%;
  transition: 1s;
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
}

.tile img {
  width: 8vw;
  height: 8vw;
  border-radius: 1vw;
  margin-left: 0.3vw;
  margin-right: 0.3vw;
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
