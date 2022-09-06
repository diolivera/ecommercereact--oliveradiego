import React, {useEffect, useState} from 'react';
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert ("No hay suficiente stock disponible");
        }
        
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count-1);
        } else {
            alert ("Sin productos en el carrito");
        }
        
    }

    useEffect (()=> {

    },[]);

    useEffect (()=> {

    },[count]);

    return (
        <div className='botones'>
            <button onClick={handleDecrement}>-</button>
            <h3>{count}</h3>
            <button onClick={handleAdd}>+</button>
            <br />
            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
  )
}

export default ItemCount