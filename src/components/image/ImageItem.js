import React from 'react'

const ImageItem = (props) => {
  const { image } = props;
  return (
    <div className="image-container">
      <img src={image.imageUrl} alt={image.name} />
    </div>
  )
}

export default ImageItem;