

// **  Initial State
const initialState = {
    userData: {},
    isLoading: false
  }
  
  const common = (state = initialState, action) => {
      console.log('reducers', action)
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...state,
          isLoading:action.data
        }
      default:
        return state
    }
  }
  
  export default common
  