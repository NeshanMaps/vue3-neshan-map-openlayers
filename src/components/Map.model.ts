import { Ref } from "vue"
import type Ol from "openlayers"

export type { Ol }
import { Feature, Map, style } from "openlayers"
import { RouteTypes } from "@/static/index.model"

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
export declare type Overlay = Ol.Overlay
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
  showPopup?: boolean
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
  type: string
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

export declare interface ChangeOverlayStatsProps {
  coords: CoordsArr
  text: string
}

export declare type ResultHoverCallback = (...[arg]: any[]) => any
export declare type ResultClickCallback = (...[arg]: any[]) => any
export declare type ChangeOverlayStats = (
  options: ChangeOverlayStatsProps
) => void
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
  emits: (event: "on-zoom" | "on-click", arg: any) => void
  resultHoverCallback?: ResultHoverCallback
  resultClickCallback?: ResultClickCallback
  markerHoverCallback?: MarkerHoverCallback
  popupOnMarkerHover: boolean
  popupOnResultHover: boolean
  zoomOnMarkerClick: boolean
  zoomOnResultClick: boolean
  addMarkers: CreateMarkers
  setupOverlay: () => void
  overlay: Ref<Overlay | undefined>
  changeOverlayStats: ({ text, coords }: ChangeOverlayStatsProps) => void
  mapId: string
  findMarkerByTitle: (title: string) => Feature | undefined
  findClusterByTitle: (title: string) => Feature | undefined
}
export declare interface MarkersMixinProps {
  map: OlMapRef
  searchMarkers: VectorLayerRef
}

export declare interface ZoomToExtentOptions {
  duration?: number
}

export declare interface OverlayMixinProps {
  map: OlMapRef
  popupContainer: Ref<HTMLElement | null>
}

export declare interface CreateMarkersOptions {
  markersIconCallback?: MarkersIconCallback
  showPopup?: boolean
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
