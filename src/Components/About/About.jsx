import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
<section className='about p-5'>

<div className="heading text-center mb-5">
            <h2 className='fw-bolder text-white'>ABOUT</h2>
            <div className="icon mb-3">
          <span className='position-relative star text-white'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
          </div>

  <div className="container ">
    <div className="row px-5">
      <div className="col-md-6">
        <div className="about-inner text-white ps-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="about-inner text-white pe-5">
          <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
  }
}
