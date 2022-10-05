import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount';
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Shop } from "../../context/ShopProvider";

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

  console.log(qty);
  
  return (
    <div className='detail-container'>
        <img className="detail-img"src={product.image} alt="product-detail"/>
        <div className='detail-subcontainer'>
          <h2>{product.title}</h2>
          <h5>{product.description}</h5>
          {qty ? (
                    <button onClick={handleFinish}>Finalizar compra</button>
                ) : (
                    <ItemCount stock={10} initial={1} onAdd={addCart} />
                )}
        </div>
    </div>
  )
}
  
  export default ItemDetail