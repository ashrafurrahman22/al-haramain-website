import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin.js/SocialLogin';

const Signup = () => {
    return (
        <div id="login" className="w-50 mx-auto my-3 mb-5">
      <h2 className="text-center">Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
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
          Sign Up
        </Button>
      </Form>

      <div>
        <div className="mt-3">
          <p className="d-inline">Already Have an Account?</p>{" "}
          <button className="btn btn-link text-decoration-none">
            <Link className="text-decoration-none" to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>

      <div className="m-2">
        <div className="d-flex align-items-center">
          <div id="orDiv"></div>
          <div className="mx-2">or</div>
          <div id="orDiv"></div>
        </div>
      </div>
      <div>
        <SocialLogin></SocialLogin>
        </div>
    </div>
    );
};

export default Signup;