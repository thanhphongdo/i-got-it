import useActionPageImage from "./images/use-action-state.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { useActionStateCode } from "./codes/use-action-state-code";
import { useActionState } from "react";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";

interface FormState {
  message: string;
  success: boolean;
}

export function Example() {
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
          <div>{`${pending ? "Please wait..." : state.message}`}</div>
          <button
            type="submit"
            disabled={pending}
            className={`${pending ? "bg-green-600/50" : "bg-green-600"}`}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export function UseActionState() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer images={[useActionPageImage]} />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={useActionStateCode} />
        <Example />
      </Collapse>
    </div>
  );
}
