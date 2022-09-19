import { VectorLayer } from "../../components/Map.model"
import { Coordinate } from "openlayers"
import { ReverseResult, SearchItem, SelectedMarker } from "./markers.model"

const stateGen = () => {
  return {
    selectedMarker: null as SelectedMarker,
    mainMarker: null as VectorLayer | null,
    mainMarkerCoords: null as Coordinate | null,
    reverseResult: null as ReverseResult | null,
    searchMarkers: null as VectorLayer | null,
    searchResults: [] as SearchItem[],
  }
}

export const markersState = stateGen()
