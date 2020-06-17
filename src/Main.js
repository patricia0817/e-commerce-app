import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useImmerReducer } from 'use-immer'

import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'
import MyCart from './components/MyCart'
import HomeGuest from './components/HomeGuest'
import Home from './components/Home'

import StateContext from './StateContext'
import DispatchContext from './DispatchContext'

function Main() {
  const initialState = {
    loggedIn: false,
    user: {}
  }

  function appReducer( draft, action ) {
    switch ( action.type ) {
      case 'login':
        return
    }
  }

  const [ state, dispatch ] = useImmerReducer( appReducer, initialState )
  return (
    <StateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact>
              { state.loggedIn ? <Home /> : <HomeGuest /> }
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>
            <Route path='/myCart'>
              <MyCart />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default Main