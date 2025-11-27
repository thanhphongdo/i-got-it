import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { todoReducer } from "./todos";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
