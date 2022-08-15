import { state } from "./state"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"

const storeGen = () => {
  return { state, getters, actions, ...mutations }
}
export const store = storeGen()
