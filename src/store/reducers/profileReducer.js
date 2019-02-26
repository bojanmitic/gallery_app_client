import {
    START_FETCHING,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAIL,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAIL,
    CLEAR_CURRENT_PROFILE
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    profile:{},
    errorMessage: ''
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case START_FETCHING:
        return {
          ...state,
          loading: true,
        };
      case CREATE_PROFILE_SUCCESS:
      case FETCH_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          profile: action.payload,
          errorMessage: ''
        }
      case CREATE_PROFILE_FAIL:
      case FETCH_PROFILE_FAIL:
        return {
          ...state,
          loading: false,
          profile: null,
          errorMessage: action.payload
        }
      case CLEAR_CURRENT_PROFILE:
        return {
          ...state,
          loading: false,
          profile: null,
          errorMessage: ''
        }
      default:
        return state;
    }
  }
  