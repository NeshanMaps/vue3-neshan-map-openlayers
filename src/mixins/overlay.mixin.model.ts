import { CoordsArr, Ol, OlMapRef } from "@/components/Map.model"
import { Ref } from "vue"

export declare type Overlay = Ol.Overlay

export declare interface OverlayMixinProps {
  map: OlMapRef
  popupContainer: Ref<HTMLElement | null>
  persistantContainer: Ref<HTMLElement | null>
}

export declare interface ChangeOverlayStatsProps {
  coords: CoordsArr
  text: string
}
export declare type ChangeOverlayStats = (
  options?: ChangeOverlayStatsProps,
  target?: "temporary" | "persistant"
) => void
