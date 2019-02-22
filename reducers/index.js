import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import userReducer from './userReducer'
import appReducer from './appReducer'

export default combineReducers({ appState: appReducer, user: userReducer, form: formReducer })
