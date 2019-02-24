import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField";
import * as actions from "../../store/actions";
import validate from "../../utils/validate";
import { withRouter } from "react-router-dom";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: new FormData()
    };
  }

  onFileChange = e => {
    const { formValues } = this.state;
    const avatar = e.target.files[0];
    formValues.append("avatar", avatar);
    this.setState({
      formValues
    });
  };

  onImageUpload = values => {
    const { formValues: formData } = this.state;
    formData.append("personalSitePortfolio", values.personalSitePortfolio);
    formData.append("location", values.location);
    formData.append("bio", values.bio);
    formData.append("interests", values.interests);
    formData.append("avatar", values.avatar);

    this.props.createProfile(formData, () => {
      this.props.history.push("/");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit(this.onImageUpload)}>
          <Field
            name="personalSitePortfolio"
            component={renderField}
            type="text"
            label="Personal Site"
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
          <Field name="interests" component={renderField} type="text" label="Interests" />
          <input name="avatar" type="file" onChange={this.fileChange} />
          <button className="waves-effect waves-light btn">Create Profile</button>
        </form>
      </>
    );
  }
}

export default compose(
  withRouter,
  connect(
    null,
    actions
  ),
  reduxForm({
    validate,
    form: "profileForm",
    destroyOnUnmount: false
  })
)(ProfileForm);
