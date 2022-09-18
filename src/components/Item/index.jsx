import React from 'react'
import Button from 'react-bootstrap/Button';
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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>En stock {product.stock} unidades!</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item