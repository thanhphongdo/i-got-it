import { createBrowserRouter } from "react-router";
import { Hooks } from "./pages/hooks";
import { Interview } from "./pages/interview/interview";
export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "hooks",
        element: <Hooks />,
      },
      {
        path: "interview",
        element: <Interview />,
      },
    ],
  },
]);
