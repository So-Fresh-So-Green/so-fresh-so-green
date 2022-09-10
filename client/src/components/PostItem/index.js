import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function PostItem(post) {
    const [state, dispatch] = useStoreContext()

    const {
        body,
        username,
        createdAt,
        comments,
        likes,
        userId
    } = post

    
}