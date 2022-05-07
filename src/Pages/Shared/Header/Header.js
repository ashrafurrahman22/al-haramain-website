import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import headerLogo from '../../../images/header logo.jpg';
import './Header.css';

const Header = () => {

  const [user, loading, error] = useAuthState(auth);
  const handleLogOut = () =>{
    signOut(auth);
  }

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">
            <img id='headerLogo' src={headerLogo} alt="" />
            Al Haramain Perfumes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
          </Nav>
          <Nav>
            {
              user ? <div className='d-lg-flex'>
            <Nav.Link as={Link} to="/manageitems">Manage Items</Nav.Link>
            <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
            <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
            <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
              </div> :
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;