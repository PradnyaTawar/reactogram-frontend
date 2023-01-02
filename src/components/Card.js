import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div>
            <div className="card  shadow-sm">
                <div className="card-body px-2">
                    <div className="row ">
                        <div className="col-6 d-flex">
                            <img className="p-2 profile-pic" alt="profile pic" src="https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                            <div className="mt-2">
                                <p className="fs-6 fw-bold">Pradnya_T</p>
                                <p className="location">Nagpur</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <i class="float-end fs-3 p-2 mt-2 fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img style={{ borderRadius: '10px;' }} alt="profile-post" 
                                src="https://images.unsplash.com/photo-1670858954202-ea9b0c7acce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                className="p-2 img-fluid"></img>
                        </div>

                    </div>
                    <div className="row my-2">
                        <div className="col-6 d-flex ps-2">
                        <i class="ps-2 fs-4 fa-regular fa-heart"></i>
                        <i class="ps-3 fs-4 fa-regular fa-comment"></i>
                        <i class="ps-2 fs-4 fa-solid fa-location-arrow"></i>
                        </div>
                        <div className="col-6">
                            <span className="pe-2 fs-6 fw-bold float-end">200likes</span>
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