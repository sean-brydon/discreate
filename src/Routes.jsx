import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'

export default function Routes() {
  // This value will come from firebase / Discords 0auth system (if i can be arsed)
  const loggedIn = false

  return (
    <Router>
      {/* Routes only avaliable to people who are not logged in - Later on this will come from global state*/}
      {!loggedIn && (
        <Switch>
          <Route exact path="/Register">
            {/* If route Is "Register" Render register comonent*/}
            <Register />
          </Route>
          <Route>
            {/* Else render Login page - Prevents naviagation to any other page*/}
            <Login />
          </Route>
        </Switch>
      )}
      {/* Routes only avaliavle to those who are logged in.*/}
      {loggedIn && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>404 not found</Route>
        </Switch>
      )}
    </Router>
  )
}
