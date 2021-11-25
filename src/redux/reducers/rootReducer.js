// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import common from './common'
import security from './../../views/ConfigurationsADMs/security/store/reducer'
import organisation from './../../views/ConfigurationsADMs/organisation/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  security,
  common,
  organisation
})

export default rootReducer
