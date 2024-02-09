import React, { useState } from 'react'
import img1 from '../../Assets/Images/firstOne.png'
import img2 from '../../Assets/Images/seconedOne.png'
import img3 from '../../Assets/Images/thirdOne.png'
import Modal from '../Modal/Modal'
import PortfolioCard from '../PortfolioCard/PortfolioCard'

export default function Portfolio() {
    const imageList = [
        {id: 1, src: img1, alt: "Web"},
        {id: 2, src: img2, alt: "App"},
        {id: 3, src: img3, alt: "Mpbile"},
        {id: 4, src: img1, alt: "Web"},
        {id: 5, src: img2, alt: "App"},
        {id: 6, src: img3, alt: "Mpbile"},
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const toggleModal = (src) => {
        setIsOpen(true);
        setSelectedImage(src);
    };
    return <>
        <section className="portfolio min-vh-100 py-5 d-flex justify-content-center align-items-center">
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="title text-center pt-4 ">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                portfolio component
                </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="titleLine me-3"></div>
                <i className='fa-solid fa-star'></i>
                <div className="titleLine ms-3"></div>
            </div>
            </div>
            <div className="row  g-4">
                {imageList.map((img) => (
                <PortfolioCard key={img.id} img={img} toggleModal={toggleModal} />
                ))}
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} img={selectedImage} />}
        </div>
        </section>
    </>;
}
