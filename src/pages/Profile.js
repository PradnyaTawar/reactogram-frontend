import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API_BASE_URL } from '../../src/config'
import axios from 'axios';
import Swal from 'sweetalert2'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.userReducer);

    const [image, setImage] = useState({ preview: '', data: '' })
    const [myallposts, setMyallposts] = useState([]);
    const [postDetail, setPostDetail] = useState({});

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const [caption, setCaption] = useState("");
    const [location, setLocation] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPost, setShowPost] = useState(false);

    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    const handleFileSelect = (event) => {
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0]
        }
        setImage(img);
    }
    const handleImgUpload = async () => {
        let formData = new FormData();
        formData.append('file', image.data);
        const response = axios.post(`${API_BASE_URL}/uploadFile`, formData);
        return response;
    }

    const getMyPosts = async () => {
        const response = await axios.get(`${API_BASE_URL}/myallposts`, CONFIG_OBJ);
        if (response.status == 200) {
            setMyallposts(response.data.posts);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'some error occuires while getting your posts!'
            })
        }
    }
    const showDetails = (post) => {
        setPostDetail(post);
    }
    const addPost = async () => {
        if (image.preview === '') {
            Swal.fire({
                icon: 'error',
                title: 'Post Image is mandatory!'
            })
        }
        else if (caption === '') {
            Swal.fire({
                icon: 'error',
                title: 'Caption is mandatory!'
            })
        } else if (location === '') {
            Swal.fire({
                icon: 'error',
                title: 'Location is mandatory!'
            })
        } else {
            setLoading(true);
            const imgRes = await handleImgUpload();
            const request = { description: caption, location: location, image: `${API_BASE_URL}/files/${imgRes.data.fileName}` }
            const postResponse = await axios.post(`${API_BASE_URL}/createpost`, request, CONFIG_OBJ);
            setLoading(false);

            if (postResponse.status == 201) {
                navigate("/posts")
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occured while creating post!'
                })
            }
        }

    }
    const deletePost = async (postId) => {
        const response = await await axios.delete(`${API_BASE_URL}/deletepost/${postId}`, CONFIG_OBJ);
        if (response.status == 200) {
            getMyPosts();
            setShow(false);
        }
    }
    useEffect(() => {
        getMyPosts();
    }, []);
    return (
        <div className="container container-profile bg-light shadow mt-3 p-4">
            <div className="row">
                <div className="col-md-6 d-flex flex-column">
                    <img className="p-2 profile-picture" alt="profile pic" src="https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <p className="ms-1 fs-5 fw-bold" >{user.user.email}</p>
                    <p className="ms-1 " >{user.user.fullName}</p>
                    <p className="ms-1  " >UI/UX Designer @pradnya | Follow @{user.user.fullName}</p>
                    <p className="ms-1  " >My Portfolio on <a >https://pradnyatawar.github.io/Portfolio/</a></p>

                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                    <div className="d-flex justify-content-equal mx-auto">
                        <div className="fs-6  count-section pe-md-5 pe-4 text-center fw-bold" >
                            <h4>{myallposts.length}</h4>
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
                {myallposts.map((post) => {
                    return (
                        <div className="col-md-4 col-sm-12" key={post._id}>
                            <div className="card " onClick={handleShow}>
                                <img onClick={() => showDetails(post)} alt="img1" src={post.image} className="card-img-top" alt={post.description}>
                                </img>
                            </div>
                        </div>
                    )
                })}
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
                                            <img alt="img10" src={postDetail.image} class="d-block w-100" alt="..." />
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
                                                    <p className="fs-6 fw-bold">{postDetail.fullName} </p>
                                                    <p className="location">{postDetail.location} </p>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div class="dropdown float-end">
                                                    <a className="btn " role="button" data-bs-toggle="dropdown" >
                                                        <i className="float-end fs-3 p-2 mt-2  fa-solid fa-ellipsis"></i>
                                                    </a>

                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <li><a className="dropdown-item" ><i className="fa-solid fa-pen-to-square px-2"></i>Edit Post</a></li>
                                                        <li><a onClick={() => deletePost(postDetail._id)} className="dropdown-item" ><i  className="fa-solid fa-trash-can px-2"></i>Delete Post</a></li>
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
                                        <input name="file" type="file" id="drop_zone"
                                            className="FileUpload"
                                            accept='.jpg, .png, .gif'
                                            placeholder="Upload post"
                                            onChange={handleFileSelect}
                                        />
                                        <div className="dropZoneOverlay">
                                            {image.preview && <img src={image.preview} width="200" height="200" />}
                                            <i className="fa-solid fa-cloud-arrow-up fs-3"></i><br></br>Upload from your computer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="card-body px-2">
                                    <div className="row mt-5">
                                        <div className="col-md-6 col-md-12 mb-3">
                                            <div className="form-floating ">
                                                <textarea onChange={(ev) => setCaption(ev.target.value)} type="text" className="form-control"
                                                    id="floatingInput" placeholder="Add location" />
                                                <label for="floatingInput">Add Captions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-6 col-md-12">
                                            <div className="form-floating mb-3">
                                                <input onChange={(ev) => setLocation(ev.target.value)} type="text" className="form-control"
                                                    id="floatingInput" placeholder="Add location" />
                                                <label for="floatingInput"><i className="p-2 fa-solid fa-location-pin"></i>Add Locations</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  mt-5">
                                        <div className="col-md-6 col-md-12">
                                            {loading ?
                                                <div className="col-md-12 mt-3 text-center">
                                                    <div className="spinner-border text-primary" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div> : ''}
                                            <button onClick={() => addPost()} type="submit" className="custom-btn custom-btn-post float-end">
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

