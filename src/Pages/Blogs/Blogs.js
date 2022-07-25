import React from 'react';
import gifhy from '../../images/blogs.gif';

const Blogs = () => {
  return (
    <div className='my-5'>
    <h2 className="text-2xl text-center font-semibold uppercase">Coming Soon...</h2>
    <div className='d-flex align-items-center justify-content-center
    items-center'>
        <img className='rounded img-fluid p-2' src={gifhy} alt="" />
    </div>
    </div>
  );
};

export default Blogs;