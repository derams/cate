import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from '../Main/Main.js'
import More from '../More/More.js'
import Layout from '../Layout/Layout.js'
import './app.css'
class App extends Component {
  render(){
    return(
      <Router>
        <Layout>
          <More width='20' heigth='20'/>
          <Main/>
        </Layout>
      </Router>
    )
  }
}

export default App
