import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({product}) => {
    const {name, img, price, description, quantity} = product;
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
      <p>Quantity: {quantity}</p>
    </div>
    <Button variant="primary">Update</Button>
  </Card.Body>
</Card>
    );
};

export default Product;