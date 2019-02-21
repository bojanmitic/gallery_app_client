import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import fileInput from '../renderField/FileInput';
import renderField from "../renderField";
import * as actions from "../../store/actions";
import validate from '../../utils/validate';
import { withRouter } from 'react-router-dom';

class ImageUploadForm extends Component {
  
   onImageUpload = values => {
    this.props.uploadImage(values, () => {
      this.props.history.push('/');
    })
  };
  render(){
    const { handleSubmit } = this.props;
  
    return (
      <>
        <form onSubmit={handleSubmit(this.onImageUpload)}>
          <Field
            name="cameraMake"
            component={renderField}
            type="text"
            label="Camera Make"
          />
          <Field
            name="cameraModel"
            component={renderField}
            type="text"
            label="Camera Model"
          />
          <Field
            name="focalLength"
            component={renderField}
            type="text"
            label="Focal Length"
          />
          <Field
            name="iso"
            component={renderField}
            type="text"
            label="ISO"
          />
          <Field
            name="image"
            component={fileInput}
            type="file"
            label="Image for upload"
          />
  
  
          <button className="waves-effect waves-light btn">Upload Image</button>
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
	   form: "imageUpload", 
	   destroyOnUnmount: false })
)(ImageUploadForm);
