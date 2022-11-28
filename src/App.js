import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Foot from './Components/Foot/Foot';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
        <Foot />
        </div>
    )
  }
}
