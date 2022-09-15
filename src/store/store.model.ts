import { state } from "./state"
import { actions } from "./actions"
import { storeGen } from "."

export type State = typeof state
export type Actions = typeof actions
export type Store = ReturnType<typeof storeGen>

export declare interface Context {
  state: State
  actions: Actions
  getters: any
}