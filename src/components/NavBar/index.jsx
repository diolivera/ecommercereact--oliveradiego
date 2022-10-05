import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GOOD GAME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/category/consolas">CONSOLAS</Nav.Link>
            <Nav.Link href="/category/juegos">JUEGOS</Nav.Link>
            <Nav.Link href="/category/accesorios">ACCESORIOS</Nav.Link>
            <Nav.Link href="/category/pc gaming">PC GAMING</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar