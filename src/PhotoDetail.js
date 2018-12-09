import React, { Component } from 'react'

import photos from './photos.json'

class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const photoIndex = this.props.match.params.index
    const categoryData = photos['pandas']

    if (!categoryData) {
      return <>No such category</>
    }

    if (photoIndex >= categoryData.photos.length) {
      return <>No such photo</>
    }

    return (
      <div>
        <h2>{categoryData.photos[photoIndex].title}</h2>
        <img src={categoryData.photos[photoIndex].imageURL} />
      </div>
    )
  }
}

export default PhotoDetail
