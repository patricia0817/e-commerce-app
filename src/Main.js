import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useImmerReducer } from 'use-immer'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Shop />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Main