import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import { withRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import PublicComponent from "./containers/PublicComponent";
import PrivateOrPublic from './components/common/PrivateOrPublic';


import NavBar from "../src/components/layout/Navbar";
import Home from "./components/layout/Home";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import ProfileForm from "./components/profile/ProfileForm";
import Profile from "./components/profile/Profile";
import Image from "./components/image/ImageItem";
import ImageUploadForm from "./components/imageUpload/ImageUploadForm";

import "./styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PrivateOrPublic restricted={false} component={Home} />}
          />
          <Route
            exact
            path="/login"
            render={() => <PublicComponent component={Login} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <PublicComponent component={SignUp} />}
          />
          {/* TO DO single Profile by handle backend also */}
          <Route
            exact
            path="/photos/:id"
            render={() => <PublicComponent component={Image} />}
          />

          <Route
            exact
            path="/upload"
            render={() => <PrivateRoute component={ImageUploadForm} />}
          />
          <Route
            exact
            path="/create-edit-profile"
            render={() => <PrivateRoute component={ProfileForm} />}
          />
          <Route
            exact
            path="/profile"
            render={() => <PrivateRoute component={Profile} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    actions
  )(App)
);
