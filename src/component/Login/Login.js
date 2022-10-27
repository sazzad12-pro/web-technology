import React from "react";
import { useState } from "react";
import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../UseContext/UseContext";

const Login = () => {
  const [error, setError] = useState("");

  // useContext use
  const { singInGoogle, logInEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Google sing in
  const handleGoogle = () => {
    singInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // login with email and password
  const logInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInEmailPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast("successfully login");
        navigate(from, { replace: true });
        // navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast("something is wrong try agin");
        setError(err.message);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="fs-3 fw-bold text-primary text-center">Please Login</h1>
      <Form onSubmit={logInUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Text className="text-muted">{error}</Form.Text>

        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <h5 className="mt-1">Forget Your Password</h5>
        <h5>
          No Account<Link to="/register"> Register</Link>{" "}
        </h5>
      </Form>
      <div className="d-flex align-items-center mt-3 ">
        <div
          style={{
            width: "300px",
            height: "2px",
            backgroundColor: "black",
            marginTop: "0px",
          }}
        ></div>
        <h4 className="me-3   ms-3">Or</h4>
        <div
          style={{ width: "300px", height: "2px", backgroundColor: "black" }}
        ></div>
      </div>
      <div className="mt-3">
        <Button onClick={handleGoogle} className="w-100">
          Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
