import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../images/Carousel/carousel 1.jpg'
import carousel2 from '../../images/Carousel/carousel 2.jpg'
import carousel3 from '../../images/Carousel/carousel 3.jpg'
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])
    return (
        <div>
            {/* banner div */}
            <div>
            <img className='img-fulid w-100' src={carousel1} alt="" />
            <img className='img-fulid w-100' src={carousel2} alt="" />
            <img className='img-fulid w-100' src={carousel3} alt="" />
            </div>
        {/* inventory div */}
        <div id='inventoryitem'>
            <h3 className='text-center my-3 p-2'>New Arrival</h3>
            <div className='container' id='products'>
            {
                products.map(product => <Product
                product = {product}
                ></Product>  )
            }
            </div>
        </div>
        </div>
    );
};

export default Home;