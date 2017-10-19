import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './side.css'


class Side extends Component {
  render(){
    return(
      <div className={`side ${this.props.sideShow&&'side_active'}`}>
        <div className="side_show">
          <div className="side_bg_head">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg" alt="" />
          <p>
            <Link to="/signup">注册</Link> | <Link to="/login">登录</Link>
        </p>
          </div>
          <div className="side_bg_main">
            <Link to='/home'>Home</Link>
            <Link to='/signup'>注册</Link>
            <Link to='/login'>购物车</Link>
            <Link to=''>猜你喜欢</Link>
          </div>
          <div className="side_bg_footer">
            <button onClick={this.handleShow2}>关闭</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Side
