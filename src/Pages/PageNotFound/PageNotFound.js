import React from 'react';
import pagenotfoundimg  from '../../images/404 img.png';

const PageNotFound = () => {
    return (
        <div>
            <img className='w-100 img-fluid' src={pagenotfoundimg} alt="" />
        </div>
    );
};

export default PageNotFound;