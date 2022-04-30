import React from 'react';
import google from '../../../images/Social icon/google.png';
import facebook from '../../../images/Social icon/facebook.png';
import github from '../../../images/Social icon/github.png';
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }
    if(error){
        errorElement = error.message;
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle();
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
           <button className='btn btn-primary gap-2 d-flex rounded-3 align-items-center justify-content-center'>
                <img style={{width:'35px', heigth: '35px'}} src={facebook} alt="" />
                    <h5>Facebook Sign In</h5>
            </button>
           </div>
        <div className='m-2'>
        <button className='btn btn-dark d-flex gap-2 rounded-3 align-items-center justify-content-center'>
                <img src={github} alt="" />
                    <h5>Github Sign In</h5>
            </button>
        </div>
        </div>
       </div>
    );
};

export default SocialLogin;