import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'
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

    // const deleteCb = () => {
    //     props.history.push
    // }

    return(
        <div>
            <br></br>
            <hr></hr>
            <Link to={`/post/${_id}`}>
                <h1>{body}</h1>
                <img src={`/images/${image}`}/>
                <p>by: {username}</p>
                <p>created at: {createdAt}</p>
                {/* a link to the individual post page here */}
                <button>💬</button><label>{commentCount} </label>
            </Link>
            <LikeButton user={userData} post={{_id, likes, likeCount}}/>
            {rightUser ? <DeletePostButton postId={{_id}} /> : <span></span>}
            <hr></hr>
            <br></br>
        </div>
    )

    
}

export default PostItem