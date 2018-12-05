import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <h1>Photo Gallery</h1>
          <ul>
            <li>
              <a href="/pandas">Panda Bears</a>{' '}
            </li>
            <li>
              <a href="/miniatures">Miniatures</a>{' '}
            </li>
          </ul>
        </>
      </div>
    )
  }
}

export default App
