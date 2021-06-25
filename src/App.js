import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Detail } from './pages/Detail'
import { Fav } from './pages/Fav'
import { User } from './pages/User'
import { NotRegisteredUser, NotRegisteredUserSignUp } from './pages/NotRegisteredUser'

import { Redirect, Router } from '@reach/router'
import useAppState from './hooks/useAppState'

const App = () => {
  const { isAuth } = useAppState()
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home exact path='/' />
        <Home exact path='/pet/:id' />
        <Detail exact path='/detail/:id' />
        {!isAuth && <NotRegisteredUser path='/signin' />}
        {!isAuth && <NotRegisteredUserSignUp path='/signup' />}
        {!isAuth && <Redirect from='/favs' to='/signin' />}
        {!isAuth && <Redirect from='/user' to='/signin' />}
        {isAuth && <Redirect from='/signin' to='/' />}
        <Fav exact path='/favs' />
        <User exact path='/user' />
      </Router>
      <NavBar />
    </>
  )
}

export default App
