import { VectorLayer } from "../../components/Map.model"
import { Coordinate } from "openlayers"
import { ReverseResult, SearchItem, SelectedMarker } from "./markers.model"
import { Store } from ".."

export const markersMutations = {
  setSelectedMarker(value: SelectedMarker) {
    (<Store><unknown>this).state.selectedMarker = value
  },
  setMainMarker(value: VectorLayer) {
    (<Store><unknown>this).state.mainMarker = value
  },
  setSearchMarkers(value: VectorLayer) {
    (<Store><unknown>this).state.searchMarkers = value
  },
  setMainMarkerCoords(value: Coordinate) {
    (<Store><unknown>this).state.mainMarkerCoords = value
  },
  setSearchResults(value: SearchItem[]) {
    (<Store><unknown>this).state.searchResults = value
  },
  setReverseResult(value: ReverseResult) {
    (<Store><unknown>this).state.reverseResult = value
  },
}
