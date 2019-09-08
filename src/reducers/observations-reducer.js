import defaultObservations from '../data/observations'

function observations (state = defaultObservations, action) {

  switch (action.type) {
    case 'ADD_OBSERVATION':
      const newObservation = {
        id: action.id,
        title: action.title,
        lat: action.lat,
        lng: action.lng,
        date: action.date,
        hour: action.hour,
        tags: action.tags,
        imageUrl: action.imageUrl,
        videoUrl: action.videoUrl,
        imageFile: action.imageFile,
        contents: action.contents
      }
      return [...state, newObservation]
      
    case 'REMOVE_OBSERVATION':
      
      return state.filter(obs => obs.observationId != action.id)
      
    default:
      return state
  }
}

export default observations