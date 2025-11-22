import img1 from "./images/img-1.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { code } from "./codes/code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import { useEffect, useEffectEvent, useState } from "react";

export function Example() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleTickWithEffectEvent = useEffectEvent(() => {
    setCount1(count1 + 1);
  });

  const handleTickWithEffectNormal = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    const idWithEffectEvent = setInterval(() => {
      handleTickWithEffectEvent();
    }, 1000);

    const idWithEffectNormal = setInterval(() => {
      handleTickWithEffectNormal();
    }, 1000);

    return () => {
      clearInterval(idWithEffectEvent);
      clearInterval(idWithEffectNormal);
    };
  }, []);

  return (
    <div>
      Count 1: {count1}
      <br />
      Count 2: {count2}
    </div>
  );
}

export function UseEffectEvent() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer images={[img1]} />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={code} />
        <Example />
      </Collapse>
    </div>
  );
}
