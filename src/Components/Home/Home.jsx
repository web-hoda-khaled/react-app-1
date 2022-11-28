import React, { Component } from 'react'
import './home.css'
export default class Home extends Component {
  render() {
    return (
      <header className='vh-100 d-flex justify-content-center align-items-center flex-column '>
        <div className="home-content text-center text-white" >
          <figure>
          <img src="./img/header.svg" className='w-50 mb-2' alt="img" />
          </figure>
          <h1 className='mb-2 fw-bolder'>START REACT</h1>
          <div className="icon mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    )
  }
}
