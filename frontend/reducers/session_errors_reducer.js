import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions'
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      const err = action.errors;
      return err;
    case RECEIVE_CURRENT_USER: 
      return [];
    default:
      return state;         
  }   
}

export default sessionErrorsReducer;