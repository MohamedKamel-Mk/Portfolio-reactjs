import React from 'react'

export default function About() {
    return <>
    <section className='home d-flex justify-content-center align-items-center'>
        <div className="container mt-5 py-5 d-flex flex-column justify-content-center align-items-center">
            <div className="title text-center text-white mt-5">
            <h2 className='text-uppercase mb-3 fs-1 fw-bold'>ABOUT COMPONENT</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className="titleLine me-3"></div>
                <i className='fa-solid fa-star'></i>
                <div className="titleLine ms-3"></div>
            </div> 
            <div className="row px-5">
                <div className="col-md-6 ps-md-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 ps-md-5 mb-5 pb-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
}
