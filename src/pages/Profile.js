import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Profile.css'

const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPost, setShowPost] = useState(false);

    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);
    return (
        <div className="container container-profile bg-light shadow mt-3 p-4">
            <div className="row">
                <div className="col-md-6 d-flex flex-column">
                    <img className="p-2 profile-picture" alt="profile pic" src="https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <p className="ms-1 fs-5 fw-bold" >Pradnya Tawar</p>
                    <p className="ms-1 " >Pradnya Tawar</p>
                    <p className="ms-1  " >UI/UX Designer @pradnya | Follow @pradnya</p>
                    <p className="ms-1  " >My Portfolio on <a href="#">https://pradnyatawar.github.io/Portfolio/</a></p>

                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                    <div className="d-flex justify-content-equal mx-auto">
                        <div className="fs-6  count-section pe-md-5 pe-4 text-center fw-bold" >
                            <h4>10</h4>
                            <p >Post</p>
                        </div>
                        <div className=" count-section px-md-5 px-4 text-center fs-6 fw-bold">
                            <h4>100</h4>
                            <p >Follower</p>
                        </div>
                        <div className=" ps-md-5 ps-4 text-center fs-6  fw-bold"  >
                            <h4>50</h4>
                            <p > Following</p>
                        </div>
                    </div>
                    <div className="mx-auto mt-md-0 mt-4">
                        <button type="submit" className="custom-btn custom-btn-white me-md-3">
                            <span className="fs-6">Edit Profile</span>

                        </button>
                        <button type="submit" className="custom-btn custom-btn-white me-md-3" onClick={handlePostShow}>
                            <span className="fs-6" >Upload Profile</span>

                        </button>
                    </div>

                </div>
            </div>
            <div className="row my-3">
                <hr></hr>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 col-sm-12">
                    <div className="card " onClick={handleShow}>
                        <img alt="img1" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card" onClick={handleShow}>
                        <img alt="img2" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card" onClick={handleShow}>
                        <img alt="img3" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img alt="img4" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card" onClick={handleShow}>
                        <img alt="img5" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card" onClick={handleShow}>
                        <img alt="img6" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 col-sm-12">
                    <div className="card" onClick={handleShow}>
                        <img alt="img7" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card" onClick={handleShow}>
                        <img alt="img8" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card" onClick={handleShow}>
                        <img alt="img9" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt='...'>

                        </img>
                    </div>
                </div>
            </div>
            <>


                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img alt="img10" src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img alt="img11" src="https://images.unsplash.com/photo-1670271080081-bd6e50d8c195?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img alt="img12" src="https://images.unsplash.com/photo-1669915746165-232236839501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className=" shadow-sm">
                                    <div className="card-body px-2">
                                        <div className="row ">
                                            <div className="col-6 d-flex">
                                                <img className="p-2 profile-pic" alt="profile pic" src="https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                                                <div className="mt-2 ms-2">
                                                    <p className="fs-6 fw-bold">Pradnya_T</p>
                                                    <p className="location">Nagpur</p>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div class="dropdown float-end">
                                                    <a className="btn " href="#" role="button" data-bs-toggle="dropdown" >
                                                        <i className="float-end fs-3 p-2 mt-2  fa-solid fa-ellipsis"></i>
                                                    </a>

                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pen-to-square px-2"></i>Edit Post</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash-can px-2"></i>Delete Post</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-12 ">
                                                <span className="text-muted">2 Hours Ago</span>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-12 ">
                                                <p>The carousel is a slideshow for cycling through a series of content,
                                                    built with CSS 3D transforms and a bit of JavaScript. It works with a series of images,
                                                    text, or custom markup. It also includes support for previous/next controls and indicators.</p>
                                            </div>

                                        </div>
                                        <div className="row my-2">
                                            <div className="col-6 d-flex ps-2">
                                                <i className="ps-2 fs-4 fa-regular fa-heart"></i>
                                                <i className="ps-3 fs-4 fa-regular fa-comment"></i>
                                                <i className="ps-2 fs-4 fa-solid fa-location-arrow"></i>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <span className="  fs-6 fw-bold ">200likes</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </Modal.Body>

                </Modal>

                <Modal show={showPost} onHide={handlePostClose} size="lg">
                    <Modal.Header closeButton>
                        <span className="  fs-6 fw-bold ">Upload Post</span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="Upload-box">
                                <div className="dropZoneContainer">
                                        <input type="file" id="drop_zone" 
                                        className="FileUpload" 
                                        accept='.jpg, .png, .gif'
                                         placeholder="Upload post"
                                       onChange="handleFileSelect(this)" 
                                        />
                        <div className="dropZoneOverlay"><i className="fa-solid fa-cloud-arrow-up fs-3"></i><br></br>Upload from your computer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="card-body px-2">
                                    <div className="row mt-5">
                                        <div className="col-md-6 col-md-12 mb-3">
                                            <div className="form-floating ">
                                                <textarea type="text" className="form-control"
                                                    id="floatingInput" placeholder="Add location" />
                                                <label for="floatingInput">Add Captions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-6 col-md-12">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control"
                                                    id="floatingInput" placeholder="Add location" />
                                                <label for="floatingInput"><i className="p-2 fa-solid fa-location-pin"></i>Add Locations</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  mt-5">
                                        <div className="col-md-6 col-md-12">
                                            <button type="submit" className="custom-btn custom-btn-post float-end">
                                                <span className="fs-6 fw-bold" >Post</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    )
}

export default Profile

