import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-50 mx-auto my-3 mb-5">
      <h2 className="text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <p className="text-center"></p>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <div>
        <div className="mt-3">
          <p className="d-inline">Don't have an Account?</p>{" "}
          <button className="btn btn-link text-decoration-none">
            <Link className="text-decoration-none" to="/signup">
              Sign Up
            </Link>
          </button>
        </div>
        <div>
          <p className="d-inline">Forget Password?</p>
          <button className="btn btn-link text-decoration-none">
            Reset Password
          </button>
        </div>
      </div>

      <div>
        <div className="d-flex">
          <p style={{ height: "1px" }} className="bg-dark"></p>
          <p>or</p>
          <p style={{ height: "1px" }} className="bg-dark"></p>
        </div>
      </div>
    </div>
  );
};

export default Login;