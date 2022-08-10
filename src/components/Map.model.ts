import { Ref } from "vue"
import type Ol from "openlayers"

export type { Ol }
import { Feature, Map, style } from "openlayers"
import { RouteTypes } from "@/static/index.model"
import { ChangeOverlayStats } from "@/mixins/overlay.mixin.model"
import { GetMarkerByTitle, GetSearchResultByFeature } from "@/mixins/markers.mixin.model"

export declare type NuString = null | string
export declare type MapType =
  | "neshan"
  | "dreamy"
  | "dreamy-gold"
  | "standard-night"
  | "standard-day"
  | "osm-bright"
export declare interface OlMap extends Map {
  setMapType(value: MapType): void
  switchPoiLayer(value: boolean): void
  switchTrafficLayer(value: boolean): void
}
export declare type OlMapRef = Ref<OlMap | undefined>
export declare type DoubleNums = Ol.Coordinate
export declare type Extent = Ol.Extent
export declare type Style = style.Style
export declare type Image = Ol.style.Image
export declare type Text = style.Text
export declare type Source = Ol.source.Source
export declare type VectorLayer = Ol.layer.Vector
export declare type VectorLayerRef = Ref<VectorLayer | undefined>
export declare type Cluster = Ol.source.Cluster
export declare interface CoordsObj {
  latitude: number
  longitude: number
}
export declare type CoordsArr = Ol.Coordinate

export declare interface Tile {
  title: MapType
  url: string
}

export declare type IconColor = "red" | "blue"
export declare interface CreateIconProps {
  color?: IconColor
  iconScale?: number
  src?: string
  anchor?: DoubleNums
}

export declare interface CreateRawStyleProps {
  image?: Image
  text?: Text
}

export declare interface CreateStyleProps {
  hidePopup?: boolean
  image?: Image
}

export declare interface CreateLayerProps {
  target?: string | Element
  style?: Style | Ol.StyleFunction
  source?: Source
}

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
  term?: string
  coords?: CoordsArr
}
export declare interface Api {
  REVERSE: (lng: number, lat: number) => Promise<ReverseResult>
  SEARCH: (term: string, coords: CoordsArr) => Promise<SearchResult>
}

export declare interface CreateMarkersPointsItem {
  style?: Style
  image?: Image
  color?: IconColor
  iconScale?: number
  text?: string
  coords?: CoordsArr
  props?: any
}
export declare type CreateMarkersPoints = CreateMarkersPointsItem[]
export declare interface CreateMarkersResult {
  layer: VectorLayer
  style: Style | undefined
}
export declare type CreateMarkers = (
  points: CreateMarkersPoints,
  options?: CreateMarkersOptions
) => CreateMarkersResult

export declare type ResultHoverCallback = (...[arg]: any[]) => any
export declare type ResultClickCallback = (...[arg]: any[]) => any

export declare interface MarkerHoverCallbackProps {
  changeOverlayStats: ChangeOverlayStats
  map: OlMapRef
  feature: Feature
}
export declare type MarkerHoverCallback = (
  options: MarkerHoverCallbackProps
) => void
export declare type MarkersIconCallback = (
  points: CreateMarkersPointsItem
) => CreateIconProps

export declare interface EventsMixinProps {
  map: OlMapRef
  mainMarker: VectorLayerRef
  mainMarkerCoords: Ref<CoordsArr | undefined>
  api: Ref<Api>
  mapContainer: Ref<HTMLDivElement | undefined>
  emits: (event: "on-zoom" | "on-click", arg: any) => void
  resultHoverCallback?: ResultHoverCallback
  resultClickCallback?: ResultClickCallback
  markerHoverCallback?: MarkerHoverCallback
  popupOnMarkerHover: boolean
  popupOnResultHover: boolean
  zoomOnMarkerClick: boolean
  zoomOnResultClick: boolean
  addMarkers: CreateMarkers
  setupOverlays: () => void
  changeOverlayStats: ChangeOverlayStats
  getMarkerByTitle: GetMarkerByTitle
  getClusterByTitle: (title: string) => {
    feature: Feature | undefined
    cluster: Feature | undefined
  }
  getSearchResultByFeature: GetSearchResultByFeature
}
export declare interface MarkersMixinProps {
  map: OlMapRef
  searchMarkers: VectorLayerRef
  searchResults: Ref<SearchItem[]>
}

export declare interface ZoomToExtentOptions {
  duration?: number
}


export declare interface CreateMarkersOptions {
  markersIconCallback?: MarkersIconCallback
  hidePopup?: boolean
  cluster?: boolean
  clusterThreshold?: number
  clusterDistance?: number
  clusterMinDistance?: number
  props?: any
}

export declare interface CreateMapPointsOptions {
  color?: IconColor
  iconScale: number
}
