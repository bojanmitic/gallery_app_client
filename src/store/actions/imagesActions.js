import axios from "axios";

import {
  FETCH_IMAGES_SUCCESS,
  START_FETCHING,
  FETCH_IMAGES_FAIL,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL
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

export const uploadImage = values => async dispatch => {
  dispatch(startFetching());

  try {
    await axios
      .post("/api/images", values)
      .then(res => dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: res.data
      }));
  } catch(err) {
    dispatch({
      type: UPLOAD_IMAGE_FAIL,
      payload: err
    })
  }
};
