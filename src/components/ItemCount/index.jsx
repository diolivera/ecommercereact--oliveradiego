import React, {useState, useEffect} from "react";
import './styles.css';

import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            Swal.fire (
                'No hay suficiente stock disponible',
                'warning'
            ); 
        }
    }
    const handleDecrement = () => {
    }
    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }
    useEffect(()=> {
    }, []);
    useEffect(()=> {
    }, [count]);
    return (
        <div className='botones'>
            <Button variant="outline-dark" onClick={handleDecrement}>-</Button>
            <h3>{count}</h3>
            <Button variant="outline-dark" onClick={handleAdd}>+</Button>
            <br />
            <Button variant="dark" onClick={addCart}>Agregar</Button>
        </div>
    )
}

export default ItemCount