import React, { Component } from 'react'
import './Foot.css'
export default class Foot extends Component {
  render() {
    return (
      <div className='foot p-3'>
        <div className="inner-foot w-50 m-auto text-white text-center">
           <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    )
  }
}
