export const useContextCode = `
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

export function UseContextExample() {
  return (
    <ThemeProvider>
      <ThemeExample />
    </ThemeProvider>
  );
}
`;
