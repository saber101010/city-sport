import {combineReducers} from 'redux'
import authReducer from './authReducer'
import productReducers from './productReducers'

const rootReducer=combineReducers({
    authReducer,productReducers
})
export default rootReducer