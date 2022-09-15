import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

import CommentButton from "../CommentButton";
import LikeButton from '../LikeButton'
import DeletePostButton from '../DeletePostButton'

function PostItem({post: {
    _id,
    image,
    body,
    username,
    createdAt,
    comments,
    commentCount,
    likes,
    likeCount,
    userId
}}) {

    const profData = Auth.getProfile()
    const userData = profData.data
    const rightUser = userData._id === userId

    return(
        <div>
            <br></br>
            <hr></hr>
            <Link to={`/post/${_id}`}>
                <h1>{body}</h1>
                {image !== null ? <img src={`/images/${image}`}/> : null}
                <p><Link to={`/profile/${userId}`}>by: {username}</Link></p>
                <p>created at: {createdAt}</p>
                {/* a link to the individual post page here */}
            <button>💬</button><label>{commentCount} </label>
            </Link>
            <LikeButton user={userData} post={{_id, likes, likeCount}}/>
            {rightUser ? <DeletePostButton postId={{_id}} /> : null}
            <hr></hr>
            <br></br>
        </div>
    )

    
}

export default PostItem