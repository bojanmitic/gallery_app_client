import {
    START_FETCHING,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAIL
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    images: [],
    image:{},
    errorMessage: ''
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case START_FETCHING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_IMAGES_SUCCESS:
        return {
          ...state,
          loading: false,
          images: action.payload,
          errorMessage: ''
        }
      case FETCH_IMAGES_FAIL:
        return {
          ...state,
          loading: false,
          images: null,
          errorMessage: action.payload
        }
      default:
        return state;
    }
  }
  