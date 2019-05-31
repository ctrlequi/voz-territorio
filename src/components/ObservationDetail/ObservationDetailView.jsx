import React from "react"

import style from "./ObservationDetail.css";

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

  const contentElements = contents.map(c => {
    switch (c.type) {
      case 'subtitle':
        return <h3>c.text</h3>
        break;
      case 'paragraph':
        return <p>c.text</p>
        break;
      case 'image':
        return <div>
          <img src={c.imageUrl} alt=""/>
        </div>
        break;
      case 'video':
        return <div key={c.id}>
          <iframe
            title="video"
            width="560"
            height="315"    
            src={c.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        break;
      case 'link':
        return <div>
          <a href={c.url}>{c.text}</a>
        </div>
        break;
    
      default:
        break;
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