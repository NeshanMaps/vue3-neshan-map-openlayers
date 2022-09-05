import  { stateGenerator }  from "./state"
import { getters } from "./getters"
import { actions } from "./actions"
import { Actions } from "./store.model"

const storeGen = () => {
  const actionModulesKeys = <(keyof Actions)[]>Object.keys(actions)
  const storeActions = actionModulesKeys.reduce((sa, amk) => {
    type mamd = typeof amk
    const actionKeys = <(keyof typeof actions[typeof amk])[]>Object.keys(actions[amk])
    const contextFreeActions = actionKeys.reduce((cfa, ak) => {
      return () => actions[amk][ak]()
    })
    return sa
  }, {})

  return { state: stateGenerator(), getters, actions }
}
export const store = storeGen()

export type StoreType = typeof store