import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_POST } from '../../utils/mutations';
import {QUERY_ALL_POSTS} from '../../utils/queries';

//IMG UPLOAD
import { useForm } from "react-hook-form";
import { postUploadApi } from '../../Functionality/api';



const PostForm = () => {
    // IMG UPLOAD
    const photoBtn = () => {
        const postForm = document.getElementById('photo-upload-form')
        postForm.classList.toggle('invis')
    }

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
            setCharacterCount(0)
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
            {/* <form onSubmit={handleSubmit(onSubmit)} className="4 p-4 border border-dark rounded" style={{ backgroundColor: "rgb(170,200,170)", fontWeight: "bold" }}>
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
              </form> */}


            {/* <p>Character Count: {characterCount}/2000</p>

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
            )} */}

<div class="bg-white rounded-lg shadow">
                        <div
                            class="px-6 py-6 border-b border-gray-300 flex items-center"
                        >
                            <div
                                class="flex items-center justify-end rounded-lg w-full"
                            >
                                <svg
                                    class="h-6 w-6 text-gray-700"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.6578 3.34253C19.7928 2.47753 18.6427 2.00049 17.4197 2.00049C16.1967 2.00049 15.0467 2.47753 14.1817 3.34253L3.64872 13.8755C3.20372 14.3205 2.91371 14.8835 2.81071 15.5035L2.02073 20.2415C1.94073 20.7215 2.09875 21.2145 2.44175 21.5575C2.72675 21.8425 3.11372 21.9995 3.51072 21.9995C3.59372 21.9995 3.67571 21.9925 3.75871 21.9785L8.49674 21.1885C9.11674 21.0855 9.67973 20.7955 10.1247 20.3505L20.6578 9.8175C21.5228 8.95251 21.9997 7.80147 21.9997 6.57947C21.9997 5.35647 21.5228 4.20753 20.6578 3.34253ZM8.71073 18.9385C8.56273 19.0865 8.37474 19.1835 8.16874 19.2175L4.10673 19.8945L4.78373 15.8325C4.81773 15.6265 4.91472 15.4385 5.06272 15.2905L12.9687 7.38452L16.6167 11.0325L8.71073 18.9385ZM19.2438 8.40454L18.0307 9.61743L14.3827 5.96948L15.5957 4.75647C16.0827 4.26947 16.7317 4.00049 17.4197 4.00049C18.1087 4.00049 18.7568 4.26947 19.2438 4.75647C19.7308 5.24347 19.9997 5.89144 19.9997 6.58044C19.9997 7.26944 19.7308 7.91754 19.2438 8.40454Z"
                                        fill="#41416E"
                                    />
                                </svg>
                                <form onSubmit={handleFormSubmit} class="flex items-center justify-end rounded-lg w-full">
                                <input
                                    name='body'
                                    onChange={handleChange}
                                    placeholder="whats up..."
                                    type="text"
                                    value={formState.body}
                                    class="w-full ml-2 focus:outline-none bg-transparent border-0 focus:border-0 focus:ring-0"
                                />
                                <input hidden name='image' placeholder='Upload your photo here' onChange={handleChange} value={formState.image} />
                                <div class="flex items-center justify-end rounded-lg w-full">
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
                        </div>
                            <p class="text-sm m-2">&nbsp;&nbsp;&nbsp;Character Count: {characterCount}/2000</p>


                        <div class="grid grid-cols-4 justify-center">

                            <div
                                class="rounded-r-lg py-6 hover:bg-gray-50 cursor-pointer flex items-center justify-center"
                            >
                                <div
                                    class="flex items-center space-x-1 text-gray-900"
                                >
                                    <svg
                                        class="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 3.25H7C4.381 3.25 2.25 5.381 2.25 8V16C2.25 16.373 2.30299 16.731 2.38499 17.079C2.39699 17.126 2.40699 17.1709 2.42799 17.2159C2.96899 19.2439 4.804 20.75 7 20.75H17C19.619 20.75 21.75 18.619 21.75 16V8C21.75 5.381 19.619 3.25 17 3.25ZM7 4.75H17C18.792 4.75 20.25 6.208 20.25 8V13.189L16.24 9.17896C15.556 8.49496 14.443 8.49496 13.76 9.17896L9 13.939L8.24001 13.179C7.55601 12.495 6.44299 12.495 5.75999 13.179L3.75 15.189V8C3.75 6.208 5.208 4.75 7 4.75ZM17 19.25H7C5.597 19.25 4.41099 18.352 3.95599 17.104L6.82001 14.24C6.94701 14.113 7.052 14.113 7.179 14.24L8.119 15.1801C8.604 15.6651 9.394 15.6651 9.88 15.1801L14.82 10.24C14.918 10.142 15.082 10.142 15.179 10.24L20.249 15.3101V16C20.25 17.792 18.792 19.25 17 19.25ZM7 9C7 8.448 7.448 8 8 8C8.552 8 9 8.448 9 9C9 9.552 8.552 10 8 10C7.448 10 7 9.552 7 9Z"
                                            fill="#41416E"
                                        />
                                    </svg>

                                    <button onClick={photoBtn}><span class="hidden md:block">Add Photo</span></button>
                            </div>
                            </div>


                        </div>
                        <div id="photo-upload-form" className="invis">
                            <div class="justify-center">
                            <div
                                class="rounded-r-lg py-6 cursor-pointer flex items-center justify-center"
                            >
                                <div
                                    class="flex items-center space-x-1 text-gray-900"
                                >
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="image"></label>
                                    <div class="flex items-center space-x-1 text-gray-900">
                                        <input
                                        className="image"
                                        name="image"
                                        type="file"
                                        id="image"
                                        {...register("picture")}
                                        onChange={onPreviewImage}
                                        />
                                    {/* <img src={image} alt="Preview Image" /> */}
                                    <button type="submit" class="hover:bg-gray-50 p-5" onClick={photoBtn}>Attach</button>
                                </div>
                                </form>
                                </div>
                                </div>
                            </div>
                        </div>



                    </div>



        </div>
    )
}

export default PostForm