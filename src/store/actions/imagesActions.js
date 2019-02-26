import axios from "axios";

import {
  FETCH_IMAGES_SUCCESS,
  START_FETCHING,
  FETCH_IMAGES_FAIL,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  IMAGE_UPLOAD_PROGRESS
} from "./types";

export const startFetching = () => ({
  type: START_FETCHING
});

export const fetchImages = () => async dispatch => {
  dispatch(startFetching());

  try {
    await axios.get("/api/images").then(res =>
      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        payload: res.data
      })
    );
  } catch (err) {
    dispatch({
      type: FETCH_IMAGES_FAIL,
      payload: err.response.data
    });
  }
};

export const uploadImage = (values, callBack) => async dispatch => {
  dispatch(startFetching());

  try {
    await axios
      .post("/api/images", values, {
        onUploadProgress: progressEvent => dispatch ({
          type: IMAGE_UPLOAD_PROGRESS,
          payload: Math.round(progressEvent.loaded / progressEvent.total * 100)
          //console.log('Upload Progress', Math.round(progressEvent.loaded / progressEvent.total * 100) + '%' )
        })
      })
      .then(res => dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: res.data
      }));
      callBack();
  } catch(err) {
    dispatch({
      type: UPLOAD_IMAGE_FAIL,
      payload: err.response.data
    })
  }
};


export const fetchImagesFromSameAuthor = (id) => async dispatch => {
  dispatch(startFetching());
  try {
    await axios.get(`/api/images/author/${id}`).then(res =>
      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        payload: res.data
      })
    );
  } catch (err) {
    dispatch({
      type: FETCH_IMAGES_FAIL,
      payload: err.response.data
    });
  }
};