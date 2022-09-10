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

    return(
        <div>
            <br></br>
            <hr></hr>
            <img src={`/images/${image}`}/>
            <h1>{body}</h1>
            <p>by: {username}</p>
            <p>created at: {createdAt}</p>
            <p>this post has {commentCount} comments</p>
            {/* add a link to the individual post page here */}
            <Link to={`/post/${_id}`}>
                <p>Comments</p>
            </Link>
            <hr></hr>
            <br></br>
        </div>
    )

    
}

export default PostItem