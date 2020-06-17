import React, { useEffect } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

function HomeJumbotron( props ) {
  console.log( props )
  return (
    <Jumbotron className={ `col-xs-12 ${ props.small && 'col-lg-5' } ${ props.large && 'col-lg-10 p-5' }` } fluid>
      <Container>
        <h1>Zara.</h1>
        <p>
          Welcome to our shop.
          We invite you to register for a full experience.
      </p>
      </Container>
    </Jumbotron>
  )
}

export default HomeJumbotron