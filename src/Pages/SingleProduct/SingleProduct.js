import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './SingleProduct.css';

const SingleProduct = ({product}) => {
    const {name, img, price, description, quantity, supplier, _id} = product;
    const [products, setProducts] = useProducts();

    const handleDelete = id =>{
      const procede = window.confirm('Are You Sure?');
      if(procede){
        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
          method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          const remaining = products.filter(product => product._id !== id);
          console.log(remaining);
          setProducts(remaining);
        })
      }
    }


    return (
    <div>
          {/* my design */}
          <div id='singleProduct' className='d-lg-flex align-items-center justify-content-between'>
              <div className='w-25'>
                <img id='myImg' className='img-fluid-lg' src={img} alt="" />
              </div>
              <div className='d-lg-flex align-items-center justify-content-between gap-5'>
                  <h3>{name}</h3>
                  <h4>Price: ${price}</h4>
                  <h5>Quantity: {quantity}ml</h5>
                  
              </div>
              <div>
                <button onClick={()=>handleDelete(product._id)} className='btn btn-primary'>Delete
                <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
          </div>
    </div>
    );
};

export default SingleProduct;