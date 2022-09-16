import React, {useState, useEffect} from 'react'
import {useMutation, useQuery} from '@apollo/client'
import {SELL_PLANT} from '../../utils/mutations'
import {QUERY_PLANT_PRODUCTS} from '../../utils/queries'

function SellPlantBtn({plant: {_id, name, image, description}}) {
    const {loading, data} = useQuery(QUERY_PLANT_PRODUCTS)
    // console.log(data.products[1].plant._id)
    const [inMarket, setInMarket] = useState(false)
    const products = data?.products || []

    useEffect(() => {
        for(let product of products) {
            if(product.plant) {
                if(product.plant._id === _id) {
                    setInMarket(true)
                } else {
                    setInMarket(false)
                }
            }
        }
    }, [products, _id])
    
    const [sellPlant] = useMutation(SELL_PLANT, {
        update() {
            setInMarket(true)
        },
        variables: {
            name: name,
            description: description,
            image: image,
            plant: _id
            // price: price
        }
    })

    const sellPlantBtn = inMarket ? 
        (
            <button>Plant in shop</button>
        ) :
        (
            <button onClick={sellPlant}>Sell this plant</button>
        )

    return(
        <>
        {sellPlantBtn}
        </>
    )
}

export default SellPlantBtn