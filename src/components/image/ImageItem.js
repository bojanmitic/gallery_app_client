import React from 'react'

const ImageItem = (props) => {
  const { image } = props;
  return (
    <figure className="single-image-container">
      <img src={image.imageUrl} alt={image.name} />
    </figure>
  )
}

export default ImageItem;