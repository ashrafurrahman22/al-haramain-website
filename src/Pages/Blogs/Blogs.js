import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div id='blogs' className=" mx-auto my-3">
            <div>
            <Dropdown className='my-3'>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    Difference between javascript and nodejs ?
  </Dropdown.Toggle>

  <Dropdown.Menu>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusantium facere inventore nisi nam distinctio repudiandae aliquam id officia, molestiae tempora facilis sint maxime dolorem ullam expedita odio? Unde?</p>
  </Dropdown.Menu>
</Dropdown>
            <Dropdown className='my-3'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  When should you use nodejs? <br /> when should you use mongodb ?
  </Dropdown.Toggle>

  <Dropdown.Menu>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusantium facere inventore nisi nam distinctio repudiandae aliquam id officia, molestiae tempora facilis sint maxime dolorem ullam expedita odio? Unde?</p>
  </Dropdown.Menu>
</Dropdown>
            <Dropdown className='my-3'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Differences between sql and nosql databases?
  </Dropdown.Toggle>

  <Dropdown.Menu>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusantium facere inventore nisi nam distinctio repudiandae aliquam id officia, molestiae tempora facilis sint maxime dolorem ullam expedita odio? Unde?</p>
  </Dropdown.Menu>
</Dropdown>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  What is the purpose of jwt and how does it work?
  </Dropdown.Toggle>

  <Dropdown.Menu>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusantium facere inventore nisi nam distinctio repudiandae aliquam id officia, molestiae tempora facilis sint maxime dolorem ullam expedita odio? Unde?</p>
  </Dropdown.Menu>
</Dropdown>
            </div>
        </div>
    );
};

export default Blogs;