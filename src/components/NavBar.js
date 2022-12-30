import React from 'react'
import './NavBar.css'
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar  bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand ms-5">
                    <img src={logo}  alt="desktop-img" height="50px" width="150px" />
                    </NavLink>
                    <form className="d-flex me-md-5" role="search">
                        <input className="searchbox form-control me-5 text-muted" type="search" placeholder="Search" aria-label="Search"></input>
                        <a className="nav-link text-dark fs-5 searchIcon" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <NavLink to="/post" className="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-house"></i></NavLink>
                        <a className="nav-link text-dark fs-5" href="#"><i class="fa-regular fa-heart"></i></a>
                           
                        <NavLink to="myProfile" className="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-circle"></i></NavLink>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;