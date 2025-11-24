import img01 from "./images/img-01.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { code } from "./codes/code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import {
  PropsWithChildren,
  RefObject,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface TodoRef {
  addNew: (value: string) => void;
}

function Todo({
  children,
  ref,
}: PropsWithChildren & { ref: RefObject<TodoRef | null> }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn TypeScript",
    "Learn GraphQL",
    "Learn Next.js",
    "Learn React Native",
  ]);

  useImperativeHandle(ref, () => {
    return {
      addNew: (value: string) => {
        setTodos((prev) => [...prev, value]);
        listRef.current?.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth",
        });
      },
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="h-24 overflow-auto p-4 border border-red-400 rounded-lg"
        ref={listRef}
      >
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Example() {
  const todoRef = useRef<TodoRef>(null);
  const [value, setValue] = useState("");
  return (
    <Todo ref={todoRef}>
      <div className="flex gap-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-green-200 px-4 py-2 rounded-md"
          onClick={() => {
            if (!value.trim()) return;
            todoRef.current?.addNew(value.trim());
            setValue("");
          }}
        >
          Add
        </button>
      </div>
    </Todo>
  );
}

export function UseImperativeHandle() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer images={[img01]} />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={code} />
        <Example />
      </Collapse>
    </div>
  );
}
