// eslint-disable-next-line
// @ts-nocheck
import { stateGenerator } from "./state"
import { getters } from "./getters"
import { actions } from "./actions"
import { Actions, ActionsModuleMapper, Context, RemoveFirstFromTuple } from "./store.model"

export const contextInjector = <T extends (...args: any) => ReturnType<T>>(
  func: T,
  context: Context
) => {
  return (...args: (RemoveFirstFromTuple<Parameters<T>>)) => func(context, ...args)
}

export const storeGen = () => {
  const state = stateGenerator()
  const storeGetters = getters(state)
  const context = {
    actions,
    getters: storeGetters,
    state,
  }

  // To inject context into actions
  const actionModulesKeys = Object.keys(actions)
  const storeActions: ActionsModuleMapper<Actions> = actionModulesKeys.reduce((sa, amk) => {
    const actionKeys = Object.keys(actions[amk])
    const contextFreeActions = actionKeys.reduce((cfa, ak) => {
      return {
        ...cfa,
        [ak]: contextInjector<typeof actions[amk][ak]>(
          actions[amk][ak],
          context
        ),
      }
    }, {})
    return { ...sa, [amk]: contextFreeActions }
  }, {})

  return { state, getters: storeGetters, actions: storeActions }
}
