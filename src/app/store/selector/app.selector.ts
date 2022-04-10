import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialStateType } from "../reducer/app.reducer";

const appSelector = createFeatureSelector<InitialStateType>("shared");

export const counterSelector = createSelector(appSelector, (state) => state.counter);