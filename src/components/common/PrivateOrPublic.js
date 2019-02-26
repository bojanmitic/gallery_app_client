import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { getUser } from '../../store/reducers';

class PrivateOrPublic extends Component{
    componentDidMount() {
       this.props.checkUser();
      }
    render(){
        const  {component: Component, restricted, user, ...rest} = this.props;
        return (
            <Route {...rest} render={props => (
                user && restricted ?
                    <Redirect to="/" />
                : <Component {...props} />
            )} />
        );
    }
};

const mapStateToProps = state => ({
    user: getUser(state),
  });
  
  export default 
    connect(
      mapStateToProps, actions,
    )(PrivateOrPublic);