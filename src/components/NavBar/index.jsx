import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="#home">ACME</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="#home">Inicio</Link>
            <Link to="/category/men's clothing">Consolas</Link>
            <Link to="/category/women's clothing">Juegos</Link>
            <Link to="/category/electronics">Accesorios</Link>
            <Link to="/category/jewelery">PC Gaming</Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar