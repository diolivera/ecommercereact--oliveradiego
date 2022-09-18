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
          <Navbar.Brand to="#home">Mi App React</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="#home">Inicio</Link>
            <Link to="/category/men's clothing">Men's clothing</Link>
            <Link to="/category/women's clothing">Women's clothing</Link>
            <Link to="/category/electronics">Electronics</Link>
            <Link to="/category/jewelery">Jewelery</Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar