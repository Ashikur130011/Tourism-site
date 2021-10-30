import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
  const{user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" >
              <Container>
                <Link to='/'>
                  <img src={logo} alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home" className="fw-bold text-black fs-5" >Home</Nav.Link>
                <Nav.Link as={Link} to="/packages" className="fw-bold text-black fs-5" >Packages</Nav.Link>
                <Nav.Link as={Link} to="/about" className="fw-bold text-black fs-5" >About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="fw-bold text-black fs-5" >Contact</Nav.Link>
                

                {/* logged in person's identity */}
                <Navbar.Text>
                    <h4 className="me-3"> { user?.displayName}</h4>
                </Navbar.Text>
            {  user?.photoURL &&  <div className="p-3">
                <img className=" rounded-circle" width="50"
                height="50" src={user?.photoURL} alt="" />
                </div>}

                <div>
                    {user?.email ?
                    <Button onClick={logOut} variant="success">Log Out</Button>:
                    <Nav.Link as={Link} to="/login"><span className="text-dark fw-bold fs-5">Log In</span></Nav.Link>}
                </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;