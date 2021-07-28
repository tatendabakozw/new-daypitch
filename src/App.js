import axios from 'axios'
import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { useStateValue } from './context/StateProvier'
import { apiUrl } from './helpers/apiUrl'
import { auth } from './helpers/firebase'
import Account from './pages/account/Account'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import BecomeASeller from './pages/becomeAseller/BecomeASeller'
import Home from './pages/Home/Home'
import HowItWorks from './pages/howitworks/HowItWorks'
import NotFound from './pages/notfound/NotFound'

function App() {
  const [{token}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(userCred=>{
      if(userCred){
        dispatch({
          type: 'SET_USER',
          user: 'daypitch_user_logged_in'
        })
        window.localStorage.setItem('daypitch_user_auth', 'true')
        userCred.getIdToken().then(token=>{
          dispatch({
            type: 'SET_TOKEN',
            token: token
          })
          // console.log(token)
        })
        axios.get(`${apiUrl}/user/get/${userCred.uid}`).then(res=>{
          console.log(res)
          window.localStorage.setItem('daypitch_user', JSON.stringify({
            username: userCred.displayName,
            propic: userCred.photoURL,
            role: res.data.user.role
          }))
        }).catch(err=>{
          console.log(err)
        })
      }
    })
  },[token, dispatch])

  return (
    <BrowserRouter>
      <Switch>
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
