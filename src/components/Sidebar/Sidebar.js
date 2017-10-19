import React, { Component } from 'react'
import More from '../More/More.js'
import { slide  as  Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './sidebar.css'

class Sidebar extends Component {
  state = {
    isOpen:false
  }
  handleShow = () => {
    this.setState({
      isOpen:true
    })
  }
  render(){
    return(
      <div className="sidebar">
      <More width='20' heigth='20' handleShow={this.handleShow}/>
    <Menu isOpen={this.state.isOpen}>
        <div className="bg_head">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg" alt="" />
        <p>
          <a href="javascript:;">注册</a> | <a href="javascript:;">登录</a>
      </p>
        </div>
        <div className="bg_main">
          <Link to='/home'>Home</Link>
        <Link to='/signup'>注册</Link>
      <Link to='/login'>购物车</Link>
    <Link to=''>猜你喜欢</Link>
        </div>
        <div className="bg_footer">
          <button>关闭</button>
        </div>
      </Menu>

      </div>
    )
  }
}

export default Sidebar
