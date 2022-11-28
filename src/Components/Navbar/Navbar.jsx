import React, { Component } from 'react'
import{Link}from 'react-router-dom'
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (

    <nav className="navbar navbar-expand-lg px-5 py-4 ">
  <div className="container">
    <Link className="navbar-brand fw-bolder text-white" to="" >START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item me-5">
          <Link className="nav-link fw-bolder " to="/home" >HOME</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link fw-bolder " aria-current="page" to="/portfolio" >PORTFOLIO</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link fw-bolder " to="/about" >ABOUT</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link fw-bolder " to="/contact" >CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
  }
}
