import img01 from "./images/img-01.jpg";
import img02 from "./images/img-02.jpg";
import img03 from "./images/img-03.jpg";
import img04 from "./images/img-04.jpg";
import img05 from "./images/img-05.jpg";
import img06 from "./images/img-06.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { code } from "./codes/code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import { useReducer } from "react";

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

export function UseReducer() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer images={[img01, img02, img03, img04, img05, img06]} />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={code} />
        <Example />
      </Collapse>
    </div>
  );
}
