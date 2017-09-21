import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
class Login extends Component {
  state = {
    usrename:'',
    password:''
  }
  handleChange1 = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  handleChange2 = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  render(){
    return(
      <div className="login">
          <div className="login_hero" >
            <span>login</span>
          <h1 className="login_title">
              登录
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form onSubmit={this.login} className="login_form">
            <div className="login_text_inputs">
                <input value={this.state.username} onChange={this.handleChange1} type="text" placeholder="用户名" />
              <input value={this.state.password} onChange={this.handleChange2} type="password" placeholder="password" />
            </div>
            <div className="login_actions">
              <Link to='/personage'>
              <button type="submit">登录</button>
              </Link>
            </div>
          </form>
          <div className="login_other_option">
            <Link to="/signup">没有账号？请先注册</Link>
          </div>
      </div>
    )
  }
}

export default Login
