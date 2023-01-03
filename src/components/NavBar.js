import React from 'react'
import './NavBar.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar  bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand ms-5">
                        <img src={logo} alt="desktop-img" height="50px" width="150px" />
                    </NavLink>
                    <form className="d-flex me-md-5" role="search">
                        <input className="searchbox form-control me-5 text-muted" type="search" placeholder="Search" aria-label="Search"></input>
                        <a className="nav-link text-dark fs-5 searchIcon" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <NavLink to="/post" className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house"></i></NavLink>
                        <a className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart"></i></a>
                        <div class="dropdown float-end">
                            <a className="btn " href="#" role="button" data-bs-toggle="dropdown" >

                                <img className=" profile" alt="profile pic" src="https://images.unsplash.com/photo-1672011301958-6118fd8019f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <NavLink to="myProfile" className="nav-link mt-0" href="#">
                                        <p>My Profile</p>
                                    </NavLink></li>
                                <li><NavLink to="/"  className="dropdown-item" href="#">Logout</NavLink></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;