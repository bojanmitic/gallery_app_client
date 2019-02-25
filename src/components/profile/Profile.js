import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getProfile, getAuth } from '../../store/reducers';
import * as actions from '../../store/actions';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';

class Profile extends Component {
  componentDidMount(){
    this.props.fetchProfile()
  }
  render(){
    const { profile, name } = this.props;
    return (
      <div className="profile">
      <div className="profile__data">
        <img className="profile__data--image" src={profile.avatarCloudinaryUrl}  alt="profile "/>
        <div>
          <h3 className="profile__data--name">
            {`${name.firstName} ${name.lastName}`}
          </h3>
          <div>
            <a  target='_blank' rel="noopener noreferrer" href={profile.personalSitePortfolio} >Personal Website</a>     
          </div>
        </div>
      </div>
      </div>
    )

  }
}

const mapStateToProps = state => ({
    profile: getProfile(state),
    name: getAuth(state)
});

export default connect(mapStateToProps, actions)(Profile);
