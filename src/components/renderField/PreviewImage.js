import React from 'react';

const PreviewImage = props => {
    const { imageUrl } = props;
    return (
        <img src={imageUrl} alt='' style={{width: '200px', height: '200px'}}/>
    )
}

export default PreviewImage;