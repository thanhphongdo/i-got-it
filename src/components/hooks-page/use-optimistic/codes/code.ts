export const code = `
type LikeState = { liked: boolean; count: number };
type Action = { type: "like" | "unlike" };

export function Example() {
  const [likeState, addLike] = useOptimistic<LikeState, Action>(
    { liked: false, count: 0 },
    (state, action) => {
      switch (action.type) {
        case "like":
          return {
            liked: true,
            count: state.count + 1,
          };
        case "unlike":
          return {
            liked: false,
            count: state.count - 1,
          };
      }
      return state;
    }
  );

  const mockApi = async () => {
    return await new Promise<boolean>((resolve) =>
      setTimeout(() => {
        resolve(false);
      }, 1000)
    );
  };

  const handleClick = async () => {
    startTransition(() => {
      addLike({ type: "like" });
    });

    const success = await mockApi();

    if (!success) {
      startTransition(() => {
        addLike({ type: "unlike" });
      });
    }
  };

  return (
    <button className="px-4 py-2 bg-green-300 rounded" onClick={handleClick}>
      {likeState.liked ? "❤️" : "🤍"} {likeState.count}
    </button>
  );
}
`;
