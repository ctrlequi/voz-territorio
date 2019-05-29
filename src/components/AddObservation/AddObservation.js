import React, { Component } from "react"

import { connect } from "react-redux";

import AddObservationView from './AddObservationView'

class AddObservation extends Component {
  
  componentDidMount () {
    console.log('AddObservation Did Mount')
  }

  componentWillUnmount () {
    console.log('AddObservation Will unMount')
  }
  
  render() {
    return <AddObservationView/>
  }
}

export default connect()(AddObservation)