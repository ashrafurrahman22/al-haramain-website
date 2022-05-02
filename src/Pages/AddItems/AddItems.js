import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product  Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Image URL" required />
          <Form.Label>Product Short Description</Form.Label>
          <Form.Control type="text" placeholder="Description" required />
        </Form.Group>
        <p className="text-center"></p>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
        </div>
    );
};

export default AddItems;