import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth'
import { QUERY_POST } from '../utils/queries';
import { CREATE_COMMENT } from '../utils/mutations';

import CommentButton from '../components/CommentButton';
import LikeButton from '../components/LikeButton';
import DeletePostButton from '../components/DeletePostButton'

function Post() {
    const { postId } = useParams()
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postId: postId }
    })
    const history = useNavigate()
    const deleteReroute = () => {
        history('/newsfeed')
    }

    const { _id, likeCount, body, username, image, createdAt, comments, userId } = data?.getPost || {};
    const likes = data?.getPost?.likes || [];

    const profData = Auth.getProfile()
    const userData = profData.data
    const rightUser = userData._id === userId

    return (

        <div>
            <div
                class="px-6 py-6  bg-white rounded-lg shadow border-b border-gray-300 w-12/12">
                <div class="w-max flex justify-between items-center">
                    <br></br>
                    <div class="flex items-center cursor-pointer">
                        <img src={`/images/${image}`} />
                        <p>created at: {createdAt}</p>
                        <h3>{body}</h3>
                        <h4>By: <Link to={`/profile/${userId}`}>{username}</Link></h4>
                        <hr />
                        <div
                            class="px-6 py-6  flex justify-between items-center"
                        >
                            <div class="flex items-center space-x-2">
                                <LikeButton user={userData} post={{ _id, likes, likeCount }} />
                                {rightUser ? <DeletePostButton postId={{ _id }} callback={deleteReroute} /> : null}
                            </div>
                        </div>
                    </div>
                </div>




                <CommentButton />

                {
                    comments?.map(comment =>
                        <div key={comment.id}>
                            <br></br><hr></hr>
                            <h4>comment: {comment.body}</h4>
                            <p>by: <Link to={`/profile/${comment.userId}`}>{comment.username}</Link></p>
                            <p>at: {comment.createdAt}</p>
                            {/* <DeletePostButton postId={{_id}} commentId={comment.id} /> */}
                            {/* not passing in userId when creating comment */}
                            {userData._id === comment.userId ?
                                <DeletePostButton postId={{ _id }} commentId={comment.id} /> :
                                null
                            }
                        </div>
                    )
                }
                <br></br>
            </div>
        </div>

    )
}

export default Post