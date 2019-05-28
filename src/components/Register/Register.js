import React, { Component } from "react"

import RegisterView from './RegisterView'

class Register extends Component {
  
  componentDidMount () {
    console.log('Register Did Mount')
  }

  componentWillUnmount () {
    console.log('Register Will unMount')
  }
  
  render() {
    return <RegisterView/>
  }
}

export default Register