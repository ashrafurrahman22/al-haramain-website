import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ManageItems.css'

const ManageItems = () => {
    const [products] = useProducts();

    return (
        <div>
            <div className='text-center my-3'>
            <Link className='btn btn-primary w-50' to='/additem'>Add New Item</Link>
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