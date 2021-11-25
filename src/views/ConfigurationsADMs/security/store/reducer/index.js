// **  Initial State
const initialState = {
    userData: {},
  dataListMaintenance: [],
  dataListWindowType: [],
  dataMaintenanceByID: {},
  dataListRoles:[],
  dataRoleByID: {},
  dataListRolePermissions: [],
  dataListAuthenticaon: []
  }
  const authReducer = (state = initialState, action) => {
    console.log('222222222222222222 action', action)

    switch (action.type) {
      case 'GET_LIST_MAINTENANCE':
        return {
          ...state,
          dataListMaintenance:action.data
        }
        case 'GET_LIST_AUTHENTICAON':
          return {
            ...state,
            dataListAuthenticaon:action.data
          }
        
        case 'GET_LIST_ROLE_PERMISSIONS':
          return {
            ...state,
            dataListRolePermissions:action.data
          }
        case 'GET_LIST_ROLE':
          return {
            ...state,
            dataListRoles:action.data
          }
        case 'GET_LIST_ROLE_BY_ID':
          return {
            ...state,
            dataListRoleByID:action.data
          }
        case 'GET_MAINTENANCE_BY_ID':
          return {
            ...state,
            dataMaintenanceByID:action.data
          }
      case 'GET_LIST_WINDOW_TYPE':
        return { ...state, dataListWindowType: action.data.map(res => { return { ...res, value: res.id, label: res.name } }) }  
      case 'LOGOUT':
        const obj = { ...action }
        delete obj.type
        return { ...state, userData: {}, ...obj }
      default:
        return state
    }
  }
  
  export default authReducer
  