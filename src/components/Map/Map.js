import React, { Component } from "react"

import style from './Map.css'

import ReactMapGL, { Popup, Marker }from 'react-map-gl';
import { connect } from "react-redux";

class Map extends Component {

  state = {
    viewport: {
      latitude: 19.0,
      longitude: -100.0,
      zoom: 6
    },
    accessToken: 'pk.eyJ1IjoicmFsZXhyZHoiLCJhIjoiY2lmdHB2aGo2MTZ4MnQ1bHkzeDJyaDMzNyJ9.UHhEm9gA1_uwAztXjb7iTQ',
    popup: null
  };

  onViewportChange = viewport => { 
    const {width, height, ...etc} = viewport
    this.setState({viewport: etc})
  } 

  showPop = (obs) => {
    console.log('showPopup');
    
    if ( !! obs ) {
      console.log('yes')
      this.setState({
        popup: <Popup  latitude={parseFloat(obs.lat)} longitude={parseFloat(obs.lng)} offsetLeft={-20} offsetTop={-10}>
        <div onClick={() => this.goToObservationDetails(obs)}>{obs.title}</div>
      </Popup>
      })
    } else {
      this.setState({
        popup: null
      })
    }
  }

  goToObservationDetails = (obs) => {
    console.log('asd')
  } 

  render() {
    const viewport = this.state.viewport
    const puntos = this.props.observations.map(obs => {
      return (
        <Marker 
          latitude={parseFloat(obs.lat)} 
          longitude={parseFloat(obs.lng)} 
          offsetLeft={-20} 
          offsetTop={-10}
          key={obs.id}
        >
          <div className="marker" onClick={() => this.showPop(obs)}></div>
        </Marker>
      )
    })
    return (
      <div id="map-container">
        <ReactMapGL
          height="100%"
          width="100%"
          mapStyle="mapbox://styles/mapbox/outdoors-v9"
          {...viewport}
          mapboxApiAccessToken={this.state.accessToken}
          onViewportChange={viewport => this.onViewportChange(viewport)}
        >
          {
            puntos
          }
          {
            this.state.pop
          }
        </ReactMapGL>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    observations: state.observations
  }
}


export default connect(mapStateToProps)(Map)