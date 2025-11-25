import "./App.css";
import { RouterProvider } from "react-router";
import { routes } from "./routers";

function App() {
  return (
    <>
      <div className="p-4 text-gray-200">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
