import React, { Component } from "react"

import { connect } from "react-redux";

import RegisterView from './RegisterView'

class Register extends Component {

  state = {
    name: null,
    newId: null
  }
  
  componentDidMount () {
    console.log('Register Did Mount')
  }

  componentWillUnmount () {
    console.log('Register Will unMount')
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  addPerson = () => {
    this.props.dispatch({
      type: 'ADD_PERSON',
      userId: this.state.newId,
      name: this.state.name
    })
    this.setState({
      redirect: true
    })
  }
  
  render() {
    const props = {
      name: this.state.name,
      onNameChange: this.handleNameChange,
      addPerson: this.addPerson
    }
    return <RegisterView {...props}/>
  }
}

export default connect()(Register)