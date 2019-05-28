import React from "react"

import ReactMapGL from 'react-map-gl';

import style from "./Map.css"

const accessToken = 'pk.eyJ1IjoicmFsZXhyZHoiLCJhIjoiY2lmdHB2aGo2MTZ4MnQ1bHkzeDJyaDMzNyJ9.UHhEm9gA1_uwAztXjb7iTQ'


const MapView = (props) => {
    const viewport = {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
    return <ReactMapGL
      {...viewport}
      onViewportChange={(viewport) => this.setState({viewport})}
    />
}

export default MapView