import { reactiveState } from "./state"
import { actions } from "./actions"

export type State = typeof reactiveState
export type Actions = typeof actions

export declare interface Context {
  state: State
  actions: Actions
  getters: any
}