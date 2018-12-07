import React, { Component } from 'react'

import photos from './photos.json'

class CategoryList extends Component {
  render() {
    console.log(photos)
    return (
      <ul>
        <li>
          <a href="/pandas">Panda Bears</a>{' '}
        </li>
        <li>
          <a href="/miniatures">Miniatures</a>{' '}
        </li>
      </ul>
    )
  }
}

export default CategoryList
