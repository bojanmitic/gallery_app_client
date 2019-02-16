import {
  START_FETCHING,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILS,
  LOG_OUT
} from "../actions/types";

const initialState = {
  loading: false,
  user: null,
  authErrors: null,
  signUpErrors: null,
  signUpMsg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true
      };
    case AUTHENTICATION_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        authErrors: null,
        signUpErrors: null,
        signUpMsg: ""
      };
    case AUTHENTICATION_FAILS:
      return {
        ...state,
        loading: false,
        authErrors: action.payload
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signUpErrors: null,
        signUpMsg: action.payload
      };
    case SIGNUP_FAILS:
      return {
        ...state,
        loading: false,
        signUpErrors: action.payload,
        signUpMsg: ""
      };
    case LOG_OUT:
	  return {
		  ...state,
		  loading: false,
		  user: null,
	  }
    default:
      return state;
  }
}
