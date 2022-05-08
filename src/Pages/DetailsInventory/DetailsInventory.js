import { fa8, faCoffee, faPerson, faPersonBiking, faPersonWalking, faStore, faStoreAlt, faStoreAltSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProductDetail from '../../Hooks/useProductDetail';
import useProducts from '../../Hooks/useProducts';
import './DetailsInventory.css'; 

const DetailsInventory = () => {
    const {productId} = useParams();
    const [data] = useProductDetail(productId);
    const [user, setUser] = useState({});

    useEffect(()=>{
      const url = `https://safe-basin-69461.herokuapp.com/product/${productId}`
      fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
    }, [])

    const {name, img, price, description, quantity, supplier} = data;

    const handleRestock = event => {
        event.preventDefault();
        const amount = event.target.amount.value;
        if (amount > 0){
          const parsedQuantity = parseInt(quantity);
        const total = parsedQuantity + parseInt(amount);
        console.log(total);

        const newItem = {...data,quantity:total} ;
        console.log(newItem);

        // send data to server
        const url = `https://safe-basin-69461.herokuapp.com/product/${productId}`
        fetch(url, {
          method : 'PUT',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
          console.log('success', data);
          toast('Stock Amount Updated Successfully');
          event.target.reset();
        })
        }
        else {
          alert('Please Type a Positive amount of Stock')
          event.target.reset();
        }
    }

    const handleDelivered = () => {
      const itemQuantity = parseInt(quantity);
      const delivered = itemQuantity - 1;
      console.log(delivered);
      const newItem = {...data,quantity:delivered} ;
      console.log(newItem);

      // send data to server
      const url = `https://safe-basin-69461.herokuapp.com/product/${productId}`
      fetch(url, {
        method : 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(newItem)
      })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        toast('Delivered Successfully');
      })
    }

    return (
        <div id='details'>
            <div className='container gap-5 my-3 d-lg-flex align-items-center justify-content-center'>
                      <div className='w-50'><img className='rounded-3 img-fluid w-100' src={img} alt="" /></div>
                      <div className='w-50'>
                          <h3>{name}</h3>
                        <p>{description}</p>
                      <h5>Price: ${price}</h5>
                      <h5>Supplier: {supplier}</h5>
                      <h2 className='text-center'>Stock/Quantity:  { quantity ?  <span>{quantity}ml</span> : <span>Sold Out</span> } </h2>
                      
                      <div id='restock'>
                        <h3 className='text-center my-2'>Update Stock</h3>
                      <form onSubmit={handleRestock} className='my-3'>
                        <input className='w-100 rounded-3' type="text" name="amount" placeholder='Put your stock amount' required/>
                        <input className='btn btn-primary w-100 my-3' type="submit" value="Restock"/>
                      </form>
                      <h4 className='text-center mb-3'>Is Delivery Complete?</h4>
                      <button onClick={handleDelivered} className='btn btn-primary w-100'>Delivered
                      <FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon>
                      </button>
                      </div>
                      <ToastContainer></ToastContainer>
                      </div>
                  </div>
        </div>
    );
};

export default DetailsInventory;