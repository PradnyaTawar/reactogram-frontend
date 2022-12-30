import React from 'react'
import './NavBar.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar  bg-light shadow-sm">
                <div className="container-fluid">
                    <div className="navbar-brand ms-3">
                    <img className="socialdesktop-img" src={logo}  alt="desktop-img" height="50px" width="150px" />
                    </div>
                    <form className="d-flex me-md-5" role="search">
                        <input className="searchbox form-control me-5 text-muted" type="search" placeholder="Search" aria-label="Search"></input>
                        <a className="nav-link text-dark fs-5 srarchIcon" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-house"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i class="fa-regular fa-heart"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-circle"></i></a>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;