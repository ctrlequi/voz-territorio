import React from "react"

import style from "./AddObservation.css";

const AddObservationView = (props) => {
  const {
    title,
    lat,
    lng,
    date,
    hour,
    min,
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
            placeholder="Escribe un párrafo"
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
            placeholder="Escribe un subtítulo"
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
            <div>
              Fecha: <input name="date" type="date" onChange={onFieldChange} lang="es"/> 
            </div>
            <div>
              Hora: <input className="small" name="hour" type="number" onChange={onFieldChange}/> 
              Minuto: <input className="small" name="min" type="number" onChange={onFieldChange}/> 
            </div>
            <div>
              <button onClick={onSetDateNow}>Hoy</button>
            </div>
          </div>
          <br/>
          <div>
            Ubicación: 
            <div>
              lat: <input className="small" name="lat" type="text" onChange={onFieldChange} value={lat}/>
              &nbsp;
              lng: <input className="small" name="lng" type="text" onChange={onFieldChange} value={lng}/>    
            </div>
            <div>
              <button onClick={onSetMyLocation}>Mi ubicación actual</button>
              <button onClick={onSetMyLocation}>Ubicar en mapa</button>
            </div>
          </div>
          <br/>
          <div>
            Palabras clave (divide usando comas): <input name="tags" type="text" onChange={onFieldChange}/>
          </div>
        </div>
      </header>
      <br/>
      <div id="observationContent">
        <div className="mini">Agrega contenido como post de blog</div>
        <header>
          <div>
            <button onClick={onAddSubtitle}>Agrega Subtitulo</button>
            &nbsp;
            <button onClick={onAddTextArea}>Agrega Parrafo</button>
          </div>
          <br/>
          <div>
            <input type="text" name="imageUrl" placeholder="Pega un URL" onChange={onFieldChange}/>
            {' o '}
            <input type="file" name="imageFile" onChange={onFieldChange}/>
            <button onClick={onAddImage}>Agrega imagen</button>
          </div>
          <br/>
          <div>
            <input type="text" url="Pega un URL de yu2be" name="videoUrl" onChange={onFieldChange}/>
            <button onClick={onAddVideo}>Agrega video</button>
          </div>
        </header>
        <div id="observationAdd">
          {/* Agregar colapsador */}
          <button onClick={onAddObservation}> ¡REGISTRAR OBSERVACIÓN! </button>
        </div>
        <hr/>
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