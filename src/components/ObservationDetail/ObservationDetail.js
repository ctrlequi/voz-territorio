import React, { Component } from "react"

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import ObservationDetailView from './ObservationDetailView'

class ObservationDetail extends Component {

  state = {
    name: '',
    newId: null,
    redirect: false
  }
  
  componentDidMount () {
    console.log('ObservationDetail Did Mount')
  }

  componentWillUnmount () {
    console.log('ObservationDetail Will unMount')
  }
    
  render() {
    
    console.log(this.props.match)
    
    let observation = this.props.observations.find(obs => {
      return obs.id == this.props.match.params.id
    })

    console.log(observation)

    const props = {
      ...observation
    }
    return <ObservationDetailView {...props}/>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    observations: state.observations
  }
}


export default connect(mapStateToProps)(ObservationDetail)