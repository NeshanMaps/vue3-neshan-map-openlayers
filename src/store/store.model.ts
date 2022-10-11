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

type Func = (context: Context, ...args: any) => any
type ActionsModuleMapper<AM extends { [s: string]: { [y: string]: Func } }> = {
  [Module in keyof AM]: ActionsMapper<AM[Module]>
}

type ActionsMapper<Module extends { [s: string]: Func }> = {
  [A in keyof Module]: ChangedFunction<Module[A]>
}

type ChangedFunction<F extends Func> = (...args: Parameters<F>) => void

type MappedActions = ActionsModuleMapper<Actions>

type test = ActionsMapper<Actions["map"]>

type funcTest = ChangedFunction<Actions["map"]["setMapType"]>
