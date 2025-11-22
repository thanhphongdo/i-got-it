import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";
import img5 from "./images/img-5.jpg";
import img6 from "./images/img-6.jpg";
import img7 from "./images/img-7.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { useContextCode } from "./codes/use-context-code";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Theme {
  bgColor: string;
  textColor: string;
  setTheme?: (theme: Theme) => void;
}

const ThemeContext = createContext<Theme | undefined>(undefined);
export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>({
    bgColor: "yellow",
    textColor: "red",
  });
  return (
    <ThemeContext.Provider
      value={{
        bgColor: theme.bgColor,
        textColor: theme.textColor,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeExample() {
  const context = useContext(ThemeContext);
  return (
    <div className="flex gap-4 flex-col">
      <div
        style={{
          background: context?.bgColor,
          color: context?.textColor,
        }}
      >
        Please toggle Theme
      </div>
      <button
        className="px-4 py-2 bg-gray-400 rounded-md w-48"
        onClick={() => {
          context?.setTheme?.({
            bgColor: context.bgColor === "yellow" ? "red" : "yellow",
            textColor: context.textColor === "red" ? "yellow" : "red",
          });
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export function Example() {
  return (
    <ThemeProvider>
      <ThemeExample />
    </ThemeProvider>
  );
}

export function UseContext() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer images={[img1, img2, img3, img4, img5, img6, img7]} />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={useContextCode} />
        <Example />
      </Collapse>
    </div>
  );
}
