import { applyMiddleware, createStore, Middleware } from "redux";
import { rootReducer, RootState } from "./reducers";
import { thunk, ThunkDispatch } from "redux-thunk";
import { CounterAction, TodoAction } from "./actions";

// const middleWare: Middleware = (store) => (next) => (action) => {
//   console.log("Dispatching:", action);
//   const result = next(action);
//   console.log("Next State:", store.getState());
//   return result;
// };

export const store = createStore(rootReducer, applyMiddleware(thunk) as any);

export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  CounterAction | TodoAction
>;
