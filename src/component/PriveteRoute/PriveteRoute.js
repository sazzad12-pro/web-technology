import React from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const PriveteRoute = ({ children }) => {
  const { user, lodding } = useContext(AuthContext);
  const location = useLocation();

  if (lodding) {
    return <Spinner animation="grow" />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PriveteRoute;
