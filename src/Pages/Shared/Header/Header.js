import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" >
              <Container>
                <Link to='/'>
                  <img src={logo} alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home" className="fw-bold text-black" >Home</Nav.Link>
                <Nav.Link as={Link} to="/packages" className="fw-bold text-black" >Packages</Nav.Link>
                <Nav.Link as={Link} to="/about" className="fw-bold text-black" >About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="fw-bold text-black" >Contact</Nav.Link>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;