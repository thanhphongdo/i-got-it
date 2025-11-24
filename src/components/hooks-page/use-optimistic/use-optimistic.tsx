import img01 from "./images/img-01.jpg";
import img02 from "./images/img-02.jpg";
import img03 from "./images/img-03.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { code } from "./codes/code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import { startTransition, useOptimistic } from "react";

type LikeState = { liked: boolean; count: number };
type Action = { type: "like" | "unlike" };

export function Example() {
  const [likeState, addLike] = useOptimistic<LikeState, Action>(
    { liked: false, count: 0 },
    (state, action) => {
      switch (action.type) {
        case "like":
          return {
            liked: true,
            count: state.count + 1,
          };
        case "unlike":
          return {
            liked: false,
            count: state.count - 1,
          };
      }
      return state;
    }
  );

  const mockApi = async () => {
    return await new Promise<boolean>((resolve) =>
      setTimeout(() => {
        resolve(false);
      }, 1000)
    );
  };

  const handleClick = async () => {
    startTransition(() => {
      addLike({ type: "like" });
    });

    const success = await mockApi();

    if (!success) {
      startTransition(() => {
        addLike({ type: "unlike" });
      });
    }
  };

  return (
    <button className="px-4 py-2 bg-green-300 rounded" onClick={handleClick}>
      {likeState.liked ? "❤️" : "🤍"} {likeState.count}
    </button>
  );
}

export function UseOptimistic() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer images={[img01, img02, img03]} />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={code} />
        <Example />
      </Collapse>
    </div>
  );
}
