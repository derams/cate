import React, { Component } from 'react'
import './personage.css'
import img1 from '../images/u=2972809576,3457284332&fm=27&gp=0.jpg'
import Pen from '../svg/pen.svg'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

class Personage extends Component {
  state = {
    val:'',
    show:false,
    posts:[
      {
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2423297108,1993881559&fm=27&gp=0.jpg',
        name:'张三',
        id:'1'
      },
      {
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2888969349,1496342875&fm=27&gp=0.jpg',
        name:'李四',
        id:'2'
      }
    ]
  }
  handleChange = (e) => {
    this.setState({
      val:e.target.value
    })
  }
  handlePen = () => {
    this.setState({
      show:true
    })
  }
  handleSave = () => {
    this.setState({
      show:false,
      val:this.state.val
    })
  }
  render(){
    const post = this.state.posts.map(t=>(
      <div className="friend" key={t.id}>
        <p>
          <img src={t.img} alt=""/>
          <span>{t.name}</span>
        </p>
        <label>
          <Toggle
            defaultChecked={this.state.baconIsReady}
            onChange={this.handleBaconChange} />
        </label>
      </div>
    ))
    return(
      <div className="personage">
        <div className="personage_top">
          <h3>个人中心</h3>
          <div className="personage_img">
            <label htmlFor="" className="head">
              <input type="file" value=''/>
            </label>
          <div className="signtrue">
            <p>happyPeter</p>
          <input type="text" value={this.state.val} onChange={this.handleChange} className={`personage_input ${this.state.show&&'personage_active'}`}
          placeholder="个性签名"/>
        <a className={`personage_save ${this.state.show&&'personage_btn'}`} onClick={this.handleSave
        }>保存</a>

          </div>
          </div>
          <a href="javascript:;" onClick={this.handlePen}><img src={Pen} alt=""/></a>
        </div>
        <div className="personage_main">
            {post}
        </div>
      </div>
    )
  }
}

export default Personage
