import {
    START_FETCHING,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAIL,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAIL,
    IMAGE_UPLOAD_PROGRESS
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    images: [],
    image:{},
    imageUploadProgress: 0,
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
          imageUploadProgress: 0,
          errorMessage: ''
        }
      case FETCH_IMAGES_FAIL:
        return {
          ...state,
          loading: false,
          images: null,
          errorMessage: action.payload
        }
      case UPLOAD_IMAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          imageUploadProgress: 0,
          images: [...state.images, action.payload]
        }
      case UPLOAD_IMAGE_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload
        }
      case IMAGE_UPLOAD_PROGRESS:
        return {
          ...state,
          loading: false,
          imageUploadProgress: action.payload
        }  
      default:
        return state;
    }
  }
  