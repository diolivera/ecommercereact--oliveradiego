import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';
//import { products } from '../../data/products';
import ItemList from '../../components/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainers = ({greeting}) => {

    const agregarAlCarrito = (cantidad) => {
        alert (`Se agrego la cantidad ${cantidad} al carrito!`)
    }

    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);

    useEffect(() => {
        (async () => {
            try {
                if (categoryId){
                  const response = await fetch(
                    "https://fakestoreapi.com/products/category/" + categoryId
                );
                const productos = await response.json();
                setProductos(productos);
                }
                else {
                  const response = await fetch(
                      "https://fakestoreapi.com/products"
                  );
                  const productos = await response.json();
                  setProductos(productos);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [categoryId]);

    console.log(productos);
    
    return (
        <>
            <div className='titulo'>
                <h2>{greeting}</h2>
            </div>

            <div className='item-list-containers'>
                <ItemList products={productos}/>
            </div>

            <div>
                <ItemCount initial={1} stock={7} onAdd={agregarAlCarrito}/>
            </div>
        </>
  )
}

export default ItemListContainers