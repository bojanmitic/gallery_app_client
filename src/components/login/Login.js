import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField";
import * as actions from "../../store/actions";
import validate from '../../utils/validate';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  
   onSubmit = values => {
    this.props.login(values, () => {
      this.props.history.push('/');
    })
  };
  render(){
    const { handleSubmit } = this.props;
  
    return (
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
  
          <button className="waves-effect waves-light btn">Login</button>
        </form>
      </>
    );
  }
};

// const mapStateToProps = state => ({
  
// });

export default compose(
  withRouter,
  connect(
    null,
    actions
  ),
  reduxForm({
	  validate,
	   form: "login", 
	   destroyOnUnmount: false })
)(Login);
