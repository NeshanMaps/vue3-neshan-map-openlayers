import { Ref } from "vue"
import type Ol from "openlayers"

export type { Ol }
import { Feature, style, Coordinate } from "openlayers"
import { ChangeOverlayStats } from "../store/overlays/overlays.model"
import {
  PrimaryReverseResult,
} from "../store/markers/markers.model"
import { MapType, OlMap } from "../store/map/map.model"
import { Store } from "@/store/store.model"

export declare type NuString = null | string
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
export declare interface Tile {
  title: MapType
  url: string
}

export declare interface CreateIconProps {
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
  iconUrl?: string
  iconScale?: number
  anchor?: DoubleNums
}

export declare interface CreateLayerProps {
  target?: string | Element
  style?: Style | Ol.StyleFunction
  source?: Source
}

export declare interface HandleSearchProps {
  term: string
  coords?: Coordinate
}

export declare interface CreateMarkersPointsItem {
  style?: Style
  image?: Image
  iconUrl?: string
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

export declare type ResultHoverCallback = (...[arg]: any[]) => any
export declare type ResultClickCallback = (...[arg]: any[]) => any

declare type EventsEmits<T extends keyof EmitData> = (
  event: T,
  arg: EmitData[T]
) => void
declare interface EmitData {
  "on-click": {
    event?: ol.MapBrowserEvent
    marker?: ol.layer.Vector
    coords?: ol.Coordinate
    apiData?: PrimaryReverseResult
    map: OlMap | null
    selectedFeature?: ol.Feature
  }
  "on-zoom": number
}
export declare interface EventsMixinProps {
  emits: EventsEmits<keyof EmitData>
  store: Store
  resultHoverCallback?: ResultHoverCallback
  resultClickCallback?: ResultClickCallback
  markerHoverCallback?: MarkerHoverCallback
  popupOnMarkerHover: boolean
  popupOnResultHover: boolean
  zoomOnMarkerClick: boolean
  zoomOnResultClick: boolean
  reverseOnClick: boolean
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
  iconUrl?: string
  iconScale: number
}
