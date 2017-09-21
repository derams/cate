import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import logo from '../svg/logo.svg'
class Home extends Component {
  render(){
    return(
      <div className="home">
        <div className="home_top">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="title">
            吮指
          </h1>
          <p className="slogan">
            享受舌尖艳遇
          </p>
        </div>
        <div className="home_down">
          <Link to="/signup">注册</Link>
          <Link to="/login">登录</Link>
        </div>
      </div>
    )
  }
}

export default Home
