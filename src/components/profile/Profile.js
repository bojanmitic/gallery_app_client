import React,{Component} from 'react'
import { connect } from 'react-redux';
import { getProfile } from '../../store/reducers';
import * as actions from '../../store/actions';

class Profile extends Component {
  componentDidMount(){
    this.props.fetchProfile()
  }
  render(){
    const { profile } = this.props;
    console.log(profile)
    return (
      <div>
        PROFILE
        {profile.bio}
      </div>
    )

  }
}

const mapStateToProps = state => ({
    profile: getProfile(state)
});

export default connect(mapStateToProps, actions)(Profile);
