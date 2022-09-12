import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth'
import { QUERY_POST } from '../utils/queries';

import LikeButton from '../components/LikeButton';

function Post() {
    const {postId} = useParams()
    const {loading, data} = useQuery(QUERY_POST, {
        variables: {postId: postId}
    })

    const profData = Auth.getProfile()
    const userData = profData.data
    const comPost = () => console.log('commented on post')

    const {_id, likeCount, body, username, image, createdAt, comments} = data?.getPost || {};
    const likes = data?.getPost?.likes || [];
    console.log(likes)
    
    return(
        <div>
            <br></br>
            <p>created at: {createdAt}</p>
            <img src={`/images/${image}`}/>
            <h3>{body}</h3>
            <h4>By: {username}</h4>
            <hr/>
            <LikeButton user={userData} post={{_id, likes, likeCount}}/>
            <button onClick={comPost}>💬</button>

            {comments?.map(comment =>
                <div key={comment.id}>
                    <br></br><hr></hr>
                    <h4>comment: {comment.body}</h4>
                    <p>by: {comment.username}</p>
                </div>
            )}
            <br></br>
        </div>
    )
}

export default Post