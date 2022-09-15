import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

export default function ProductItem(plant) {
    const {
        name,
        image,
        description,
        waterSched,
        createdAt
    } = plant

    return (
        <div>
            <h1>{name}</h1>
            <img
                alt={name}
                src={`/images/${image}`}
            />
            <p>{description}</p>
            <p>{waterSched}</p>
            <br></br>
        </div>
    )
}