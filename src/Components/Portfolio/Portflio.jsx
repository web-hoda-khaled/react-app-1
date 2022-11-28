import React, { Component } from 'react'
import './portfolio.css'
export default class Portfolio extends Component {
  render() {
    return (
        <section className='portfolio p-5'>
          <div className="heading text-center mb-4">
            <h2 className='fw-bolder'>PORTFOLIO</h2>
            <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4 ">
                <div className="portfolio-inner rounded-3 position-relative">
                  <figure>
                  <img src="./img/port1.png" className='w-100 rounded-3' alt="img" />
                  <figcaption className='portfolio-layer position-absolute rounded-3 d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
                  </figcaption>
                  </figure>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="portfolio-inner rounded-3 position-relative">
                  <figure>
                  <img src="./img/port2.png" className='w-100 rounded-3' alt="img" />
                  <figcaption className='portfolio-layer position-absolute rounded-3 d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
                  </figcaption>
                  </figure>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="portfolio-inner rounded-3 position-relative">
                  <figure>
                  <img src="./img/port3.png" className='w-100 rounded-3' alt="img" />
                  <figcaption className='portfolio-layer position-absolute rounded-3 d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
                  </figcaption>
                  </figure>
                </div>
              </div>



              <div className="col-md-4 ">
                <div className="portfolio-inner rounded-3 position-relative">
                  <figure>
                  <img src="./img/port4.png" className='w-100 rounded-3' alt="img" />
                  <figcaption className='portfolio-layer position-absolute rounded-3 d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal4">
                    <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
                  </figcaption>
                  </figure>
                </div>
              </div>


              

              <div className="col-md-4 ">
                <div className="portfolio-inner rounded-3 position-relative">
                  <figure>
                  <img src="./img/port5.png" className='w-100 rounded-3' alt="img" />
                  <figcaption className='portfolio-layer position-absolute rounded-3 d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal5">
                    <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
                  </figcaption>
                  </figure>
                </div>
              </div>

              
              <div className="col-md-4 ">
                <div className="portfolio-inner rounded-3 position-relative">
                  <figure>
                  <img src="./img/port6.png" className='w-100 rounded-3' alt="img" />
                  <figcaption className='portfolio-layer position-absolute rounded-3 d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal6">
                    <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
                  </figcaption>
                  </figure>
                </div>
              </div>

            </div>



{/* innerdiv 1 */}
<div className="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header text-center flex-column border-0">
      <button type="button" className="btn-close" >
      <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fa-xmark"></i>
      </button>

        <h5 className="modal-title fw-bolder mb-3">LOG CABIN</h5>
        <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
      </div>



      <div className="modal-body text-center ">
        <img src="./img/port1.png" alt="img" className="w-75" />
          <div className='w-75 m-auto mt-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          </div>
      </div>



      <div className="modal-footer border-0 justify-content-center pb-5">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close Window</button>
      </div>
    </div>
  </div>
</div>

{/* innerdiv 2 */}
<div className="modal modal-xl fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header text-center flex-column border-0">
      <button type="button" className="btn-close" >
      <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fa-xmark"></i>
      </button>

        <h5 className="modal-title fw-bolder mb-3">LOG CABIN</h5>
        <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
      </div>



      <div className="modal-body text-center ">
        <img src="./img/port2.png" alt="img" className="w-75" />
          <div className='w-75 m-auto mt-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          </div>
      </div>



      <div className="modal-footer border-0 justify-content-center pb-5">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close Window</button>
      </div>
    </div>
  </div>
</div>

{/* innerdiv 3*/}
<div className="modal modal-xl fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header text-center flex-column border-0">
      <button type="button" className="btn-close" >
      <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fa-xmark"></i>
      </button>

        <h5 className="modal-title fw-bolder mb-3">LOG CABIN</h5>
        <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
      </div>



      <div className="modal-body text-center ">
        <img src="./img/port3.png" alt="img" className="w-75" />
          <div className='w-75 m-auto mt-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          </div>
      </div>



      <div className="modal-footer border-0 justify-content-center pb-5">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close Window</button>
      </div>
    </div>
  </div>
</div>

{/* innerdiv 4*/}
<div className="modal modal-xl fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header text-center flex-column border-0">
      <button type="button" className="btn-close" >
      <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fa-xmark"></i>
      </button>

        <h5 className="modal-title fw-bolder mb-3">LOG CABIN</h5>
        <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
      </div>



      <div className="modal-body text-center ">
        <img src="./img/port4.png" alt="img" className="w-75" />
          <div className='w-75 m-auto mt-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          </div>
      </div>



      <div className="modal-footer border-0 justify-content-center pb-5">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close Window</button>
      </div>
    </div>
  </div>
</div>


{/* innerdiv 5*/}
<div className="modal modal-xl fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header text-center flex-column border-0">
      <button type="button" className="btn-close" >
      <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fa-xmark"></i>
      </button>

        <h5 className="modal-title fw-bolder mb-3">LOG CABIN</h5>
        <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
      </div>



      <div className="modal-body text-center ">
        <img src="./img/port5.png" alt="img" className="w-75" />
          <div className='w-75 m-auto mt-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          </div>
      </div>



      <div className="modal-footer border-0 justify-content-center pb-5">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close Window</button>
      </div>
    </div>
  </div>
</div>

{/* innerdiv 6*/}
<div className="modal modal-xl fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header text-center flex-column border-0">
      <button type="button" className="btn-close" >
      <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fa-xmark"></i>
      </button>

        <h5 className="modal-title fw-bolder mb-3">LOG CABIN</h5>
        <div className="icon-dark mb-3">
          <span className='position-relative star'><i className="fa-solid fa-star fa-2x"></i></span>
          </div>
      </div>



      <div className="modal-body text-center ">
        <img src="./img/port6.png" alt="img" className="w-75" />
          <div className='w-75 m-auto mt-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          </div>
      </div>



      <div className="modal-footer border-0 justify-content-center pb-5">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close Window</button>
      </div>
    </div>
  </div>
</div>
          </div>
        </section>
    )
  }
}
