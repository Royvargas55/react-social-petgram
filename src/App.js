import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Fav } from './pages/Fav'
import { User } from './pages/User'
import { NotRegisteredUser, NotRegisteredUserSignUp } from './pages/NotRegisteredUser'

import { Router } from '@reach/router'
import useAppState from './hooks/useAppState'

const App = () => {
  const { isAuth } = useAppState()
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home exact path='/' />
        <Home exact path='/pet/:id' />
        <Detail exact path='/detail/:id' />
      </Router>
      {
        isAuth
          ? (
            <Router>
              <Fav path='/favs' />
              <User path='/user' />
            </Router>
            )
          : (
            <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
              <NotRegisteredUser path='/signin' />
              <NotRegisteredUserSignUp path='/signup' />
            </Router>
            )
      }
      <NavBar />
    </>
  )
}

export default App
