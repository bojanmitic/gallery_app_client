import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { getAuth, getUser} from '../../store/reducers';

class Navbar extends Component {
  render() {
    const { isAuthenticated } = this.props;

    const authLinks = (
      <ul className="nav-links">
        <li className = 'nav-link__item'>
          <Link to="/upload">Submit a photo</Link>
        </li>
        <li className = 'nav-link__item'>
          <Link to="/profile">
            {/* <img src={user.avatar} alt={user.name} /> */}
            Profile
          </Link>
        </li>
        <button className = 'nav-link__item' onClick={() => {}}>Logout</button>
      </ul>
    );
    const guestLinks = (
      <ul className="nav-links">
          <li className = 'nav-link__item'>
            <Link to="/signup">signup</Link>
          </li>
          <li className = 'nav-link__item'>
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
          {true ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: getAuth(state),
    user: getUser(state),
});

export default connect(mapStateToProps, actions)( Navbar);
