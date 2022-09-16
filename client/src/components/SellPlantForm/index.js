import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { SELL_PLANT } from '../../utils/mutations';
import {QUERY_PLANT_PRODUCTS} from '../../utils/queries'

const SellPlantForm = ({plant: {_id, name, image, description}}) => {
    const [formState, setFormState] = useState({
        price: '',
    })

    const {loading, data} = useQuery(QUERY_PLANT_PRODUCTS)
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
            plant: _id,
            price: Number(formState.price)
        }
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await sellPlant
            setFormState({
                price: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const {value} = e.target
        setFormState({price: value})
    }

    const sellPlantBtn = inMarket ? 
        (
            <button>Plant in shop</button>
        ) :
        (
            <button onClick={sellPlant}>Post to shop</button>
        )

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            // alert('Please only enter numbers')
                            }
                        }}
                        placeholder='Price your plant'
                        onChange={handleChange}
                        value={formState.price}
                        />
                </div>
                <div>
                    {sellPlantBtn}
                </div>
            </form>
        </div>
    )
}

export default SellPlantForm