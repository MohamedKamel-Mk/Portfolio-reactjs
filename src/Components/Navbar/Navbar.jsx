import { Link } from 'react-router-dom';

export default function Navbar() {

    return <>
        <nav className="navbar navbar-expand-lg mainColor navbar-dark shadow fixed-top">
    <div className="container">
        <a className="navbar-brand fs-2 fw-bold" href="/">START FRAMEWORK</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-lg-0 fw-bold">
            <li className="nav-item">
                <Link className="nav-link" to={'/'}></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'about'} activeclassname="active">ABOUT</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'portfolio'} activeclassname="active">PORTFOLIO</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'contact'} activeclassname="active">CONTACT</Link>
            </li>
        </ul>
        </div>
    </div>
</nav>
    </>
}
