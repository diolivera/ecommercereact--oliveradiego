import React from 'react';
import './styles.css';
import {TiShoppingCart} from 'react-icons/ti';

const CartWidget = () => {
  return (
    <div style={{
        position: 'absolute',
        right: '20px',
        top: '5 px',
    }}>
        <TiShoppingCart size={50}/>
    </div>
  )
}

export default CartWidget