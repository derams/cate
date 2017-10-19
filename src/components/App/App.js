import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from '../Main/Main.js'

import Layout from '../Layout/Layout.js'
import './app.css'
class App extends Component {
  render(){
    return(
      <Router>
        <Layout>
          <Main/>
        </Layout>
      </Router>
    )
  }
}

export default App
