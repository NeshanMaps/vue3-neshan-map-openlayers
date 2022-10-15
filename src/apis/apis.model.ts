import { PrimaryReverseResult, SearchResult } from "@/store/markers/markers.model"
import { Coordinate } from "openlayers"

export declare interface CreateApiOptions {
  searchUrl?: string
  reverseUrl?: string
}

export declare interface Api {
  REVERSE: (lng: number, lat: number) => Promise<PrimaryReverseResult>
  SEARCH: (term: string, coords: Coordinate) => Promise<SearchResult>
}
