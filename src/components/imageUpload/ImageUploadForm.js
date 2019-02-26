import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField";
import * as actions from "../../store/actions";
import { getImageUploadProgress } from '../../store/reducers';
import validate from "../../utils/validate";
import { withRouter } from "react-router-dom";
import ProgressBar from '../common/progressBar/ProgressBar';

class ImageUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: new FormData()
    };
  }

  onFileChange = e => {
    const { formValues } = this.state;
    const image = e.target.files[0];
    formValues.append("image", image);
    this.setState({
      formValues
    });
  };

  onImageUpload = values => {
    const { formValues: formData } = this.state;
    formData.append("cameraMake", values.cameraMake);
    formData.append("cameraModel", values.cameraModel);
    formData.append("focalLength", values.focalLength);
    formData.append("iso", values.iso);

    this.props.uploadImage(formData, () => {
      this.props.history.push("/");
    });
  };
  render() {
    const { handleSubmit, imageUploadProgress } = this.props;
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
          <Field name="iso" component={renderField} type="text" label="ISO" />
          <input name="image" type="file" onChange={this.onFileChange} />
          <button className="waves-effect waves-light btn">Upload Image</button>
        </form>
        <ProgressBar percentage={imageUploadProgress}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  imageUploadProgress: getImageUploadProgress(state)
})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({
    validate,
    form: "imageUpload",
    destroyOnUnmount: false
  })
)(ImageUploadForm);
