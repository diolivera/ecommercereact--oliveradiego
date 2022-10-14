import React from 'react'
import Card from 'react-bootstrap/Card';
import './styles.css';
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
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>{product.stock} unidades en stock!</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item