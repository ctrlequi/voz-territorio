import React from "react"

import style from "./AddObservation.css";

const AddObservationView = (props) => {
  const {
    title,
    lat,
    lng,
    date,
    hour,
    observationContents,
    onAddObservation,
    onFieldChange,
    onContentChange,
    onSetDateNow,
    onSetMyLocation,
    onAddSubtitle,
    onAddTextArea,
    onAddImage,
    onAddVideo
  } = {...props}

  const observationContentsPreview = observationContents.map(obsCont => {
    let preview
    switch (obsCont.type) {
      case 'paragraph':
        preview = <div key={obsCont.id}>
          <textarea 
            id={obsCont.id} 
            value={obsCont.text}
            onChange={onContentChange}
          /> 
        </div>
        break;
      case 'subtitle':
        preview = <div key={obsCont.id}>
          <input 
            id={obsCont.id}
            className="subtitle" 
            value={obsCont.text}
            onChange={onContentChange}
          />
        </div>
        break;
      case 'image':
        console.log('imageUrl', obsCont)
        preview = <div key={obsCont.id}>
            <img src={obsCont.url} alt="" />
          </div>
        break;
      case 'video':
        console.log(obsCont)
        preview = <div key={obsCont.id}>
              <iframe
                title="video"
                width="560"
                height="315"    
                src={obsCont.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
        break;
      default:
        break;
    }

    return preview

  })

  return (
    <section className="AddObservation">
      <header>
        <div id="observationInfo">
          <div>
            Titulo: <input name="title" type="text" onChange={onFieldChange}/>
          </div>
          <div>
            Fecha: <input name="date" type="date" onChange={onFieldChange} lang="es"/> 
            Hora: <input className="small" name="hour" type="number" onChange={onFieldChange}/> 
            Minuto: <input className="small" name="min" type="number" onChange={onFieldChange}/> 
            <button onClick={onSetDateNow}>Hoy</button>
          </div>
          <div>
            Ubicación: 
            lat: <input className="small" name="lat" type="text" onChange={onFieldChange}/>
            lng: <input className="small" name="lng" type="text" onChange={onFieldChange}/>
            <button onClick={onSetMyLocation}>Mi ubicación actual</button>
            <button onClick={onSetMyLocation}>Ubicar en mapa</button>
          </div>
            {/* FALTA SELECTOR DE CATEGORIA */}
          <div>
            Palabras clave (divide usando comas): <input name="tags" type="text" onChange={onFieldChange}/>
          </div>
        </div>
        <div id="observationAdd">
          <button>-</button> 
          {/* Agregar colapsador */}
          <button onClick={onAddObservation}>Registrar Observación</button>
        </div>
      </header>
      <div id="observationContent">
        <header>
          <div>
            <button onClick={onAddSubtitle}>Agrega Subtitulo</button>
          </div>
          <div>
            <button onClick={onAddTextArea}>Agrega Parrafo</button>
          </div>
          <div>
            <input type="text" name="imageUrl" placeholder="url" onChange={onFieldChange}/>
            <input type="file" name="imageFile" onChange={onFieldChange}/>
            <button onClick={onAddImage}>Agrega imagen</button>
          </div>
          <div>
            <input type="text" name="videoUrl" onChange={onFieldChange}/>
            <button onClick={onAddVideo}>Agrega video</button>
          </div>
        </header>
        <div id="contents">
          {
            observationContentsPreview
          }
        </div>
      </div>
    </section>

  )
}

export default AddObservationView