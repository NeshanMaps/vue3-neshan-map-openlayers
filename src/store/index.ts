// eslint-disable-next-line
// @ts-nocheck
import { stateGenerator } from "./state"
import { getters } from "./getters"
import { actions } from "./actions"

const storeGen = () => {
  const state = stateGenerator()
  const storeGetters = getters(state)
  const context = {
    actions,
    getters: storeGetters,
    state,
  }

  // To inject context into actions
  const actionModulesKeys = Object.keys(actions)
  const storeActions: any = actionModulesKeys.reduce((sa, amk) => {
    const actionKeys = Object.keys(actions[amk])
    const contextFreeActions = actionKeys.reduce((cfa, ak) => {
      return {
        ...cfa,
        [ak]: (...args) => actions[amk][ak](context, ...args),
      }
    }, {})
    return { ...sa, [amk]: contextFreeActions }
  }, {})

  return { state, getters: storeGetters, actions: storeActions }
}
export const store = storeGen()
