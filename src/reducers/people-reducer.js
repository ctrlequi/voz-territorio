function people (state = [], action) {

  switch (action.type) {
    case 'ADD_PERSON':

      const newUser = {
        userId: action.id,
        name: action.name
      }
      return [...state, newUser]
      
    default:
      return state
  }
}

export default people