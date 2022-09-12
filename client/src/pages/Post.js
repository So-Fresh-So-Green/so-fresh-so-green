import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_POST } from '../utils/queries';

function Post() {
    const {postId} = useParams()
    const {loading, data} = useQuery(QUERY_POST, {
        variables: {postId: postId}
    })

    const post = data?.getPost || {};
    
    return(
        <div>
            <br></br>
            <p>created at: {post.createdAt}</p>
            <img src={`/images/${post.image}`}/>
            <h3>{post.body}</h3>
            <h4>By: {post.username}</h4>

            {post.comments?.map(comment =>
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