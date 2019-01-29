import { combineReducers } from 'redux'

import todos from './todos'
import userReducer from './userReducer'
import giftReducer from './giftReducer'
import appReducer from './appReducer'

export default combineReducers({ appState: appReducer, todos, user: userReducer, gitt: giftReducer })
