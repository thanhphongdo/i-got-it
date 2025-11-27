import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "./counter-type";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export interface IncrementByAmountAction {
  type: typeof INCREMENT_BY_AMOUNT;
  payload: number;
}

export type CounterAction =
  | IncrementAction
  | DecrementAction
  | IncrementByAmountAction;

export const increment = (): IncrementAction => ({ type: INCREMENT });
export const decrement = (): DecrementAction => ({ type: DECREMENT });
export const incrementByAmount = (amount: number): IncrementByAmountAction => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});
