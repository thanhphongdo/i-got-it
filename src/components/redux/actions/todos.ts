// src/store/todo/actions.ts
import { ThunkAction } from "redux-thunk";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from "./todos-type";
import { RootState } from "../reducers";

export interface FetchTodoRequestAction {
  type: typeof FETCH_TODO_REQUEST;
}

export interface FetchTodoSuccessAction {
  type: typeof FETCH_TODO_SUCCESS;
  payload: any;
}

export interface FetchTodoFailureAction {
  type: typeof FETCH_TODO_FAILURE;
  payload: string;
}

export type TodoAction =
  | FetchTodoRequestAction
  | FetchTodoSuccessAction
  | FetchTodoFailureAction;

export const fetchTodoRequest = (): FetchTodoRequestAction => ({
  type: FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (data: {
  title: string;
}): FetchTodoSuccessAction => ({
  type: FETCH_TODO_SUCCESS,
  payload: data,
});

export const fetchTodoFailure = (error: string): FetchTodoFailureAction => ({
  type: FETCH_TODO_FAILURE,
  payload: error,
});

export const fetchTodo =
  (): ThunkAction<void, RootState, unknown, TodoAction> =>
  async (dispatch, store) => {
    console.log(store().todos.todo);
    dispatch(fetchTodoRequest());
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = (await response.json()) as { title: string };
      dispatch(fetchTodoSuccess(data));
    } catch (error: any) {
      dispatch(fetchTodoFailure(error.message));
    }
  };
