import { MapType, OlMap } from "./map.model"
import { zoomConstants } from "@/parameters"

const stateGen = () => {
  return {
    mapContainer: null as HTMLDivElement | null,
    map: null as OlMap | null,
    mapType: "neshan" as MapType,
    zoom: zoomConstants.initialZoom,
    poiLayer: true,
    trafficLayer: true,
  }
}

export const mapState = stateGen()
