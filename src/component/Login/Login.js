import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-50 mx-auto">
      <h1 className="fs-3 fw-bold text-primary text-center">Please Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

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
        <Button className="w-100">Google</Button>
      </div>
    </div>
  );
};

export default Login;
