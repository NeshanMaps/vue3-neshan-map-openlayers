<template>
  <div id="map"></div>
</template>
<script>
/* eslint-disable */
const createHeaders = (token) => {
  return {
    "Api-Key": token
  }
};
const urls = {
  reverse: "https://api.neshan.org/v4/reverse",
  search: "https://api.neshan.org/v1/search",
};
const createApi = (token) => {
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
  }
};
const markerUrls = {
  red: "https://img.icons8.com/color/344/marker--v1.png",
  blue: "https://img.icons8.com/ultraviolet/344/marker.png",
};

const createText = ({ text }) => {
  return new ol.style.Text({
    text,
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
const createIcon = ({ color = "red", iconScale = 0.1 }) => {
  return new ol.style.Icon({
    src: markerUrls[color],
    scale: iconScale,
    anchor: [0.5, 1],
  });
};
const createStyle = ({ image, text }) => {
  return new ol.style.Style({
    image: image,
    text: text,
  });
};
const createSource = (features) => {
  return new ol.source.Vector({
    features,
  });
};
const createLayer = ({ target = "points", style, source }) => {
  return new ol.layer.Vector({
    target,
    source,
    style,
  });
};
export default {
  name: "NeshanMap",
  props: {
    mapKey: {
      type: String,
      required: true,
    },
    serviceKey: String,
    center: [Array, Object],
    zoom: {
      type: Number,
      default: 12,
    },
    poi: Boolean,
    traffic: Boolean,
  },
  data() {
    return {
      sanitizedCenter: null,
      map: null,
      markers: [],
      mainMarker: null,
      api: null
    };
  },
  methods: {
    sanitizeLocation(loc) {
      return loc && loc instanceof Object ? [loc.longitude, loc.latitude] : loc;
    },
    async getLocation() {
      const position = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((pos) => {
          resolve(pos);
        });
      });
      return position
        ? this.sanitizeLocation(position.coords)
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
        }),
      });
      this.map = map;

      map.on("click", (event) => {
        this.handleClickEvent(event);
      });
    },
    importMap() {
      if (document.getElementById("my-overlayer")) return; // was already loaded
      const scriptTag = document.createElement("script");
      scriptTag.src = "https://static.neshan.org/sdk/openlayers/5.3.0/ol.js";
      scriptTag.id = "my-overlayer";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
      return scriptTag;
    },
    addMarkers(points, { layer, style, image, color, text, iconScale } = {}) {
      const features = points.map(
        (point) => new ol.Feature(new ol.geom.Point(point))
      );
      const _text = text ? createText({ text }) : undefined;
      const _image = image || createIcon({ color, iconScale });
      const _style = style || createStyle({ text: _text, image: _image });
      const source = createSource(features);
      const _pinLayer = layer || createLayer({ style: _style, source });
      this.map.addLayer(_pinLayer);
      return { layer: _pinLayer, style: _style };
    },
    async handleClickEvent(event) {
      this.map.removeLayer(this.mainMarker);
      const point = event.coordinate;
      const { layer: marker, style } = this.addMarkers([point], { text: " " });
      const stdPoint = ol.proj.transform(point, "EPSG:3857", "EPSG:4326");
      const data = await this.api.REVERSE(...stdPoint);
      const text = this.getTitleFromData(data);
      style.getText().setText(text);
      marker.setStyle(style);
      this.mainMarker = marker;
      this.search("", stdPoint);
      // map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
      //   console.log(feature, layer);
      //   featureListener(event);
      // });
    },
    getTitleFromData(data) {
      const mainTitle = data.place
        ? data.place
        : data.route_name
          ? data.route_name
          : "معبر بدون نام";
      const fullTitle = data.neighbourhood
        ? mainTitle + `، ${data.neighbourhood}`
        : mainTitle;
      return fullTitle;
    },
    async search(text, point) {
      try {
        const result = await this.api.SEARCH("خانه کتاب", point);
        this.markers = this.markers.filter((marker) => {
          this.map.removeLayer(marker);
          return false;
        });
        result.items.forEach((item) => {
          const coords = Object.values(item.location);
          const stdPoint = ol.proj.transform(coords, "EPSG:4326", "EPSG:3857");
          const { layer: marker, style } = this.addMarkers([stdPoint], {
            color: "blue",
            text: " ",
            iconScale: 0.07,
          });
          style.getText().setText(item.title);
          marker.setStyle(style);
          this.markers.push(marker);
        });
        // this.map.panTo(yourVectorLayer.getDataExtent().getCenterLonLat());
        // this.map.zoomTo(yourVectorLayer.getDataExtent().getZoomExtent());
      } catch (error) {
        console.log(error);
      }
    },
    setToken(token) {
      this.api = createApi(token)
    }
  },
  mounted() {
    this.setToken(this.serviceKey)
    this.sanitizedCenter = this.sanitizeLocation(this.center);
    const scriptTag = this.importMap();
    scriptTag.onload = this.bundleMap;
  },
};
</script>

<style>
@import url("https://static.neshan.org/sdk/openlayers/5.3.0/ol.css");

#map {
  height: 100%;
}
</style>
