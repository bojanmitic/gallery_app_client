import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getProfile, getAuth, getImagesFromSameAuthor } from '../../store/reducers';
import * as actions from '../../store/actions';
import { Link } from 'react-router-dom';
import Images from '../image/Images';
import Spinner from '../common/Spinner';


class Profile extends Component {
  componentDidMount(){
    const {user} = this.props;
     this.props.fetchProfile()
     this.props.fetchImagesFromSameAuthor(user.id);
     
  }

  render(){
    const { profile, user, images, imagesLoading, profileLoading } = this.props;
    let imagesContent;
    if (images === undefined || images === null || imagesLoading) {
      imagesContent = <Spinner />;
    } else {
      imagesContent = <Images images={images.images} />;
    }

    return (
      <div>
        <div className="profile">
          <div className="profile__data">
            <img className="profile__data--image" src={profile.avatarCloudinaryUrl}  alt="profile "/>
            <div className="profile__data__info">
              <h3 className="profile__data__info--name">
                {`${user.firstName} ${user.lastName}`}
              </h3>
              <div>
                <a  target='_blank' rel="noopener noreferrer" href={profile.personalSitePortfolio} >{profile.personalSitePortfolio}</a>     
              </div>
              <p>
                {profile.bio}
              </p>
              <p>My Interests are: {profile.interests}</p>
              <p>At the moment I'm in {profile.location}</p>
              <Link to='/create-edit-profile'>Edit Profile</Link>
            </div>
          </div>
        </div>
          <div className="profile__images-container">
            {imagesContent}
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profile: getProfile(state),
    user: getAuth(state),
    images: getImagesFromSameAuthor(state),
    imagesLoading: state.images.loading,
    profileLoading: state.profile.loading
});

export default connect(mapStateToProps, actions)(Profile);
