import axios from "axios";

import {
  FETCH_IMAGES_SUCCESS,
  START_FETCHING,
  FETCH_IMAGES_FAIL
} from "./types";

export const startFetching = () => ({
  type: START_FETCHING
});

export const fetchImages = () => async dispatch => {
  dispatch(startFetching());

  try {
    await axios.get("http://localhost:3090/api/images").then(res =>
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
