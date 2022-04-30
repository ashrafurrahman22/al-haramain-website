import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin.js/SocialLogin";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from "@firebase/util";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

  let errormsg;

  if(user){
    navigate(from, { replace: true });
  }
  if(loading || sending){
    return <Loading></Loading>
  }
  if(error || error1){
    errormsg = error?.message;
  }

  const handleEmail = event =>{
    setEmail(event.target.value)
  }
  const handlePassword = event =>{
    setPassword(event.target.value);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const handleResetPassword = async () => {
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sending-Email')
      }
      else{
          toast('Please Enter Your Email for reset')
      }
}

  return (
    <div id="login" className="w-50 mx-auto my-3 mb-5">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
        </Form.Group>
        <p className="text-center">{errormsg}</p>
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
          <button onClick={handleResetPassword} className="btn btn-link text-decoration-none">
            Reset Password
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
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
