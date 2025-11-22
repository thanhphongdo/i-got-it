import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { code } from "./codes/code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import { useDeferredValue, useMemo, useState } from "react";

export function Example() {
  const [list] = useState<string[]>(
    Array(20000)
      .fill("")
      .map(() => Math.ceil(Math.random() * 20000).toString())
  );

  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const filteredList = useMemo(() => {
    return list.filter((item) => item.includes(deferredSearch));
  }, [list, deferredSearch]);

  return (
    <div>
      <div className="mb-4 font-bold underline">Search Number</div>
      <div className="mb-4">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="overflow-auto">
        <ul className="flex gap-1">
          {filteredList.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function UseDeferredValue() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer images={[img1, img2, img3, img4]} />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={code} />
        <Example />
      </Collapse>
    </div>
  );
}
