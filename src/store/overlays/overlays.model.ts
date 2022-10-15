import { Ol } from "../../components/Map.model"
import { Coordinate } from "openlayers"
import { Ref } from "vue"
import { OlMap } from "../map/map.model"
import { Context } from "../store.model"

export declare type Overlay = Ol.Overlay

export declare interface OverlayMixinProps {
  map: OlMap | null
  popupContainer: Ref<HTMLElement | null>
  persistentContainer: Ref<HTMLElement | null>
}

export declare interface ChangeOverlayStatsProps {
  coords: Coordinate
  text: string
  offset?: number[]
}
export declare type ChangeOverlayStats = (
  context: Context,
  options?: ChangeOverlayStatsProps,
  target?: "temporary" | "persistent"
) => void
