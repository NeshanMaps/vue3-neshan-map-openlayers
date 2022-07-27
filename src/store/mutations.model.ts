import { State } from "./state.model"

interface MutationFunctions {
  toggleLoading(value: boolean): void
}
type StoreState = {
  state?: State
}
export declare type Mutations = MutationFunctions & StoreState