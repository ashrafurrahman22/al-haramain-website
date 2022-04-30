import React from 'react';
import './Footer.css';
import logo from '../../../images/header logo.jpg';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div id='footer'>
            <div>
            <div className='mt-4 d-flex flex-column align-items-center px-3 py-1'>
                <img id='footer-img' src={logo} alt="" />
                <p><small>Al haramain Perfumes</small></p>
                <p>Al Haramain Perfumes is based in United Arab Emirates is and well known for the production of traditional Arabian fragrances in several forms and concentrations: attars, home fragrances, incenses.</p>
            </div>
            </div>
            <div className='text-center d-flex align-items-center mt-5 mx-5 pt-3 px-5'>
                <p><small>Copyright © {year} Al Haramain. <br /> All rights reserved.</small></p>
            </div>
            <div className='mt-5 d-flex align-items-center justify-content-center flex-column'>
                <p><small>Privacy & Policy</small></p>
                <p><small>Agreements & Rules</small></p>
                <p><small>FAQs</small></p>
            </div>
        </div>
    );
};

export default Footer;