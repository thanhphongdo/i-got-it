import { useState } from "react";
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
            className="px-4 py-2 border rounded-md"
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {questionGroups.map((group) => {
          return (
            <div className="flex gap-4 flex-col" key={group.name}>
              <h2 className="text-2xl font-bold underline text-indigo-300">
                {group.name}
              </h2>
              <Collapse key={group.name} placeholder="Click to expand Group">
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
                      <Question
                        key={question.question}
                        question={question.question}
                        answers={question.answers}
                        chatgpt={question.chatgpt}
                      />
                    );
                  })}
              </Collapse>
            </div>
          );
        })}
      </div>
    </>
  );
}
