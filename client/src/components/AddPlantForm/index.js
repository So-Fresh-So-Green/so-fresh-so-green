import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { ADD_PLANT } from '../../utils/mutations';
import {QUERY_USER_PLANTS} from '../../utils/queries';

const AddPlantForm = () => {
    const {id} = useParams()
    const [formState, setFormState] = useState({
        name: '',
        image: '',
        waterSched: '',
        description: ''
    })

    const [addPlant] = useMutation(ADD_PLANT, {
        update(cache, {data: {addPlant}}) {
            try {
                const {getUser} = cache.readQuery({
                    query: QUERY_USER_PLANTS,
                    variables: {id: id}
                })

                cache.writeQuery({
                    query: QUERY_USER_PLANTS,
                    variables: {id: id},
                    data: {getUser: {plants: [addPlant, ...getUser.plants]}}
                })
            } catch (err) {
                console.error(err)
            }
        }
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await addPlant({
                variables: {...formState, createdAt: Date.now()}
            })
            setFormState({
                name: '',
                image: '',
                waterSched: '',
                description: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({...formState, [name]: value})
    }

    return(
        <div>
            <h3>Add a plant to your garden</h3>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <input name='name' placeholder='plant name' value={formState.name} onChange={handleChange} />
                </div>
                <div>
                    <input name='image' placeholder='upload plant image' value={formState.image} onChange={handleChange} />
                </div>
                <div>
                    <input name='waterSched' placeholder='water schedule' value={formState.waterSched} onChange={handleChange} />
                </div>
                <div>
                    <input name='description' placeholder='plant description' value={formState.description} onChange={handleChange} />
                </div>

                <div>
                    <button type='submit'>Add Plant</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlantForm