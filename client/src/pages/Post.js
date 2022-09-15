import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth'
import { QUERY_POST } from '../utils/queries';
import { CREATE_COMMENT } from '../utils/mutations';

import CommentButton from '../components/CommentButton';
import LikeButton from '../components/LikeButton';
import DeletePostButton from '../components/DeletePostButton'

function Post() {
    const {postId} = useParams()
    const {loading, data} = useQuery(QUERY_POST, {
        variables: {postId: postId}
    })
    const history = useNavigate()
    const deleteReroute = () => {
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
            <LikeButton user={userData} post={{_id, likes, likeCount}}/>
            {rightUser ? <DeletePostButton postId={{_id}} callback={deleteReroute} /> : null}
            <CommentButton />
            
            {comments?.map(comment =>
                <div key={comment.id}>
                    <br></br><hr></hr>
                    <h4>comment: {comment.body}</h4>
                    <p>by: {comment.username}</p>
                    <p>at: {comment.createdAt}</p>
                    <DeletePostButton postId={{_id}} commentId={comment.id} />
                    {/* {userData._id === comment.userId ?
                        <DeletePostButton postId={{_id}} commentId={comment.id} /> :
                        null
                    } */}
                </div>
            )}
            <br></br>
        </div>
    )
}

export default Post