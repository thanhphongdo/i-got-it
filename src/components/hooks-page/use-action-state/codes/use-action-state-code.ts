export const useActionStateCode = `
interface FormState {
  message: string;
  success: boolean;
}

export function UseActionStateExample() {
  const loginFn = async (prevState: FormState, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      message: "Login success",
      success: true,
    };
  };
  const [state, submit, pending] = useActionState(loginFn, {
    message: "Please input email and password",
    success: false,
  });
  return (
    <>
      <form action={submit}>
        <div className="flex flex-col gap-4">
          <input name="email" placeholder="Email" type="text" />
          <input name="password" placeholder="Password" type="password" />
          <div>{\`\${pending ? "Please wait..." : state.message}\`}</div>
          <button
            type="submit"
            disabled={pending}
            className={\`\${pending ? "bg-green-600/50" : "bg-green-600"}\`}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
`;
