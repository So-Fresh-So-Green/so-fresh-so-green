import React from "react";
import { Link } from "react-router-dom";

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