export const code = `
export function UseDeferredValueExample() {
  const [list] = useState<string[]>(
    Array(20000)
      .fill("")
      .map(() => Math.ceil(Math.random() * 20000).toString())
  );

  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const filteredList = useMemo(() => {
    return list.filter((item) => item.includes(deferredSearch));
  }, [list, deferredSearch]);

  return (
    <div>
      <div className="mb-4 font-bold underline">Search Number</div>
      <div className="mb-4">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="overflow-auto">
        <ul className="flex gap-1">
          {filteredList.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
`;
