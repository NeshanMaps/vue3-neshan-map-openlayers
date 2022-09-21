import { state } from "./state";
import { actions } from "./actions";
import { storeGen } from ".";
export declare type State = typeof state;
export declare type Actions = typeof actions;
export declare type Store = ReturnType<typeof storeGen>;
export declare interface Context {
    state: State;
    actions: Actions;
    getters: any;
}
