import React, { useEffect, useState } from 'react'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap'

function HomeGuest() {
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  function handlePasswordMatch( e ) {
    if ( e.target.value !== password ) {
      alert( "Passwords must match" )
    }
  }

  function handleSubmit( e ) {
    e.preventDefault()
    console.log( `Email: ${ email }, password: ${ password }` )
  }


  return (
    <div className='home-guest-container container-fluid pt-3 px-5'>
      <div className='row d-flex justify-content-around'>
        <Jumbotron className='col-xs-12 col-lg-5' fluid>
          <Container>
            <h1>Zara.</h1>
            <p>
              Welcome to our shop.
              We invite you to register for a full experience.
        </p>
          </Container>
        </Jumbotron>
        <Form onSubmit={ e => handleSubmit( e ) } className='col-xs-12 col-lg-5'>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={ e => setEmail( e.target.value ) } type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={ e => setPassword( e.target.value ) } type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formRetypeBasicPassword'>
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control onBlur={ e => handlePasswordMatch( e ) } type='password' placeholder='Re-eneter Password' />
          </Form.Group>
          <Button variant='outline-dark' type='submit'>
            Submit
      </Button>
        </Form>
      </div>
    </div>
  )
}

export default HomeGuest