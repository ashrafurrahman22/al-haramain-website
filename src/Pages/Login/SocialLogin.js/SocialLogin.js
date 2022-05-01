import React from 'react';
import google from '../../../images/Social icon/google.png';
import facebook from '../../../images/Social icon/facebook.png';
import github from '../../../images/Social icon/github.png';
import './SocialLogin.css'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    let errorElement;
    
    if(user || user1 || user2){
        navigate(from, { replace: true });
      }
    if(loading || loading1 || loading2){
        return <Loading></Loading>
    }
    if(error || error1 || error2){
        errorElement = error?.message;
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle();
    }
    const handleGithubSignIn = () =>{
        signInWithGithub();
    }
    const handleFacebookSignIn = () =>{
        signInWithFacebook();
    }

    return (
       <div>
           <p className='text-center'>{errorElement}</p>
            <div className='d-lg-flex'>
           <div className='m-2'>
           <button onClick={handleGoogleSignIn} className='btn btn-info gap-2 d-flex rounded-3 align-items-center justify-content-center'>
                <img src={google} alt="" />
                    <h5>Google Sign In</h5>
            </button>
           </div>
           <div className='m-2'>
           <button onClick={handleFacebookSignIn} className='btn btn-primary gap-2 d-flex rounded-3 align-items-center justify-content-center'>
                <img style={{width:'35px', heigth: '35px'}} src={facebook} alt="" />
                    <h5>Facebook Sign In</h5>
            </button>
           </div>
        <div className='m-2'>
        <button onClick={handleGithubSignIn} className='btn btn-dark d-flex gap-2 rounded-3 align-items-center justify-content-center'>
                <img src={github} alt="" />
                    <h5>Github Sign In</h5>
            </button>
        </div>
        </div>
       </div>
    );
};

export default SocialLogin;