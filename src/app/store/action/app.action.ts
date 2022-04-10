import { createAction, props } from '@ngrx/store';

export const increaseCounter = createAction(
  '[Counter] Increase counter by one'
);

export const decreaseCounter = createAction(
  '[Counter] Decrease counter by one'
);

export const resetCounter = createAction('[Counter] Reset counter');

export const AddByNumber = createAction(
  '[Counter] Add custom number to counter',
  props<{ counter: number }>()
);
