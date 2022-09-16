import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_POST } from '../../utils/mutations';
import {QUERY_ALL_POSTS} from '../../utils/queries';

//IMG UPLOAD
import { useForm } from "react-hook-form";
import { postUploadApi } from '../../Functionality/api';
import { json } from 'react-router-dom';



const PostForm = () => {
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
        await postUploadApi(data);
        const storedImg = sessionStorage.getItem("photoURL")
        setFormState({
            body: '',
            image: storedImg
        })
      }

    const [formState, setFormState] = useState({
        body: '',
        image: ''
    })
    const [characterCount, setCharacterCount] = useState(0);



    const [createPost, {error}] = useMutation(CREATE_POST, {
        update(cache, {data: {createPost}}) {
            try {
                const {posts} = cache.readQuery({query: QUERY_ALL_POSTS})

                cache.writeQuery({
                    query: QUERY_ALL_POSTS,
                    data: {posts: [createPost, ...posts]}
                })
            } catch (err) {
                console.error(err)
            }
        }
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const {data} = await createPost({
                variables: {...formState}
            })
            setFormState({
                body: '',
                image: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'body' && value.length <= 2000) {
            setFormState({...formState, [name]: value})
            setCharacterCount(value.length)
        } else if (name !== 'body') {
            setFormState({...formState, [name]: value})
        }
    }

    return (
        <div>
            <h3>New Post</h3>
            <h4>Upload an Image (optiona)</h4>
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
                  {/* {error ? (
              <div className="mt-3">
                <p className="text-muted small">The password is incorrect</p>
              </div>
            ) : null} */}
                </div>
                <br></br>
                <div className="col-sm-10">
                  <button type="submit">Upload Photo</button>
                </div>
                <br></br>
              </form>


            <p>Character Count: {characterCount}/2000</p>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <textarea name='body' placeholder='Enter your post here' onChange={handleChange} value={formState.body}></textarea>
                </div>
                <div>
                    <input hidden name='image' placeholder='Upload your photo here' onChange={handleChange} value={formState.image} />
                </div>

                <div>
                    <button type='submit'>Create Post</button>
                </div>
            </form>
            {error && (
                <div>
                    <ul>
                        <li>{error.graphQLErrors[0].message}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default PostForm