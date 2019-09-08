function usere (state = null, action) {

  switch (action.type) {
    case 'ADD_PERSON':      
      return {
        userId: action.id,
        name: action.name
      }
      
    default:
      return state
  }
}

export default usere