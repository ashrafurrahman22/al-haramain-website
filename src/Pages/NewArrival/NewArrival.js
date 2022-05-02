import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {name, img, price, quantity, supplier} = product;
    const navigate = useNavigate();

    const navigateToProductDetails = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title className='text-center'>{name}</Card.Title>
    <div className='text-center'>
    <h4>Price: ${price}</h4>
      <p>Quantity: {quantity}ml</p>
    </div>
      
    
  </Card.Body>
</Card>
    );
};

export default Product;