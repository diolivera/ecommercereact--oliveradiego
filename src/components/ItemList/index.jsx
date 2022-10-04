import React from 'react'
import Item from '../Item'
import './styles.css';
import Spinner from 'react-bootstrap/Spinner';


const ItemList = ({products}) => {
  return (
    <div className='item-container'>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        })
        :
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      }
    </div>
  )
}

export default ItemList