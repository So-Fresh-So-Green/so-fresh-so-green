import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth'
import { QUERY_POST } from '../utils/queries';

import LikeButton from '../components/LikeButton';
import DeletePostButton from '../components/DeletePostButton'

function Post(props) {
    const {postId} = useParams()
    const {loading, data} = useQuery(QUERY_POST, {
        variables: {postId: postId}
    })
    const comPost = () => console.log('commented on post')
    const history = useNavigate()
    const delCallback = () => {
        history('/newsfeed')
    }

    const {_id, likeCount, body, username, image, createdAt, comments, userId} = data?.getPost || {};
    const likes = data?.getPost?.likes || [];

    const profData = Auth.getProfile()
    const userData = profData.data
    const rightUser = userData._id === userId
    
    return(
        <div>
            <br></br>
            <p>created at: {createdAt}</p>
            <img src={`/images/${image}`}/>
            <h3>{body}</h3>
            <h4>By: {username}</h4>
            <hr/>
            <button onClick={comPost}>💬</button>
            <LikeButton user={userData} post={{_id, likes, likeCount}}/>
            {rightUser ? <DeletePostButton postId={{_id}} callback={delCallback} /> : null}

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