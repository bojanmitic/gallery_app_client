import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField";
import * as actions from "../../store/actions";
import validate from '../../utils/validate';
import { withRouter } from 'react-router-dom';
import fileInput from '../renderField/FieldFileInput';

class ProfileForm extends Component {
  
   onSubmit = values => {
    this.props.createProfile(values, () => {
      this.props.history.push('/');
    })
  };
  render(){
    const { handleSubmit } = this.props;
  
    return (
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="personalSitePortfolio"
            component={renderField}
            type="text"
            label="Personal site"
          />
          <Field
            name="location"
            component={renderField}
            type="text"
            label="Location"
          />
          <Field
            name="location"
            component={renderField}
            type="text"
            label="Location"
          />
          <Field
            name="bio"
            component={renderField}
            type="text"
            label="Bio"
          />
          <Field
            name="interests"
            component={renderField}
            type="text"
            label="Interests"
          />
          <Field
            name="avatar"
            component={fileInput}
            type="file"
            label="Profile photo"
          />
  
          <button className="waves-effect waves-light btn">Login</button>
        </form>
      </>
    );
  }
};

export default compose(
  withRouter,
  connect(
    null,
    actions
  ),
  reduxForm({
	  validate,
	   form: "profileForm", 
	   destroyOnUnmount: false })
)(ProfileForm);
