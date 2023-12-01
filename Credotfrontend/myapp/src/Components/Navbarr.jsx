
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import{BsCart} from 'react-icons/bs'
import './Style/Navbarr.css'
import { useNavigate } from 'react-router-dom';

const Navbarr = () => {

  const navigate=useNavigate()
  const cart=()=>{
    navigate('/commoncart')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#home" disabled>Home</Nav.Link>
            <Nav.Link href="#shoeid">Shoes</Nav.Link>
            <Nav.Link href="#bagid">Bagpack</Nav.Link>
            <Nav.Link href="#contactid">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#cart">
              <i className="bi bi-cart"> <BsCart onClick={cart}/></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
