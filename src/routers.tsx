import { createBrowserRouter } from "react-router";
import React, { lazy, Suspense } from "react";

const Hooks = lazy(() => import("./pages/hooks"));
const Interview = lazy(() => import("./pages/interview/interview"));
const Redux = lazy(() => import("./pages/redux"));

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "hooks",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Hooks />
          </Suspense>
        ),
      },
      {
        path: "interview",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Interview />
          </Suspense>
        ),
      },
      {
        path: "redux",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Redux />
          </Suspense>
        ),
      },
    ],
  },
]);
