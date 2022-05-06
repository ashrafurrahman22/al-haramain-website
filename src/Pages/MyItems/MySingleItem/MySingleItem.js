import React from 'react';
import { Card } from 'react-bootstrap';

const MySingleItem = ({item}) => {
    const {name, img, description, quantity, supplier, price} = item;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}
          </Card.Text>
          <Card.Text>Price: ${price}
          </Card.Text>
          <Card.Text>Quantity: {quantity}ml
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default MySingleItem;