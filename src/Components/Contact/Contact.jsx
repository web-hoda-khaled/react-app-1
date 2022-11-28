import React, { Component } from 'react'
import './content.css'
export default class Contact extends Component {
  render() {
    return (
      <section className='contact p-5'>
            <div className="heading text-center mb-5">
            <h2 className='fw-bolder'>CONTACT ME</h2>
            <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
          </div>
        <div className="container">
           <div className="row">
            <div className="col-sm-12">
             <div className="inner-contect w-50 m-auto">
              <input type="text" placeholder='Name' className='form-control form-control-lg py-3 rounded-0' />
             </div>
            </div>

            <div className="col-sm-12">
             <div className="inner-contect w-50 m-auto mt-4">
              <input type="email" placeholder='Email Address' className='form-control form-control-lg py-3 rounded-0' />
             </div>
            </div>

            <div className="col-sm-12">
             <div className="inner-contect w-50 m-auto mt-4">
              <input type="number" placeholder='Phone Number' className='form-control form-control-lg py-3 rounded-0' />
             </div>
            </div>



            <div className="col-sm-12">
             <div className="inner-contect w-50 m-auto mt-4">
                <textarea name="" placeholder='Massege' className='w-100 pb-5 form-control form-control-lg rounded-0'></textarea>
             </div>
            </div>

            <div className="col-sm-12">
             <div className="inner-contect w-50 m-auto mt-4">
                <button className='btn  py-3 px-4 text-white fw-bold`'>SEND</button>
             </div>
            </div>


           </div>
        </div>
      </section>
    )
  }
}
