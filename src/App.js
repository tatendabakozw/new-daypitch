import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Account from './pages/account/Account'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import BecomeASeller from './pages/becomeAseller/BecomeASeller'
import ExploreSellers from './pages/explore/ExploreSellers'
import Home from './pages/Home/Home'
import HowItWorks from './pages/howitworks/HowItWorks'
import MyJobs from './pages/my_jobs/MyJobs'
import NotFound from './pages/notfound/NotFound'
import Upgrade from './pages/upgrade/Upgrade'

function App() {

  useEffect(()=>{
    
  },[])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/explore" component={ExploreSellers} />
        <Route exact path="/upgrade" component={Upgrade} />
        <Route exact path="/jobs" component={MyJobs} />
        <Route exact path="/becomeaseller" component={BecomeASeller} />
        <Route exact path="/account" component={Account} />
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
