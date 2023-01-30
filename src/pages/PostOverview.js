import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API_BASE_URL } from '../../src/config'
import Card from '../components/Card.js'
import Swal from 'sweetalert2'

const PostOverview = () => {
    const [allposts, setAllposts] = useState([]);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    const getAllPosts = async () => {
        // console.log("getAllPosts");
        const response = await axios.get(`${API_BASE_URL}/allposts`);
        if (response.status == 200) {
            setAllposts(response.data.posts);

        } else {
            Swal.fire({
                icon: 'error',
                title: 'some error occuires while getting all posts!'
            })
        }
    }
    const deletePost = async (postId) => {
        const response = await await axios.delete(`${API_BASE_URL}/deletepost/${postId}`, CONFIG_OBJ);
        if (response.status == 200) {
            getAllPosts();
        }
    }
    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div className="container mt-md-5 mt-3">
            <div className="row">

                {allposts.map((post) => {
                    return (
                        <div className="col-md-4 mb-2" key={post._id}>
                            <Card postData={post} deletePost={deletePost} getAllPosts={getAllPosts} />
                        </div>
                    )
                })}


            </div>



        </div>
    )
}

export default PostOverview;