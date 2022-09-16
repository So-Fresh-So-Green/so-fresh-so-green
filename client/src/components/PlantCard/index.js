import React, {useState, useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PLANT_PRODUCTS } from "../../utils/queries";
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

    const {loading, data} = useQuery(QUERY_PLANT_PRODUCTS)
    const [inMarket, setInMarket] = useState(false)
    const products = data?.products || []

    useEffect(() => {
        for(let product of products) {
            if(product.plant) {
                console.log(product.plant._id)
                console.log(_id)
                console.log(inMarket)
                console.log('_______________')
                if(product.plant._id === _id) {
                    setInMarket(true)
                    console.log(inMarket)
                    return
                } else {
                    setInMarket(false)
                }
            }
        }
    }, [products, _id, inMarket])

    const priceButton = (e) => {
        const sellPlantForm = e.target.nextSibling
        sellPlantForm.classList.toggle('invis')
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
            {inMarket ? 
                <p>Plant in shop</p> : 
                <button onClick={priceButton}>Sell this plant?</button>}
            <div className="invis">
                <SellPlantForm plant={{_id, name, image, description}}/>
            </div>
        </div>
    )
}