import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MySingleItem = ({item}) => {
    const {name, img, description, quantity, supplier, price} = item;
    
    const handleClick = () =>{
      const procede = window.confirm('Are You Sure To Delete this item?');
      if(procede){
        console.log('success');
      }
    }
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
          <Button onClick={handleClick} variant="primary" className='w-100'>Delete Item</Button>
        </Card.Body>
      </Card>
    );
};

export default MySingleItem;