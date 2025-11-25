export const code = `
let listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return window.innerWidth;
}

window.addEventListener("resize", () => {
  listeners.forEach((listener) => listener());
});

export const windowSizeStore = { subscribe, getSnapshot };

export function Example() {
  const width = useSyncExternalStore(
    windowSizeStore.subscribe,
    windowSizeStore.getSnapshot
  );

  return <div>Window width: {width}px</div>;
}
`;
