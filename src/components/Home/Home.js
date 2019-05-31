import React, { Component } from "react"
import Iframe from 'react-iframe'

import HomeView from './HomeView'

class Home extends Component {
  
  componentDidMount () {
    console.log('Home Did Mount')
  }

  componentWillUnmount () {
    console.log('Home Will unMount')
  }
  
  render() {
    return <div className="Home">
      <Iframe url=" https://ctrlequi.github.io/slides-voz-territorio/"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  }
}

export default Home

