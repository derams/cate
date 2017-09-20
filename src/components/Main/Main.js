import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Personage from '../Personage/Personage.js'
import Home from '../Home/Home.js'

class Main extends Component {
  render(){
    return(
      <div className="main">
        <Personage/>
        {/* <Route path="/" component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="/" component={Home}/> */}
      </div>
    )
  }
}

export default Main
