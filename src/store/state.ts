import { BreakPoints } from "./state.model"

export const breakpointsSegments = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
}
export const breakpointsSegmentsPixels = {
  xs: 599,
  sm: 1023,
  md: 1439,
  lg: 1919,
  xl: Infinity
}
export const state = {
  loading: false,
  breakpoints: {
    ...breakpointsSegments,
    lt: {...breakpointsSegments},
    gt: {...breakpointsSegments}
  } as BreakPoints
}