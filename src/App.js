import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';

import NavBar from '../src/components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';

import './styles/main.scss';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact>
        </Route>
      </Switch>
    );
  }
}

export default App;
