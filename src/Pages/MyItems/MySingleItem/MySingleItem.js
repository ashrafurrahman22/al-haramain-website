import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MySingleItem = ({item}) => {
    const {name, img, description, quantity, supplier, price} = item;
    
    const handleDelete = id =>{
      const procede = window.confirm('Are You Sure?');
      if(procede){
        const url = `https://safe-basin-69461.herokuapp.com/addItem/${id}`
        fetch(url, {
          method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
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
          <Button onClick={()=>handleDelete(item._id)} variant="primary" className='w-100'>Delete Item</Button>
        </Card.Body>
      </Card>
    );
};

export default MySingleItem;