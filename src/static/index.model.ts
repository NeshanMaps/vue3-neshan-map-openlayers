import { inlineSvgs, defaultIcons } from "."
export type RouteTypes = keyof typeof inlineSvgs
export type CategoryName = keyof typeof defaultIcons
export declare interface Icon {
  d: string
  color?: string
  size?: number
  scale?: number
}