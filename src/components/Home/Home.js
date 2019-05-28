import React, { Component } from "react"

import HomeView from './HomeView'

class Home extends Component {
  
  componentDidMount () {
    console.log('Home Did Mount')
  }

  componentWillUnmount () {
    console.log('Home Will unMount')
  }
  
  render() {
    return <HomeView/>
  }
}

export default Home