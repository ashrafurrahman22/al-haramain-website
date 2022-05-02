import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../images/Carousel/carousel 1.jpg'
import carousel2 from '../../images/Carousel/carousel 2.jpg'
import carousel3 from '../../images/Carousel/carousel 3.jpg'
import Product from '../Product/Product';
import './Home.css';
import useProducts from '../../Hooks/useProducts.js';
import { Link } from 'react-router-dom';
import NewArrival from '../NewArrival/NewArrival';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div id='home'>
            {/* banner div */}
            <div>
            <img className='img-fulid w-100' src={carousel1} alt="" />
            <img className='img-fulid w-100' src={carousel2} alt="" />
            <img className='img-fulid w-100' src={carousel3} alt="" />
            </div>
        {/* inventory div */}
        <div>
            <h3 className='text-center my-3 p-2'>Inventory</h3>
            <div className='container my-3' id='products'>
            {
                products.slice(0,6).map(product => <Product
                key={product._id}
                product = {product}
                ></Product>  )
            }
            </div>
            <div className='text-center my-4'>
            <Link to='/manageitems' className='btn btn-primary'>Manage Inventory</Link>
            </div>
        </div>
            <div className='mx-5'>
            <h2 className='text-center my-3 p-2'>New Arrival</h2>
            <div id='newArrival'>
            {
                products.slice(6,10).map(product => <NewArrival
                    key={product._id}
                    product = {product}
                ></NewArrival>  )
            }
            </div>
                <div className='mx-5 my-5'>
                <h2 className='text-center my-3 p-2'>Gift Items</h2>
                    <div className='d-flex gap-3'>
                        <div className='w-50'>
                            <img className='img-fluid w-100' src={"https://shop.alharamainperfumes.com/media/wysiwyg/AHP_signature_Home_page.png"} alt="" />
                        </div>
                        <div className='w-50'>
                            <img className='img-fulid w-100' src={"https://shop.alharamainperfumes.com/media/wysiwyg/manage-rouge_Home_page_6_1_.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;