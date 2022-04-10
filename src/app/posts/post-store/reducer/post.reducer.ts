import { Action, createReducer } from '@ngrx/store';

export interface InitialPostStateType {
  posts: any[];
}

export const InitialPostState: InitialPostStateType = {
  posts: [],
};

export const postReducer = (
  state: InitialPostStateType | undefined,
  action: Action
) => {
  return _postReducer(state, action);
};

const _postReducer = createReducer(InitialPostState);
