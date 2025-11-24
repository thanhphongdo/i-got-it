export const code = `
function BoxWithEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref?.current?.scrollHeight ?? 0);
  }, []);

  return (
    <div
      ref={ref}
      className="overflow-hidden bg-red-300 transition-all duration-700"
      style={{ height }}
    >
      <p className="p-4">
        This box uses <strong>useEffect</strong>. You will see it first appears
        at height 0, then jumps to full height → causing a flash.
      </p>
    </div>
  );
}

function BoxWithLayoutEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref?.current?.scrollHeight ?? 0);
  }, []);

  return (
    <div
      ref={ref}
      className="overflow-hidden bg-blue-300 transition-all duration-700"
      style={{ height }}
    >
      <p className="p-4">
        This box uses <strong>useLayoutEffect</strong>. It never displays height
        0. It smoothly animates immediately.
      </p>
    </div>
  );
}

export function Example() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col gap-8 h-40">
      <div className="flex gap-4">
        <BoxWithEffect key={key} />
        <BoxWithLayoutEffect key={key + 1000} />
      </div>

      <div className="flex-1 flex items-end">
        <button
          className="px-4 py-2 bg-green-300"
          onClick={() => setKey((k) => k + 1)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
`;
