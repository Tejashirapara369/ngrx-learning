import { Action, createReducer, on } from "@ngrx/store";
import * as appAction from '../action/app.action'; 

export interface InitialStateType {
    counter: number;
}

export const InitialAppState: InitialStateType = {
    counter: 0
}

export const appReducer = (state: InitialStateType | undefined, action: Action) => {
    return _appReducer(state, action)
}

const _appReducer = createReducer(
    InitialAppState,
    on(appAction.increaseCounter, (state) => {
        return {...state, counter: state.counter + 1}
    }),
    on(appAction.decreaseCounter, (state) => {
        return {...state, counter: state.counter - 1}
    }),
    on(appAction.AddByNumber, (state, action) => {
        return {...state, counter: state.counter + action.counter}
    }),
    on(appAction.resetCounter, (state) => {
        return {...state, counter: 0}
    }),
)

