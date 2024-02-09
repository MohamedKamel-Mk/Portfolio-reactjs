import React from 'react'
import img from '../../Assets/Images/avatar.svg'

export default function Home() {
  return <>
    <section className='home vh-100 d-flex justify-content-center align-items-center'>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <img src={img} className='w-25' alt="" />
        <div className="title text-center pt-4 text-white">
          <h2 className='text-uppercase mb-3 fs-1 fw-bold'>start Framework</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className="titleLine me-3"></div>
            <i className='fa-solid fa-star'></i>
            <div className="titleLine ms-3"></div>
          </div>
          <div className="text-white">Graphic Artist - Web Designer - Illustrator</div>
        </div>
        
      </div>
    </section>
  </>
}
