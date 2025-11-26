import { Collapse } from "./Collapse";
import { ImageViewer } from "./ImageViewer";

export function Question({
  question,
  answers,
  chatgpt,
}: {
  question: string;
  answers: Array<string>;
  chatgpt?: string;
}) {
  return (
    <div className="flex flex-col gap-4 items-start border border-gray-400 bg-gray-900/30 p-4 rounded-md">
      <Collapse
        placeholder="Click to expend question"
        title={
          <>
            <h3 className="underline font-bold w-full text-green-200 text-2xl">
              {question}
            </h3>
            <a
              href={chatgpt}
              target="_blank"
              rel="noreferrer"
              className="underline italic text-xs"
              onClick={(e) => e.stopPropagation()}
            >
              {chatgpt}
            </a>
          </>
        }
      >
        <div className="pb-8">
          <ImageViewer images={answers} />
        </div>
      </Collapse>
    </div>
  );
}
