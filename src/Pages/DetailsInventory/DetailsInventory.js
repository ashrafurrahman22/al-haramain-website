import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const DetailsInventory = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});


    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            const productDetails = data?.filter(p => p.id === + productId)
            setProduct(productDetails)
        })
    } , [])

    const {id,name, img, price, description, quantity, supplier} = product[0] || {};
    console.log('product',product);  
    return (
        <div> 
                    
              {
                  product && <div className='container gap-5 my-3 d-lg-flex align-items-center justify-content-center'>
                      <div className='w-50'><img className='rounded-3 img-fluid w-100' src={img} alt="" /></div>
                      <div className='w-50'>
                          <h3>{name}</h3>
                        <p>{description}</p>
                      <h5>Quantity: {quantity}</h5>
                      <h5>Supplier: {supplier}</h5>
                      <button className='btn btn-primary w-100'>Delivered</button>
                  <button className='btn btn-primary w-100 mt-3'>Restock</button>
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