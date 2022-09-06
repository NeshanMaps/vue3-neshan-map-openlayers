import { reactiveState } from "./state"
import { actions } from "./actions"
import { storeGen } from "."

export type State = typeof reactiveState
export type Actions = typeof actions
export type Store = ReturnType<typeof storeGen>

export declare interface Context {
  state: State
  actions: Actions
  getters: any
}