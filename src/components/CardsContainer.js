import React, { useEffect } from 'react'
import { CardColumns } from 'react-bootstrap'
import CardItem from './CardItem'

function CardsContainer() {
  return (
    <CardColumns>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CardColumns>
  )
}

export default CardsContainer