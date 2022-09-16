import React from "react";
import { Link } from "react-router-dom";
import SellPlantBtn from "../SellPlantBtn";

export default function ProductItem(plant) {
    const {
        _id,
        name,
        image,
        description,
        waterSched,
        createdAt
    } = plant



    return (
        <div>
            <br></br>
            <h1>{name}</h1>
            <img
                alt={name}
                src={`/images/${image}`}
            />
            <p>{description}</p>
            <p>{waterSched}</p>
            <br></br>
            <SellPlantBtn plant={{_id, name, image, description}}/>
        </div>
    )
}