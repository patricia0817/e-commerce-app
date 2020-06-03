import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Navbar, Nav, NavDropdown, Form, InputGroup, FormControl } from 'react-bootstrap'


function Header() {
  return (
    <Navbar fixed='top' bg='light' expand='lg'>
      <Navbar.Brand href='#home'><NavLink activeClassName='logo' to='/' exact>E-Commerce</NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/' exact className='navbar-link__active'>Home</NavLink>
          <NavLink to='/shop' className='navbar-link__active'>Shop</NavLink>
          <NavLink to='/myCart' className='navbar-link__active'>My Cart</NavLink>
        </Nav>
      </Navbar.Collapse>
      <Form className='login-form' inline>
        <InputGroup className='login-form__input'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
          />
        </InputGroup>
        <InputGroup className='login-form__input'>
          <FormControl
            placeholder='Password'
            aria-label='Password'
            type='password'
          />
        </InputGroup>
        <InputGroup className='login-form__submit'>
          <Button variant='dark'>Login</Button>{ ' ' }
        </InputGroup>
      </Form>
    </Navbar>
  )
}

export default Header