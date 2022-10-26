import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./layout/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./UseContext/UseContext";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className="main" id={theme}>
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
