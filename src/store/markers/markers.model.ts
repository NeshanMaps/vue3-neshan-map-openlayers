import { MarkersIconCallback, NuString } from "@/components/Map.model"
import { RouteTypes } from "@/static/index.model"
import { Coordinate, Feature } from "openlayers"
export declare interface SearchItem {
  category: string
  location: {
    x: number
    y: number
  }
  neighbourhood: string
  region: string
  title: string
  type: RouteTypes
  address: string
}
export declare interface SearchResult {
  count: number
  items: SearchItem[]
}

export declare interface ReverseResult {
  city: NuString
  district: NuString
  formatted_address: NuString
  in_odd_even_zone: boolean
  in_traffic_zone: boolean
  municipality_zone: NuString
  neighbourhood: NuString
  place: NuString
  route_name: NuString
  route_type: null | RouteTypes
  state: NuString
  status: NuString
  village: NuString
}

export declare interface SearchProps {
  term: string
  coords: Coordinate
}
export declare type GetSearchResultByFeature = (
  feature: Feature
) => SearchItem | undefined
export declare type GetMarkerByTitle = (title: string) => Feature | undefined
export declare type GetClusterByTitle = (title: string) => {
  feature: Feature | undefined
  cluster: Feature | undefined
}

export declare type SelectedMarker = ReverseResult | SearchItem | null

export declare interface ZoomToExtentOptions {
  duration?: number
}

export declare interface SelectFeautureOptions {
  text?: string
  coords?: Coordinate
  delay?: number
}

export declare interface SearchOptions {
  markersIconCallback?: MarkersIconCallback
  cluster?: boolean
  clusterThreshold?: number
}
