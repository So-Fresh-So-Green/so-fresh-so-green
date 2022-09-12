import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

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

    const userData = Auth.getProfile()
    const curUserId = userData.data._id
    const rightUser = curUserId === userId
    
    const likePost = () => {
        console.log(rightUser)
    }
    const deletePost = () => {
        console.log('poof')
    }

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
            <button onClick={likePost}> ❤️</button><label>{likeCount}</label>
            {rightUser ? <button onClick={deletePost}> 🗑️</button> : <span></span>}
            <hr></hr>
            <br></br>
        </div>
    )

    
}

export default PostItem