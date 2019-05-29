function observations (state = [], action) {
  console.log('state observations', state)

  switch (action.type) {
    case 'ADD_OBSERVATION':
      
      const newObservation = {
        observationId: action.id,
        userId: action.userId,
        coordinates: action.coordinates,
        date: action.date,
        title: action.title
      }
      return [...state, newObservation]
      
    case 'REMOVE_OBSERVATION':
      
      return state.filter(obs => obs.observationId != action.id)
      
    default:
      return state
  }
}

export default observations