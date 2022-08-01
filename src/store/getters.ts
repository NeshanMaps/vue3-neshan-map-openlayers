import { state } from "./state"
export const getters = {
  screen: () => {
    return {
      small: state.breakpoints.lt.md,
    }
  },
}
