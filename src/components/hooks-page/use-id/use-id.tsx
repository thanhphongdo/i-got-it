import img01 from "./images/img-01.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { code } from "./codes/code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import { useId } from "react";

function MyInput({ name, value }: { name: string; value: string }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="cursor-pointer">
        {name.replace("-", " ").toUpperCase()}
      </label>
      <input name={name} value={value} id={id} type="text" />
      <div>id: {id}</div>
    </div>
  );
}

export function Example() {
  return (
    <div className="flex gap-4">
      <MyInput name="first-name" value="John" />
      <MyInput name="last-name" value="Smith" />
    </div>
  );
}

export function UseId() {
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
