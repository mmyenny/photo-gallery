import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import photos from './photos.json'

class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    const index = this.props.match.params.index
    const categoryData = photos[category]

    return (
      <ul className="photolist">
        {categoryData.photos.map((photo, index) => {
          return (
            <li key={index}>
              <p>{photo.title}</p>

              <Link to={`/${category}/${index}`}>
                <img src={photo.imageURL} />
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PhotoList
