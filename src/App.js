import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <h1>Photo Gallery</h1>
          <PhotoList />
        </>
      </div>
    )
  }
}

export default App
