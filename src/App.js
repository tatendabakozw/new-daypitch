import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home/Home'
import HowItWorks from './pages/howitworks/HowItWorks'
import NotFound from './pages/notfound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/howitworks" component={HowItWorks} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
