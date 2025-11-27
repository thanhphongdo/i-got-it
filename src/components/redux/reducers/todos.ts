// src/store/todo/reducer.ts
import { TodoAction } from "../actions";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from "../actions";

export interface TodoState {
  todo: { title: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todo: null,
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        todo: { title: "loading..." },
        loading: true,
        error: null,
      };
    case FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todo: action.payload };
    case FETCH_TODO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
