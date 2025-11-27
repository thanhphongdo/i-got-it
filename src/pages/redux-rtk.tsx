import { useDispatch, useSelector } from "react-redux";
import { RTKStoreProvider } from "../components/redux-rtk/Provider";
import { AppDispatch, RootState } from "../components/redux-rtk/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../components/redux-rtk/slides/counter";
import { fetchTodo, setTodo } from "../components/redux-rtk/slides/todos";
import { useGetTodoQuery } from "../components/redux-rtk/services/api";
import { useEffect } from "react";

const CounterValue = () => {
  const value = useSelector((state: RootState) => state.counter.value);
  return <div>Counter: {value}</div>;
};

const CounterActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
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
          dispatch(fetchTodo(1));
        }}
      >
        Fetch Todo
      </button>
    </div>
  );
};

const Todos2 = function () {
  const dispatch = useDispatch<AppDispatch>();
  const title = useSelector((state: RootState) => state.todos.todo?.title);
  const loading = useSelector((state: RootState) => state.todos.loading);

  const { data, error, isLoading } = useGetTodoQuery(1);

  useEffect(() => {
    console.log("Fetched data:", data);
    if (data?.title) {
      dispatch(setTodo(data));
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-4 border border-gray-400 rounded-md p-4 w-96">
      <div>Todo title: {title ?? "No Title"}</div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        style={{
          opacity: loading ? 0.5 : 1,
        }}
        onClick={() => {
          dispatch(fetchTodo(2));
        }}
      >
        Fetch Todo
      </button>
    </div>
  );
};

export default function ReduxRTK() {
  return (
    <RTKStoreProvider>
      <div className="flex flex-col gap-4">
        <CounterValue />
        <CounterActions />
        <Todos />
        <Todos2 />
      </div>
    </RTKStoreProvider>
  );
}
