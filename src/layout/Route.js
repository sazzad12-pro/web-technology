import { createBrowserRouter } from "react-router-dom";
import AllDetails from "../component/Detail/AllDetails";
import Detail from "../component/Detail/Detail";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import NotFound from "../component/NotFound/NotFound";
import PriveteRoute from "../component/PriveteRoute/PriveteRoute";
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
        loader: () => fetch("https://my-app-ashen-seven.vercel.app/tech"),
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/tec/:userId",
        element: <Detail></Detail>,
        loader: async ({ params }) => {
          return fetch(
            `https://my-app-ashen-seven.vercel.app/technology/${params.userId}`
          );
        },
      },
      {
        path: "/checkout/:usersId",
        element: (
          <PriveteRoute>
            {" "}
            <AllDetails></AllDetails>
          </PriveteRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://my-app-ashen-seven.vercel.app/details/${params.usersId}`
          );
        },
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
