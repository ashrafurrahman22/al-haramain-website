import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
    return (
        <div>
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <p className="text-center"></p>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
        </div>
    );
};

export default AddItems;