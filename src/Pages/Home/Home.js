import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../images/Carousel/carousel 1.jpg'
import carousel2 from '../../images/Carousel/carousel 2.jpg'
import carousel3 from '../../images/Carousel/carousel 3.jpg'
import Product from '../Product/Product';
import './Home.css';
import useProducts from '../../Hooks/useProducts.js';

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
                key={product.id}
                product = {product}
                ></Product>  )
            }
            </div>
        </div>
        </div>
    );
};

export default Home;