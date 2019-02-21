import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuth } from '../../store/reducers';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>
      auth ? (
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


const mapStateToProps = state => ({
  auth: getAuth(state)
});

export default connect(mapStateToProps)(PrivateRoute);