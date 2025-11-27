import { useDispatch, useSelector } from "react-redux";
import { StoreProvider } from "../components/redux/Provider";
import { AppDispatch } from "../components/redux/store";
import { RootState } from "../components/redux/reducers";
import { fetchTodo } from "../components/redux/actions";

const CounterValue = () => {
  const value = useSelector((state: RootState) => state.counter.value);
  return <div>Counter: {value}</div>;
};

const CounterActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleIncrementByAmount = () => {
    dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 5 });
  };
  return (
    <div className="flex gap-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleIncrementByAmount}
      >
        Increment by 5
      </button>
    </div>
  );
};

const Todos = function () {
  const dispatch = useDispatch<AppDispatch>();
  const title = useSelector((state: RootState) => state.todos.todo?.title);
  const loading = useSelector((state: RootState) => state.todos.loading);
  return (
    <div className="flex flex-col gap-4 border border-gray-400 rounded-md p-4 w-96">
      <div>Todo title: {title ?? "No Title"}</div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        style={{
          opacity: loading ? 0.5 : 1,
        }}
        onClick={() => {
          dispatch(fetchTodo());
        }}
      >
        Fetch Todo
      </button>
    </div>
  );
};

export default function Redux() {
  return (
    <StoreProvider>
      <div className="flex flex-col gap-4">
        <CounterValue />
        <CounterActions />
        <Todos />
      </div>
    </StoreProvider>
  );
}
