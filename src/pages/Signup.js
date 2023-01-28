import './Login.css'
import React from 'react';
import socialdesktop from '../images/social.png'
import scoialmobile from '../images/social-mob.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { API_BASE_URL } from '../../src/config'
import Swal from 'sweetalert2'

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const signup = (event) => {
        event.preventDefault();
        setLoading(true);

        const requestData = { fullName: fullName, email, password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                debugger;
                if (result) {
                    setLoading(false);

                    Swal.fire({
                        icon: 'success',
                        title: 'User Successfully Register'
                    })
                }
                setFullName('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);

                Swal.fire({
                    icon: 'error',
                    title: 'Some Error Try again later'
                })
            })
    }

    return (
        <div className="container signup-container">

            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center ">
                    <img className="socialdesktop-img" src={socialdesktop} alt="desktop-img" height="450px" width="400px" />
                    <img className="socialmobile-img" src={scoialmobile} alt="desktop-img" height="200px" width="400px" />

                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card shadow" >
                        {loading ?
                            <div className="col-md-12 mt-3 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> : ''}
                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>
                            <form onSubmit={(e) => signup(e)}>
                                <input type="text" className="p-2  mb-2 form-control input-bg"
                                    placeholder="Phone " />
                                <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="p-2 mb-2 form-control input-bg"
                                    placeholder="Email" />
                                <input type="text" value={fullName} onChange={(ev) => setFullName(ev.target.value)} className="p-2 mb-2 form-control input-bg"
                                    placeholder="Full Name" />
                                <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className="p-2 mb-2 form-control input-bg"
                                    placeholder="Password" />
                                <div className="mt-3 d-grid">
                                    <button type="submit" className="custom-btn custom-btn-blue">Sign Up</button>
                                </div>
                                <div className=" my-4">
                                    <hr className="text-muted" />
                                    <h5 className="text-muted text-center">OR</h5>
                                    <hr className="text-muted" />
                                </div>
                                <div className="mt-3 mb-5 d-grid">
                                    <button type="submit" className="custom-btn custom-btn-white">
                                        <span className="text-muted">Already have an  account ?</span>
                                        <Link to="/login" className="ms-1  text-info fw-bold">Log In</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
