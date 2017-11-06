import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Personage from '../Personage/Personage.js'
import Home from '../Home/Home.js'
import Login from '../Login/Login.js'
import Signup from '../Signup/Signup.js'
import Fond from '../Fond/Fond.js'

class Main extends Component {
  render(){
    return(
      <div className="main">
        <Route path="/" exact component={Home}/>
        <Route path="/personage" component={Personage}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/fond" component={Fond}/>
      </div>
    )
  }
}

export default Main
