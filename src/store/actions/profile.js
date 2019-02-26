import axios from "axios";

import {
  START_FETCHING,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  CLEAR_CURRENT_PROFILE
} from "./types";

export const startFetching = () => ({
  type: START_FETCHING
});

export const fetchProfile = () => async dispatch => {
  dispatch(startFetching());

  try {
    await axios.get("api/profiles/current").then(res =>
      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: res.data
      })
    );
  } catch (err) {
    dispatch({
      type: FETCH_PROFILE_FAIL,
      payload: err.response.data
    });
  }
};

export const createProfile = (values, callBack) => async dispatch => {
  dispatch(startFetching());

  try {
    await axios
      .post("api/profiles/current", values)
      .then(res => dispatch({
        type: CREATE_PROFILE_SUCCESS,
        payload: res.data
      }));
      callBack();
  } catch(err) {
    dispatch({
      type: CREATE_PROFILE_FAIL,
      payload: err.response.data
    })
  }
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
