import { fa8, faCoffee, faPerson, faPersonBiking, faPersonWalking, faStore, faStoreAlt, faStoreAltSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const DetailsInventory = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});


    const [products, setProducts] = useState([]);
    // const [quantities, setQuantity] = useState(0);
    useEffect( ()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            const productDetails = data?.filter(p => p.id === + productId)
            setProduct(productDetails)
        })
    } , [])

    const {name, img, price, description, quantity, supplier} = product[0] || {};

    const handleDeliver = () =>{
      
    }

    return (
        <div> 
                    
              {
                  product && <div className='container gap-5 my-3 d-lg-flex align-items-center justify-content-center'>
                      <div className='w-50'><img className='rounded-3 img-fluid w-100' src={img} alt="" /></div>
                      <div className='w-50'>
                          <h3>{name}</h3>
                        <p>{description}</p>
                      <h5>Price: ${price}</h5>
                      <h5>Quantity: {quantity}ml</h5>
                      <h5>Supplier: {supplier}</h5>
                      <button onClick={handleDeliver} className='btn btn-primary w-100'>Delivered
                      <FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon>
                      </button>
                      <form className='my-3'>
                        <input className='w-100 rounded-3' type="text" name="number" placeholder='Put your stock amount' />
                        <input className='btn btn-primary w-100 my-3' type="submit" value="Restock"/>
                      </form>
                  
                      </div>
                  </div>
                
                // <Card className='mx-auto my-2' style={{ width: '18rem' }}>
                //   <Card.Img variant="top" src={img} />
                //   <Card.Body>
                //     <Card.Title>{name}</Card.Title>
                //     <Card.Text>
                //       {description}
                //     </Card.Text>
                //     <h4>Price: ${price}</h4>
                //       <p>Quantity: {quantity}</p>
                //       <p>Supplier: {supplier}</p>
                //       <button className='btn btn-primary w-100'>Delivered</button>
                //       <button className='btn btn-primary w-100 mt-3'>Restock</button>
                //   </Card.Body>
                // </Card>
              }
        </div>
    );
};

export default DetailsInventory;