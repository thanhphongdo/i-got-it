export const code = `
type ExampleState = {
  count: number;
};

type ExampleAction = {
  type: "increment" | "decrement";
};

export function Example() {
  const reducer = (state: ExampleState, action: ExampleAction) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return (
    <div className="flex gap-4 items-center">
      <div>Count: {state.count}</div>
      <button
        className="bg-green-200 px-4 py-2 rounded-md"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="bg-red-200 px-4 py-2 rounded-md"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
    </div>
  );
}
`;
