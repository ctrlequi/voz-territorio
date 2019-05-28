import React, { Component } from "react"

import style from './Map.css'

import ReactMapGL, { Popup }from 'react-map-gl';

class Map extends Component {

  state = {
    viewport: {
      latitude: 19.0,
      longitude: -100.0,
      zoom: 6
    },
    accessToken: 'pk.eyJ1IjoicmFsZXhyZHoiLCJhIjoiY2lmdHB2aGo2MTZ4MnQ1bHkzeDJyaDMzNyJ9.UHhEm9gA1_uwAztXjb7iTQ'

  };

  onViewportChange = viewport => { 
    const {width, height, ...etc} = viewport
    this.setState({viewport: etc})
  } 

  render() {
    const viewport = this.state.viewport
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
          <Popup class="marker" latitude={19.0} longitude={-99.0} offsetLeft={-20} offsetTop={-10}>
            <div>Hola</div>
          </Popup>
        </ReactMapGL>
      </div>
    );
  }
}

export default Map