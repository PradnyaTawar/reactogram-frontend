import React from 'react'
import './Card.css'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { API_BASE_URL } from '../../src/config'

const Card = (props) => {
    const user = useSelector(state => state.userReducer);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    const likeDislikePost = async (postId , type) => {
        const request = { "postId": postId }
        const response = await axios.put(`${API_BASE_URL}/${type}`, request, CONFIG_OBJ);
        if (response.status == 200) {
            props.getAllPosts();
        }
    }

    return (
        <div>
            <div className="card  shadow-sm">
                <div className="card-body px-2">
                    <div className="row ">
                        <div className="col-6 d-flex">
                            <img className="p-2 profile-pic" alt="profile pic" src="https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                            <div className="mt-2">
                                <p className="fs-6 fw-bold">{props.postData.author.fullName}</p>
                                <p className="location">{props.postData.location}</p>
                            </div>
                        </div>
                        {props.postData.author._id === user.user._id ? <div className="col-6">
                            <i onClick={() => props.deletePost(props.postData._id)} class="float-end fs-3 p-2 mt-2 fa-solid fa-ellipsis-vertical"></i>
                        </div> : ""}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img style={{ borderRadius: '10px;' }} alt="profile-post"
                                src={props.postData.image}
                                className="p-2 img-fluid"></img>
                        </div>

                    </div>
                    <div className="row my-2">
                        <div className="col-6 d-flex ps-2">
                            <i onClick={() => likeDislikePost(props.postData._id, 'likes')} className="ps-2 fs-4 fa-regular fa-heart"></i>
                            <i onClick={() => likeDislikePost(props.postData._id, 'unlikes')} className="ps-2  fs-4 fa-solid fa-heart-crack"></i>
                            <i className="ps-3 fs-4 fa-regular fa-comment"></i>
                            <i className="ps-2 fs-4 fa-solid fa-location-arrow"></i>
                        </div>
                        <div className="col-6">
                            <span className="pe-2 fs-6 fw-bold float-end">{props.postData.likes.length} likes</span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <span className="p-2 text-muted">2 Hours Ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;