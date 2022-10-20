import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount';
import "./styles.css";

import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();
  const {addItem} = useContext(Shop);
  const addCart = (quantity) => {
      setQty(quantity);
  };
  const handleFinish = () => {
      const productToSave = {...product, quantity: qty}
      addItem(productToSave)
      navigate("/cart");
  };
  
  return (
    <div className='detail-container'>
        <img className="detail-img"src={product.image} alt="product-detail"/>
        <div className='detail-subcontainer'>
          <h2 className='detail-product'>{product.title}</h2>
          <h5 className='detail-product'>{product.description}</h5>
          {!qty ? (
            <div>
              <h3 className='detail-product'>${product.price}</h3>
              <span className='detail-product'>({product.stock} disponibles!)</span>
              <ItemCount stock={product.stock} initial={1} onAdd={addCart} />
            </div>
            ) : (
              <div className='detail-product'>
                 <h2 className='detail-product'>Total:</h2>
                 <h4 className='detail-product'>${product.price * qty}</h4>
                 <Button variant="dark" onClick={handleFinish}>Finalizar compra</Button>
              </div>   
                )}
        </div>
    </div>
  )
}
  
  export default ItemDetail