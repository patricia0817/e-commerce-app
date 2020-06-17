import React, { useEffect } from 'react'
import { Navbar } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <Navbar className="mt-5" fixed='bottom' bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{ ' ' }
      Footer
    </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Footer