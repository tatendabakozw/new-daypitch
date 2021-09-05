import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Account from './pages/account/Account'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import BecomeASeller from './pages/becomeAseller/BecomeASeller'
import Chat from './pages/chat/Chat'
import Contact from './pages/contact/Contact'
import Contract from './pages/contract/Contract'
import Listings from './pages/CreateJob/Listings'
import ExploreJobs from './pages/explore/ExploreJobs'
import ExploreSellers from './pages/explore/ExploreSellers'
import Home from './pages/Home/Home'
import HowItWorks from './pages/howitworks/HowItWorks'
import JobInfo from './pages/JobsInfo/JobInfo'
import SendMessage from './pages/message/SendMessage'
import MyJobs from './pages/my_jobs/MyJobs'
import NotFound from './pages/notfound/NotFound'
import Upgrade from './pages/upgrade/Upgrade'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/explore" component={ExploreSellers} />
        <Route exact path="/explorejobs" component={ExploreJobs} />
        <Route exact path="/job/:id" component={JobInfo} />
        <Route exact path="/howitworks" component={HowItWorks} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/upgrade" component={Upgrade} />
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/message" component={SendMessage} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/jobs" component={MyJobs} />
        <Route exact path="/becomeaseller" component={BecomeASeller} />
        <Route exact path="/contract/:id" component={Contract} />
        <Route exact path="/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
