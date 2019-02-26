import React from 'react';
import ImageItem from './ImageItem';
import Masonry from 'react-masonry-css'

const Images = (props) => {
    const { images } = props;
    return(
        <Masonry
            breakpointCols={3}  
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {images.map(image => <ImageItem key={image._id} image={image} />)}
        </Masonry>
    )
}

export default Images;
