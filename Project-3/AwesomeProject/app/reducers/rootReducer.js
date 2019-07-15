import { combineReducers } from 'redux'


const baseReducer = (state = 0, action) => {
  return state + 1;
}


export default combineReducers({
  baseReducer
})
