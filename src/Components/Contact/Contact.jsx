import React from 'react'

export default function Contact() {
    return <>
        <section className='portfolio py-3 d-flex justify-content-center align-items-center'>
            <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
                <div className="title text-center">
                    <h2 className='text-uppercase mb-3 fs-1 fw-bold'>CONATCT SECTION</h2>
                    <div className='d-flex align-items-center justify-content-center mb-3'>
                        <div className="titleLine me-3"></div>
                        <i className='fa-solid fa-star'></i>
                        <div className="titleLine ms-3"></div>
                    </div>
                </div>
                <form className='contact-form px-3 py-4 mx-auto mt-5 w-50'>
                    <div>
                        <input type="text" id='userName' placeholder='User Name' className='form-control border-0 border-bottom py-3 position-relative'/>
                        <label htmlFor="userName" className='position-relative'>User Name : </label>
                    </div>
                    <div>
                        <input type="number" id='userAge' placeholder='User Age' className='form-control border-0 border-bottom py-3 position-relative' />
                        <label htmlFor="userAge" className='position-relative'>User Age :</label>
                    </div>
                    <div>
                        <input type="email" id='userEmail' placeholder='Your email' className='form-control border-0 border-bottom py-3 position-relative' />
                        <label htmlFor="userEmail" className='position-relative'>User Email :</label>
                    </div>                    
                    <div>
                        <input type="password" id='password' placeholder='Your Password' className='form-control border-0 border-bottom py-3 position-relative' />
                        <label htmlFor="password" className='position-relative'>User Password :</label>
                    </div>          
                    <button type="button" class="btn text-white">send Message</button>
                    </form>
            </div>
        </section>
    </>
}
