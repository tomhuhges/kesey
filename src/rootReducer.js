import { combineReducers } from 'redux'
import fileReducer from './kesey/reducer'

const rootReducer = combineReducers({
  fileReducer,
})

export default rootReducer
