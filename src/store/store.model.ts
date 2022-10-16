import { state } from "./state"
import { actions } from "./actions"
import { contextInjector, storeGen } from "."

export type State = typeof state
export type Actions = typeof actions
export type Store = ReturnType<typeof storeGen>

export declare interface Context {
  state: State
  actions: Actions
  getters: any
}

type Func = (context: Context, ...args: any) => any
export type ActionsModuleMapper<AM extends { [s: string]: { [y: string]: Func } }> = {
  [Module in keyof AM]: ActionsMapper<AM[Module]>
}

type ActionsMapper<Module extends { [s: string]: Func }> = {
  [A in keyof Module]: ChangedFunction<Module[A]>
}

class Wrapper<T extends Func, C extends Context = Context> {
  wrapped(e: T, context: C) {
    return contextInjector<T>(e, context)
  }
}
type FunctionChanger<T extends Func> = ReturnType<Wrapper<T>['wrapped']>
type ChangedFunction<F extends Func> = FunctionChanger<F>

// Not needed anywhere but thought it might be good leaving it here
export type ExcludeFromTuple<T extends readonly any[], E> =
    T extends [infer F, ...infer R] ? [F] extends [E] ? ExcludeFromTuple<R, E> :
    [F, ...ExcludeFromTuple<R, E>] : []

export type RemoveFirstFromTuple<T extends any[]> = 
  T['length'] extends 0 ? [] :
  (((...b: T) => void) extends (a: any, ...b: infer I) => void ? I : [])