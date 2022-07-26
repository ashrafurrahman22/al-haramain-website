import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name, img, price, description, quantity, supplier} = product;
    const navigate = useNavigate();

    const navigateToProductDetails = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <div>
    <h4>Price: ${price}</h4>
      <p>Quantity: {quantity}ml</p>
      <p>Supplier: {supplier}</p>
    </div>
      <button id='btn-update' onClick={() => navigateToProductDetails(product._id)} className="btn btn-primary w-100" >Update Stocks</button>
    
  </Card.Body>
</Card>
    );
};

export default Product;