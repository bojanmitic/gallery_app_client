import React from 'react';
import ImageItem from './ImageItem';

const Images = (props) => {
    const { images } = props;
    console.log(images);
     return images.map(image => <ImageItem key={image._id} image={image} />)
}

export default Images;
