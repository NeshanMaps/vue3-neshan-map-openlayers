import { VectorLayer } from "../../components/Map.model"
import { Coordinate } from "openlayers"
import { state } from "../state"
import { ReverseResult, SearchItem, SelectedMarker } from "./markers.model"

export const markersMutations = {
  setSelectedMarker(value: SelectedMarker) {
    state.selectedMarker = value
  },
  setMainMarker(value: VectorLayer) {
    state.mainMarker = value
  },
  setSearchMarkers(value: VectorLayer) {
    state.searchMarkers = value
  },
  setMainMarkerCoords(value: Coordinate) {
    state.mainMarkerCoords = value
  },
  setSearchResults(value: SearchItem[]) {
    state.searchResults = value
  },
  setReverseResult(value: ReverseResult) {
    state.reverseResult = value
  },
}
