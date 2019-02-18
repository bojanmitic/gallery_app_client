import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    images: imagesReducer
});

export const getAuth = state => state.auth.user;
export const getId = state => state.auth.user.id;
export const getUser = state => state.auth.user;
export const getAuthLoading = state => state.auth.loading;
export const getAuthErrors = state => state.auth.authErrors;
export const getSignUpErrors = state => state.auth.signUpErrors;
export const getSignUpMsg = state => state.auth.signUpMsg;

export const getImages = state => state.images;