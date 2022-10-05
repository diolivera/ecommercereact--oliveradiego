import React, {useEffect, useState} from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';



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
            <Button  variant="outline-dark" onClick={handleDecrement}>-</Button>
            <h3>{count}</h3>
            <Button  variant="outline-dark" onClick={handleAdd}>+</Button>
            <br />
            <Button  variant="dark" onClick={()=>onAdd(count)}>Agregar al carrito</Button>
        </div>
  )
}

export default ItemCount