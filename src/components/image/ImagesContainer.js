import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import { getImages } from '../../store/reducers'
import Images from './Images';
import Spinner from '../common/Spinner';


class ImagesContainer extends Component {
  componentDidMount(){
      this.props.fetchImages()
  }
  render() {
    const { images, loading } = this.props;
    let imagesContent;
    if (images === null || loading) {
      imagesContent = <Spinner />;
    } else {
      imagesContent = <Images images={images.images} />;
    }

    return (
      <div className="images-container">
            {imagesContent}
      </div>
    );
  
  }
}

const mapStateToProps = state => ({
  images: getImages(state),
  loading: state.images.loading
})

export default connect(mapStateToProps, actions)(ImagesContainer);