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
        <div>
            <h1>{body}</h1>
            <img
                src={`/images/${image}`}
            />
            <p>{commentCount} comments</p>
            <p>{likeCount} likes</p>
            <br></br>
        </div>
    )
}