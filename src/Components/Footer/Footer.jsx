import React, { Component } from 'react'
import "./Footer.css"
export default class Footer extends Component {
  render() {
    return (
      <footer className='p-5 text-white footer'>
      <div className=" container py-5">
        <div className="row">

 
          <div className="col-md-4">
            <div className="footer-inner text-center">
              <h3 className='m-3'>LOCATION</h3>
              <p>2215 John Daniel DriveClark, MO 65243</p>
            </div>
          </div>


          <div className="col-md-4">
            <div className="footer-inner text-center">
              <h3 className='m-3'>AROUND THE WEB</h3>
              <ul className='d-flex justify-content-center align-items-center'>
                <li className='me-3 d-flex justify-content-center align-items-center rounded-circle'><i className="fa-brands fa-facebook-f "></i></li>
                <li className='me-3 d-flex justify-content-center align-items-center rounded-circle'><i className="fa-brands fa-twitter "></i></li>
                <li className='me-3 d-flex justify-content-center align-items-center rounded-circle'><i className="fa-brands fa-linkedin "></i></li>
                <li className='me-3 d-flex justify-content-center align-items-center rounded-circle'><i className="fa-solid fa-basketball "></i></li>
              </ul>
            </div>
          </div>


          <div className="col-md-4">
            <div className="footer-inner text-center">
              <h3 className='m-3'>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
          </div>

        </div>
      </div>
      </footer>
    )
  }
}
