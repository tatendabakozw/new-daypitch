import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
