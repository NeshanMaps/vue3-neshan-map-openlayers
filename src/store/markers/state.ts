import { VectorLayer } from "@/components/Map.model"
import { Coordinate } from "openlayers"
import { ref, Ref } from "vue"
import { ReverseResult, SearchItem, SelectedMarker } from "./markers.model"

const stateGen = () => {
  return {
    selectedMarker: null as SelectedMarker,
    mainMarker: ref() as Ref<VectorLayer>,
    mainMarkerCoords: ref() as Ref<Coordinate>,
    reverseResult: null as ReverseResult | null,
    searchMarkers: ref() as Ref<VectorLayer>,
    searchResults: [] as SearchItem[],
  }
}

export const markersState = stateGen()
