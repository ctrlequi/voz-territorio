import React, { Component } from "react"
import Iframe from 'react-iframe'

import HomeView from './HomeView'

class Home extends Component {
  
  componentDidMount () {
  }

  componentWillUnmount () {
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
        autoplay={true}
      />
    </div>
  }
}

export default Home

