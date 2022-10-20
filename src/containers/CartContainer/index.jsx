import React, { useContext } from 'react';
import './styles.css';

import { Shop } from "../../context/ShopProvider";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const {cart, removeItem, clearCart, total} = useContext(Shop);
  const navigate = useNavigate();
  let totalCarrito = total(); 

  const removeCar = (e) => {    
    removeItem(e.target.value);    
    if(totalCarrito > 0){
      navigate('/cart')}
    else {
      navigate('/');
    }
  }

  const cleanAllCart = () => {
    clearCart()
    navigate('/');
  }
  
  const terminarCompra = () => {
    navigate('/form');    
  }
  
  if(cart.length < 1){    
    navigate('/');
    return <Link to="/"></Link>
  } else {        
    return (
      <div>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>      
        </thead>
        <tbody>
        {cart.map(product => {                   
          return (          
            <tr>
              <td width={'1px'}>{product.quantity}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>${product.quantity * product.price}</td>
              <td><Button variant="danger" value={product.id} onClick={removeCar}>Eliminar</Button></td>            
            </tr>          
          )
        })      
        }      
        </tbody>              
      </Table>  
        <h4 className='detail-product'><strong>TOTAL COMPRA: ${totalCarrito}</strong></h4>
        <br></br>
        <div className='botones'>
          <Button variant="secondary" onClick={cleanAllCart}>Limpiar Carrito</Button>
          <Button variant="success" onClick={terminarCompra}>Checkout</Button>          
        </div>
      </div>
    )
  }
}


export default Cart;