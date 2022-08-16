import { Ref } from "vue"
import type Ol from "openlayers"

export type { Ol }
import { Feature, Map, style, Coordinate } from "openlayers"
import { ChangeOverlayStats } from "../store/overlays/overlays.model"
import { PrimaryReverseResult, SearchResult } from "../store/markers/markers.model"

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
export declare type DoubleNums = [number, number]
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
export declare type DivElementRef = Ref<HTMLDivElement | undefined>

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

export declare interface Api {
  REVERSE: (lng: number, lat: number) => Promise<PrimaryReverseResult>
  SEARCH: (term: string, coords: Coordinate) => Promise<SearchResult>
}

export declare interface HandleSearchProps {
  term?: string
  coords?: Coordinate
}

export declare interface CreateMarkersPointsItem {
  style?: Style
  image?: Image
  color?: IconColor
  iconScale?: number
  text?: string
  coords: Coordinate
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
  map: OlMap | null
  feature: Feature
}
export declare type MarkerHoverCallback = (
  options: MarkerHoverCallbackProps
) => void
export declare type MarkersIconCallback = (
  points: CreateMarkersPointsItem
) => CreateIconProps

export declare interface EventsMixinProps {
  mapContainer: DivElementRef
  popupContainer: DivElementRef
  persistantContainer: DivElementRef
  emits: (event: "on-zoom" | "on-click", arg: any) => void
  resultHoverCallback?: ResultHoverCallback
  resultClickCallback?: ResultClickCallback
  markerHoverCallback?: MarkerHoverCallback
  popupOnMarkerHover: boolean
  popupOnResultHover: boolean
  zoomOnMarkerClick: boolean
  zoomOnResultClick: boolean
}

export declare interface CreateMarkersOptions {
  markersIconCallback?: MarkersIconCallback
  anchor?: DoubleNums
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
