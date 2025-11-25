import img01 from "./images/img-01.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { code } from "./codes/code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import { useSyncExternalStore } from "react";

let listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return window.innerWidth;
}

window.addEventListener("resize", () => {
  listeners.forEach((listener) => listener());
});

export const windowSizeStore = { subscribe, getSnapshot };

export function Example() {
  const width = useSyncExternalStore(
    windowSizeStore.subscribe,
    windowSizeStore.getSnapshot
  );

  return <div>Window width: {width}px</div>;
}

export function UseSyncExternalStore() {
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
