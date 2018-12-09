import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import photos from './photos.json'

class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    const index = this.props
    const categoryData = photos[category]

    if (!categoryData) {
      return <>No such category</>
    }

    return (
      <ul className="photolist">
        {categoryData.photos.map((photo, index) => {
          return (
            <li key={index}>
              <Link to={`/${category}/${index}`}>
                <p>{photo.title}</p>
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
