import { Tile } from "../components/Map.model"

export const urls = {
  reverse: "https://api.neshan.org/v4/reverse",
  search: "https://api.neshan.org/v1/search",
  map: "https://static.neshan.org/sdk/openlayers/5.3.0/ol.js",
}

export const markerUrls = {
  main: "https://img.icons8.com/color/344/marker--v1.png",
  // blue: "https://img.icons8.com/ultraviolet/344/marker.png",
  search: "https://static.neshanmap.ir/poi/square/",
  colorSvg: "https://static.neshanmap.ir/poi/svg/color/",
  greySvg: "https://static.neshanmap.ir/poi/svg/grey/",
  preview256: "https://static.neshanmap.ir/poi/256/",
  searchPrev: "/images/search-marker-prev.png",
}

export const tiles: Tile[] = [
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
]

export const breakpointsSegments = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
}
export const breakpointsSegmentsPixels = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920,
}

export const drawerConstants = {
  width: 240,
  bottomSheetNormalHeight: "3rem",
  bottomSheetloadingHeight: "2rem",
}

export const unsetMapDimnensions = {
  width: 700,
  height: 1000,
}

export const zoomConstants = {
  initialZoom: 12,
  maxZoom: 18.5,
}

export const markersOffset = {
  high: [0, -60],
  short: [0, -40],
}
