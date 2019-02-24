import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import FieldFileInput from '../renderField/FieldFileInput';
import renderField from "../renderField";
import * as actions from "../../store/actions";
import validate from '../../utils/validate';
import { withRouter } from 'react-router-dom';
import renderDropzoneInput from '../renderField/RenderDropzoneField';

class ImageUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ preview: e[0].preview });
  }
  
   onImageUpload = values => {
    //  let formData = new FormData();
    //  formData.append('cameraMake', values.cameraMake);
    //  formData.append('cameraModel', values.cameraModel);
    //  formData.append('focalLength', values.focalLength);
    //  formData.append('focalLength', values.focalLength);
    //  formData.append('iso', values.iso);
    //  formData.append('image', values.image[0]);
    var body = new FormData();
    Object.keys(values).forEach(( key ) => {
      body.append(key, values[ key ]);
    });
    this.props.uploadImage(body, () => {
      this.props.history.push('/');
    })
  };
  render(){
    const { handleSubmit} = this.props;
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
            component={renderDropzoneInput}
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
