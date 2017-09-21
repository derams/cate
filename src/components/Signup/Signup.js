import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
class Signup extends Component {
  state = {
    usernama:'',
    password:''
  }
  handleChange3 = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  handleChange4 = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  render(){
    return(
      <div className="signup">

          <div className="signup_hero" >
            <span>Signup</span>
            <h1 className="title">
              注册
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form onSubmit={this.signup} className="signup_form">
            <div className="signup_text_inputs">

                <input value={this.state.username} type="text" placeholder="用户名" onChange={this.handleChange3}/>
                <input type="text" placeholder="Email" />
                <input value={this.state.password} type="password" placeholder="password" onChange={this.handleChange4}/>
                <input type="password" placeholder="再输一遍" />
            
            </div>
            <div className="signup_actions">
              <button type="submit">注册</button>
            </div>
          </form>
          <div className="signup_other_option">
            <Link to="/login">已有账号？直接登录</Link>
          </div>

      </div>
    )
  }
}

export default Signup
