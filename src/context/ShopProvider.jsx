import React, { useState } from 'react'
import { createContext } from "react";


export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(null);

    const addItem = (item) => {        
        const productoRepetido = isInCart(item.id);
        
        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            setCart(cartModified)
            
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado);            
        }
        cantidad();
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem  = (id) => {        
        setCart(cart.filter(product => product.id !== id));
        cantidad();
    }

    const clearCart = () => {
        setCart([]);        
        setQty(null);   
    }

    const cantidad = () => {
        let totalCarrito = cart.reduce((acc, producto) => acc + producto.quantity,0);  
        totalCarrito = parseInt(totalCarrito);
        setQty(totalCarrito);        
    }

    const total = () => {
        const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0)       
        return total
    }

    return (
        <Shop.Provider value={{ cart, addItem, removeItem , clearCart, qty, cantidad, total}}>
            {children}
        </Shop.Provider>
    )
}
export default ShopProvider;