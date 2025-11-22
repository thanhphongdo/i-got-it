export const code = `
function MyInput({ name, value }: { name: string; value: string }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="cursor-pointer">
        {name.replace("-", " ").toUpperCase()}
      </label>
      <input name={name} value={value} id={id} type="text" />
      <div>id: {id}</div>
    </div>
  );
}

export function Example() {
  return (
    <div className="flex gap-4">
      <MyInput name="first-name" value="John" />
      <MyInput name="last-name" value="Smith" />
    </div>
  );
}
`;
