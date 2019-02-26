import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { getUser, getProfile} from '../../store/reducers';
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
  // componentDidMount() {
  //   this.props.fetchProfile();
  // }
  handleLogout(e){
    e.preventDefault()
    this.props.logOut();
    this.props.clearCurrentProfile();
    this.props.history.push('/')
  }
  render() {
    const { user } = this.props;

    const authLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/upload">Submit a photo</Link>
        </li>
        <li>
          <Link to="/profile">
            {/* <img src={user.avatar} alt={user.name} /> */}
            Profile
          </Link>
        </li>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </ul>
    );
    const guestLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/login">
              login
            </Link>
          </li>
      </ul>
    )
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className = "brand-logo"  to="/">
              Logo
          </Link>
          {user ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
    user: getUser(state),
    profile: getProfile(state)
});

export default withRouter(connect(mapStateToProps, actions)( Navbar));
