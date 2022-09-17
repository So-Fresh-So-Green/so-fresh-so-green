import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";



export default function ProductItem(post) {
    const {
        _id,
        body,
        image,
        commentCount,
        likeCount,
        createdAt
    } = post

    return (
        <div
                        class="px-6 py-6  bg-white rounded-lg shadow border-b border-gray-300 w-12/12"
                    >
                        <div
                            class="w-max flex justify-between items-center"
                        >
                            <div class="flex items-center cursor-pointer">
        <div>
            <h1>{body}</h1>
            <p>{commentCount} comments</p>
            <p>{likeCount} likes</p>
            <br></br>
            <Link to={`/post/${_id}`}><button>🪴 View Post</button></Link>
        </div>
        </div>
        </div>
        </div>
    )
}