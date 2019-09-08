import React from "react"

import style from "./ObservationDetail.css";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

const ObservationDetailView = (props) => {
  const {
    title,
    lat,
    lng,
    date,
    hour,
    min,
    tags,
    contents
  } = {...props}

  const contentElements = ! contents ? [] : contents.map(c => {
    console.log('content', c)
    if (
      c.type === 'image' &&
      c.imageUrl &&
      (
        c.imageUrl.indexOf('.mov') ||
        c.imageUrl.indexOf('.mp4')
      )
    ) {
      c.type = 'video'
    }
    switch (c.type) {
      case 'subtitle':
        return <h3 key={c.id}>c.text</h3>
      case 'paragraph':
        return <p key={c.id}>c.text</p>
      case 'image':
        return <div key={c.id}>
          <img src={c.imageUrl ? c.imageUrl : c.url} alt=""/>
        </div>
      case 'video':
        return <div key={c.id}>
          <Player
            playsInline
            autoPlay
            src={c.url ? c.url : c.imageUrl}
          />
        </div>
      case 'link':
        return <div key={c.id}>
          <a href={c.url}>{c.text}</a>
        </div>
      default:
        return null;
    }
  })

  return <div className="ObservationDetail">
    <h1>{title}</h1>
    <div>
      lat: {lat} lng: {lng}
    </div>
    <div>
      {date && date.toString()} {hour}:{min}
    </div>
    <ul>
      {tags && tags.map(t => <li>#{t}</li>)}
    </ul>
    {
      contentElements
    }
  </div>
}

export default ObservationDetailView