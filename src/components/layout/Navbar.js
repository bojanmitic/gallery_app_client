import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { getAuth, getUser} from '../../store/reducers';

class Navbar extends Component {
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
        <button onClick={() => {}}>Logout</button>
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
});

export default connect(mapStateToProps, actions)( Navbar);
