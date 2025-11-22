import { useState } from "react";
import { UseActionState } from "../components/hooks-page/use-action-state/use-action-state";
import { UseCallback } from "../components/hooks-page/use-callback/use-callback";
import { UseContext } from "../components/hooks-page/use-context/use-context";
import { UseDeferredValue } from "../components/hooks-page/use-deferred-value/use-deferred-value";
import { UseEffect } from "../components/hooks-page/use-effect/use-effect";
import { UseEffectEvent } from "../components/hooks-page/use-effect-event/use-effect-event";
import { UseId } from "../components/hooks-page/use-id/use-id";

export function Hooks() {
  const [keyword, setKeyword] = useState("");
  const hooks = [
    {
      name: "useActionState",
      component: UseActionState,
    },
    {
      name: "useCallback",
      component: UseCallback,
    },
    {
      name: "useContext",
      component: UseContext,
    },
    {
      name: "useDeferredValue",
      component: UseDeferredValue,
    },
    {
      name: "useEffect",
      component: UseEffect,
    },
    {
      name: "useEffectEvent",
      component: UseEffectEvent,
    },
    {
      name: "useId",
      component: UseId,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <h1 className="text-3xl font-bold underline flex-1">Learn Hooks</h1>
          <input
            className="px-4 py-2 border rounded-md"
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {hooks
          .filter((hook) =>
            hook.name.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((hook) => {
            return (
              <div key={hook.name} className="p-4 bg-gray-200 rounded-md">
                <div>
                  <h2 className="text-2xl font-bold underline">{hook.name}</h2>
                  <hook.component />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
