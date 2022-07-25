import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ManageItems.css'

const ManageItems = () => {
    const [products] = useProducts();

    return (
        <div  style={{fontFamily:"Raleway"}}>
            <div className='text-center my-3'>
            </div>
            <div className='container my-3 w-100'>
            {
                products.map(product => <SingleProduct
                key={product._id}
                product = {product}
                ></SingleProduct> )
            }
        </div>
        </div>
    );
};

export default ManageItems;