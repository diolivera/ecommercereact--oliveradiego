import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';

const ItemListContainers = ({greeting}) => {

    const agregarAlCarrito = (cantidad) => {
        alert (`Se agrego la cantidad ${cantidad} al carrito!`)
    }

    return (
        <>
            <div className='item-list-containers'>
                <h2>{greeting}</h2>
            </div>

            <div>
                <ItemCount initial={1} stock={7} onAdd={agregarAlCarrito}/>
            </div>
        </>
  )
}

export default ItemListContainers