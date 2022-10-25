import { createBrowserRouter } from "react-router-dom";
import Detail from "../component/Detail/Detail";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Blog from "../Pages/Blog";
import Faq from "../Pages/Faq";
import Tech from "../Pages/Tech";
import Main from "./Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tech",
        element: <Tech></Tech>,
        loader: () => fetch("http://localhost:5000/tech"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/tec/:id",
        element: <Detail></Detail>,
      },
    ],
  },
]);
