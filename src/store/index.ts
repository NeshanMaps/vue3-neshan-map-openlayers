import { reactive } from "vue"
import { state } from "./state"

export const store = reactive({
  state,
  toggleLoading(value: boolean) {
    this.state.loading = value
  },
})




