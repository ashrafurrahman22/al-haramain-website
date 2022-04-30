import React from 'react';
import google from '../../../images/Social icon/google.png';
import facebook from '../../../images/Social icon/facebook.png';
import github from '../../../images/Social icon/github.png';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className='d-lg-flex'>
           <div className='m-2'>
           <button className='btn btn-info gap-2 d-flex rounded-3 align-items-center justify-content-center'>
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
    );
};

export default SocialLogin;