import React, { useEffect } from 'react'
import HomeJumbotron from './HomeJumbotron'
import Container from './Container'

function Home() {
  return (
    <Container>
      <div className='row d-flex justify-content-around'>
        <HomeJumbotron large />
      </div>
    </Container>
  )
}

export default Home