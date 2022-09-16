import React from "react";
import { Link } from "react-router-dom";
import SellPlantForm from '../SellPlantForm'

export default function ProductItem(plant) {
    const {
        _id,
        name,
        image,
        description,
        waterSched,
        createdAt
    } = plant

    const priceButton = (e) => {
        const sellPlantForm = e.target.nextSibling
        sellPlantForm.classList.toggle('invis')
        console.log(e.target.nextSibling)
    }

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
            <button onClick={priceButton}>Sell this plant?</button>
            <div id="sell-plant-form" className="invis">
                <SellPlantForm plant={{_id, name, image, description}}/>
            </div>
        </div>
    )
}