import { reactive } from "vue"
import { state } from "./state"
import { getters } from "./getters"
import { mutations } from "./mutations"

export const store = reactive({
  state,
  getters,
  ...mutations
})
