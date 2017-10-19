import React, { Component } from 'react'
import './more.css'
class More extends Component {
  render(){
    const {width, height} = this.props
    return(
      <div className="more" onClick={this.props.handleShow2}>
      <svg  class="icon" viewBox="0 0 1309 1024" version="1.1" width={width} height={height}><path d="M0 0l1308.444444 0 0 113.777778-1308.444444 0 0-113.777778Z"  fill="#bfbfbf"></path><path d="M0 455.111111l1308.444444 0 0 113.777778-1308.444444 0 0-113.777778Z" fill="#bfbfbf"></path><path d="M0 910.222222l1308.444444 0 0 113.777778-1308.444444 0 0-113.777778Z"  fill="#bfbfbf"></path></svg>
      </div>
    )
  }
}

export default More
