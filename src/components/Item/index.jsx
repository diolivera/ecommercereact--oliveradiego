import React from 'react'
import './styles.css';

import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
      navigate(`/detail/${product.id}`)
  }
  
  return (
    <div className='cards' onClick={handleNavigate}>
    <Card style={{ height: 'auto' }}>
      <Card.Img className='card_img' variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <br />
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item