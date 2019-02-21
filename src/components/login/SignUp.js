import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField";
import * as actions from "../../store/actions";
import { getSignUpMsg } from "../../store/reducers/index";
import validate from '../../utils/validate';

const SignUp = props => {
  const { handleSubmit, signUpMsg } = props;

  const SignUp = values => {
    props.signUpUser(values);
  };
  return (
    <>
      {signUpMsg ? <div className="green-text">{signUpMsg}</div> : null}
      <form onSubmit={handleSubmit(SignUp)}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field
          name="email"
          component={renderField}
          type="email"
          label="Email"
        />
        <Field
          name="password"
          component={renderField}
          type="password"
          label="Password"
        />

        <button className="waves-effect waves-light btn">Sign in</button>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  signUpMsg: getSignUpMsg(state)
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({
	  validate,
	   form: "signup", 
	   destroyOnUnmount: false })
)(SignUp);
