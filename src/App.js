import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions'
import { withRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import PublicComponent from './containers/PublicComponent'

import NavBar from '../src/components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';


import './styles/main.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
       <Switch>
         <Route exact path="/" render={() => <PublicComponent component = {Home} />} />
         <Route exact path="/login" render={() => <PublicComponent component = {Login} />} />
         <Route exact path="/signup" render={() => <PublicComponent component = {SignUp} />} />
       </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(null, actions)(App)
);
