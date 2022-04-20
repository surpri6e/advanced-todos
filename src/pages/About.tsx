import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <h1 className='display-4 fw-bold text-decoration-underline'>About us</h1>
      <div className='d-flex flex-nowrap mt-3'>

        <div className='w-50 d-flex justify-content-start'>
          <div className="card w-75" aria-hidden="true">
            <div className='card-img-top bg-secondary h-50'></div>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6 bg-success"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7 bg-primary"></span>
                <span className="placeholder col-8 bg-primary"></span>
                <span className="placeholder col-4 bg-primary"></span>
                <span className="placeholder col-6 bg-primary"></span>
                <span className="placeholder col-8 bg-primary"></span>
              </p>
              {/* eslint-disable-next-line */}
              <a href="/"  className="btn btn-primary disabled placeholder col-6"></a>
            </div>
          </div>
        </div>

        <div className='w-50 d-flex justify-content-end'>
          <div className="card w-75 fixed-right" aria-hidden="true">
            <div className='card-img-top bg-primary h-50'></div>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6 bg-success"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7 bg-success."></span>
                <span className="placeholder col-8 bg-success."></span>
                <span className="placeholder col-4 bg-success."></span>
                <span className="placeholder col-6 bg-success."></span>
                <span className="placeholder col-8 bg-success."></span>
              </p>
              {/* eslint-disable-next-line */}
              <a href="#"  className="btn btn-primary disabled placeholder col-6"></a>
            </div>
          </div>
        </div>

      </div>

      <p className='font-monospace text-dark mt-5 mb-5'>
          About us. We are company which develompent todos for you.
      </p>

    </div>
  )
}

export default About