function people (state = [], action) {
  console.log('state people', state)

  switch (action.type) {
    case 'ADD_PERSON':

      console.log('ADD_PERSON', action)      
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