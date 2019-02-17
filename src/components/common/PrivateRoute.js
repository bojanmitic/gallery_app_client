import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuth } from '../../store/reducers';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: getAuth(state)
});

export default connect(mapStateToProps)(PrivateRoute);