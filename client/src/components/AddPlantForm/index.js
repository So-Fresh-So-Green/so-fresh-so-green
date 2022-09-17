import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { ADD_PLANT } from '../../utils/mutations';
import {QUERY_USER_PLANTS} from '../../utils/queries';

//IMG UPLOAD
import { useForm } from "react-hook-form";
import { plantUploadApi } from '../../Functionality/api';
import { json } from 'react-router-dom';


const AddPlantForm = () => {
    // IMG UPLOAD
    const [image, setImage] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onPreviewImage = (e) => {
        if(e.target.name === "picture") {
        var file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
            setImage(reader.result)
            }
        }
        reader.readAsDataURL(file);
        }
    }
    const onSubmit = async (data, e) => {
        await plantUploadApi(data);
        const storedImg = sessionStorage.getItem("plantURL")
        setFormState({
            image: storedImg
        })
    }



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

            <h4>Upload an Image (optional)</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="4 p-4 border border-dark rounded" style={{ backgroundColor: "rgb(170,200,170)", fontWeight: "bold" }}>
                <div className="form-group row">
                    <label htmlFor="image" className="col-sm-2 col-form-label">Upload profile picture:</label>
                    <div class="col-sm-4">
                    <input
                      className="image"
                      name="image"
                      type="file"
                      id="image"
                      {...register("picture")}
                      onChange={onPreviewImage}
                    />
                  </div>
                  <img src={image} alt="Preview Image" />
                </div>
                <br></br>
                <div className="col-sm-10">
                  <button type="submit">Upload Photo</button>
                </div>
                <br></br>
              </form>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <input name='name' placeholder='plant name' value={formState.name} onChange={handleChange} />
                </div>
                <div>
                    <input hidden name='image' placeholder='upload plant image' value={formState.image} onChange={handleChange} />
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