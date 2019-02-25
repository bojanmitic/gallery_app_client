import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField";
import * as actions from "../../store/actions";
import validate from "../../utils/validate";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../store/reducers";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: new FormData()
    };
  }
  componentDidMount() {
    this.props.fetchProfile();
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
          <input name="avatar" type="file" onChange={this.onFileChange} />
          <button className="waves-effect waves-light btn">Save Profile</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: getProfile(state)
})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({
    validate,
    form: "profileForm",
    enableReinitialize : true,
    destroyOnUnmount: false
  })
)(ProfileForm);
