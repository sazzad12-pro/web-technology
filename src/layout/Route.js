import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);
