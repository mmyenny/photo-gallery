import React, { Component } from 'react'

import photos from './photos.json'

class PhotoDetail extends Component {
  render() {
    const categoryData = photos['pandas']
    const photoIndex = 0
    return (
      <div>
        <h2>{categoryData.photos[photoIndex].title}</h2>
        <img src={categoryData.photos[photoIndex].imageURL} />
      </div>
    )
  }
}

export default PhotoDetail
