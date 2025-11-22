export const code = `
export function Example() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleTickWithEffectEvent = useEffectEvent(() => {
    setCount1(count1 + 1);
  });

  const handleTickWithEffectNormal = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    const idWithEffectEvent = setInterval(() => {
      handleTickWithEffectEvent();
    }, 1000);

    const idWithEffectNormal = setInterval(() => {
      handleTickWithEffectNormal();
    }, 1000);

    return () => {
      clearInterval(idWithEffectEvent);
      clearInterval(idWithEffectNormal);
    };
  }, []);

  return (
    <div>
      Count 1: {count1}
      <br />
      Count 2: {count2}
    </div>
  );
}
`;
