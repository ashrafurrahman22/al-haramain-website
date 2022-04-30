import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/header logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">
            <img id='headerLogo' src={headerLogo} alt="" />
            Al Haramain Perfumes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#inventoryitem">Inventory Items</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/manageitem">Manage Items</Nav.Link>
            <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
            <Nav.Link as={Link} to="/myitem">My Items</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;