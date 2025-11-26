import { Fragment, useState } from "react";
import { questionGroups } from "./questions";
import { Collapse } from "../../components/shared/Collapse";
import { Question } from "../../components/shared/Question";

export function Interview() {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <h1 className="text-3xl font-bold underline flex-1">
            Interview Question
          </h1>
          <input
            className="px-4 py-2 border rounded-md bg-gray-700 text-white"
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {questionGroups.map((group) => {
          return (
            <div
              className="flex gap-4 flex-col p-4 border border-gray-400 rounded-md"
              key={group.name}
            >
              <h2 className="text-2xl font-bold underline text-indigo-300">
                {group.name}
              </h2>
              <Collapse
                key={group.name}
                placeholder={`${group.questions.length ? "Click to expand Group" : "No Questions in this Group"}`}
              >
                <div className="flex flex-col gap-4">
                  {group.questions
                    .map((item, index) => ({
                      ...item,
                      question: `Q${index + 1}: ${item.question}`,
                    }))
                    .filter((question) =>
                      question.question
                        .toLowerCase()
                        .includes(keyword.toLowerCase())
                    )
                    .map((question) => {
                      return (
                        <Fragment key={question.question}>
                          <Question
                            question={question.question}
                            answers={question.answers}
                            chatgpt={question.chatgpt}
                          />
                          {/* {qIndex < group.questions.length - 1 && (
                            <div className="w-1/2 h-[2px] bg-gray-400 self-center"></div>
                          )} */}
                        </Fragment>
                      );
                    })}
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    </>
  );
}
