import React from 'react';
import { Card } from 'react-bootstrap';

const SingleProduct = ({product}) => {
    const {name, img, price, description, quantity, supplier} = product;
    return (
    <Card style={{ width: '18rem' }}>
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
        <button className='btn btn-primary w-100'>Delete Item</button>
      
    </Card.Body>
  </Card>
    );
};

export default SingleProduct;