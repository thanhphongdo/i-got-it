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
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full text-red-300">{question}</h3>
      <a
        href={chatgpt}
        target="_blank"
        rel="noreferrer"
        className="underline italic"
      >
        {chatgpt}
      </a>
      <Collapse placeholder="Click to expend question">
        <div className="pb-8">
          <ImageViewer images={answers} />
        </div>
      </Collapse>
    </div>
  );
}
