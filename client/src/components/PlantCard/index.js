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
                if(product.plant._id === _id) {
                    setInMarket(true)
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
            <div class="flex flex-wrap -m-4">
            <div class="lg:w-11/12 sm:w-11/12 p-4">
                <div class="flex relative">
                <img alt={name} class="absolute inset-0 w-full h-full object-cover object-center" src={image} />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-green-500 mb-1">{name}</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{description}</h1>
                    <p class="leading-relaxed">📆 Water Schedule: {waterSched}</p>
                    {inMarket ? 
                <p>Plant in shop</p> : 
                <button onClick={priceButton}>Sell this plant?</button>}
            <div className="invis">
                <SellPlantForm plant={{_id, name, image, description}}/>
            </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}