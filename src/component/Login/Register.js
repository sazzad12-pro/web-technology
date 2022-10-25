import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const Register = () => {
  // useContext googleProvider
  const { singInGoogle } = useContext(AuthContext);
  const handleGoogle = () => {
    singInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="fs-3 fw-bold text-primary text-center">Please Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URl</Form.Label>
          <Form.Control type="photo" placeholder=" please give your Photo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>

        <h5 className="mt-1">
          Already Account<Link to="/login">Login</Link>{" "}
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

export default Register;
