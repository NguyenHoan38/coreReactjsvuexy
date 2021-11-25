// **  Initial State
const initialState = {
    // userData: {},
  dataListRoleEmployee: []
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LIST_ROLE_EMPLOYEE':
        return {
          ...state,
          dataListRoleEmployee:action.data
        }
      default:
        return state
    }
  }
  
  export default authReducer
  