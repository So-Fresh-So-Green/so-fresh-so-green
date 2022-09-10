import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function PostItem({post: {
    id,
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
            <img src={`/images/${image}`}/>
            <h1>{body}</h1>
            <p>by: {username}</p>
            <p>created at: {createdAt}</p>
            <p>this post has {commentCount} comments</p>
        </div>
    )

    
}

export default PostItem