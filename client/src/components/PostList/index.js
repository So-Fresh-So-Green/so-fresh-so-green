import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function PostItem({post: {
    _id,
    image,
    body,
    username,
    createdAt,
    comments,
    commentCount,
    likes,
    likeCount
}}) {
    const [state, dispatch] = useStoreContext()
    const likePost = () => {
        console.log('post liked')
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
            <hr></hr>
            <br></br>
        </div>
    )

    
}

export default PostItem