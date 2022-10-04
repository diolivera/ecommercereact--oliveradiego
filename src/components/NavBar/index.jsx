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
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="/category/men's clothing">Consolas</Nav.Link>
            <Nav.Link href="/category/women's clothing">Juegos</Nav.Link>
            <Nav.Link href="/category/electronics">Accesorios</Nav.Link>
            <Nav.Link href="/category/jewelery">PC Gaming</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar