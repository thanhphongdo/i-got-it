import { createBrowserRouter } from "react-router";
import { Hooks } from "./pages/hooks";
export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "hooks",
        element: <Hooks />,
      },
    ],
  },
]);
