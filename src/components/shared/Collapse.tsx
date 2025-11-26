import { PropsWithChildren, useState } from "react";
import chevronUp from "../../assets/images/chevron-up.svg";
import chevronDown from "../../assets/images/chevron-down.svg";

export function Collapse({
  children,
  placeholder,
}: PropsWithChildren & { placeholder?: string }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="relative w-full min-h-8">
      <div
        className="w-8 h-8 p-1 absolute right-2 top-2 flex justify-center items-center border border-gray-500 bg-gray-300 rounded-md cursor-pointer z-[50] select-none"
        onClick={() => setOpened(!opened)}
      >
        <img src={opened ? chevronUp : chevronDown} className="w-full" alt="" />
      </div>
      <div className={`w-full text-center ${opened ? "hidden" : "block"}`}>
        <span
          className="cursor-pointer font-bold"
          onClick={() => setOpened(!opened)}
        >
          {placeholder ?? "Click to expand"}
        </span>
      </div>
      {opened && <div className="w-full">{children}</div>}
      {/* <div className={`w-full ${opened ? "block" : "hidden"}`}>{children}</div> */}
    </div>
  );
}
