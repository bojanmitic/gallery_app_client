import axios from "axios";
import {
  START_FETCHING,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILS,
  LOG_OUT
} from "./types";

export const startFetching = () => ({
  type: START_FETCHING
});
export const authenticationSuccess = token => ({
  type: AUTHENTICATION_SUCCESS,
  payload: token
});

export const login = (values, callback) => async dispatch => {
  dispatch(startFetching());
  try {
    const result = await axios.post("/api/users/login", values);
    dispatch(authenticationSuccess(result.data));
    callback();
  } catch (err) {
    dispatch({
      type: AUTHENTICATION_FAILS,
      payload: err.response && err.response.data
    });
  }
};

export const signUpUser = values => async dispatch => {
  dispatch(startFetching());

  try {
    await axios.post("/api/users/register", values);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload:
        "You have successfully sign up, please login with your credentials. "
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILS,
      payload: err.response.data
    });
  }
};

export const logOut = () => async dispatch => {
  await axios.get("/api/users/logout");

  dispatch({
    type: LOG_OUT
  });
};

export const checkUser = () => async dispatch => {
  dispatch(startFetching());
  try {
    const result = await axios.get("/api/users/current");

    dispatch(authenticationSuccess(result.data));
  } catch (err) {
    dispatch(logOut());
  }
};
