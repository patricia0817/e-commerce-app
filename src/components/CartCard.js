import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

function CartCard() {
  return (
    <Card className="col-12 col-md-8">
      <Card.Body>
        <Card.Title className="cart-card-content">
          <span>High Waist Joggers</span>
          <span><i className="fa fa-window-close"></i></span>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <span>29.09 <i className="fa fa-dollar-sign"></i></span>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default CartCard