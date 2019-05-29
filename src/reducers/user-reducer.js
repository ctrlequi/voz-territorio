function usere (state = null, action) {
  console.log('state usere', state)

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