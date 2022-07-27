export declare interface State {
  loading?: boolean
}

export declare interface BreakpointsSegments {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}
export declare interface BreakPoints extends BreakpointsSegments {
  lt: BreakpointsSegments
  gt: BreakpointsSegments
}