import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => (
    APIUtil.login(user).then(res => 
    (dispatch(receiveCurrentUser(res)),
    err => (recieveErrors(err.responseJSON))
  ))
);

export const signup = user => dispatch => (
  APIUtil.login(user).then(res => 
  (dispatch(receiveCurrentUser(res)),
  err => (recieveErrors(err.responseJSON))
))
);

export const logout = user => dispatch => (
  APIUtil.logout().then(res => 
  (dispatch(receiveCurrentUser(null))
  ))
);