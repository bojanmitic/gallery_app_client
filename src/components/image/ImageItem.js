import React from 'react'

const ImageItem = (props) => {
  return (
    <div>
      <img src={props.url}  alt = {props.originalName}/>
    </div>
  )
}

export default ImageItem;