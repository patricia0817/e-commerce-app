import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

function CardItem() {
  return (
    <Card>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToDyErBwVVZTOjnxmZgtq8rYKpaRLoxQjYsiZgTzMHpiiIKEYeMx5RKo9MNsbIAkys-JTokU0&usqp=CAc/100px160" />
      <Card.Body>
        <Card.Title>High Waist Jeans</Card.Title>
        <Card.Text className="card-content">
          <span>29.29 <i className="fa fa-dollar-sign" aria-hidden="true"></i></span>
          <Button size="sm" variant="outline-dark">Add to cart <i className="fa fa-cart-plus"></i></Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardItem