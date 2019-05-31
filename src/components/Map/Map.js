import React, { Component } from "react"

import { Redirect } from 'react-router-dom'
import ReactMapGL, { Popup, Marker }from 'react-map-gl'
import { connect } from "react-redux"

import style from './Map.css'

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
    
    if ( !! obs ) {

      console.log('obs popup', obs)

      this.setState({
        popup: obs
      })

    } else {
      
      this.setState({
        popup: null
      })
    
    }

  }

  goToObservationDetails = (obs) => {
    console.log('goToObservationDetails', obs)
    this.setState({
      redirect: this.state.popup.id
    })
  } 

  render() {
    
    if (this.state.redirect) {
      return <Redirect to={`/observations/${this.state.popup.id}`} />
    }

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

    let popup = null

    if (!! this.state.popup) {

      console.log('state pop', this.state.popup)
      
      let obs = this.state.popup
      let thumb = obs.contents.find(cont => cont.type === 'image')

      popup = (
        <Popup 
          latitude={parseFloat(obs.lat)}
          longitude={parseFloat(obs.lng)}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div className="popup" onClick={() => this.goToObservationDetails(obs)}>
            {
              thumb && 
              <div className="popupThumb">
                <img src={thumb.imageUrl} alt=""/>
              </div>
             }
            <div className="popupTitle">
              {obs.title}
            </div>
          </div>
        </Popup>
      )

    }
    
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
            popup
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