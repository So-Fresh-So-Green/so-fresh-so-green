import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_USER_UPDATE } from "../utils/queries";
import { singleUploadApi } from "../Functionality/api"
import Auth from '../utils/auth'

export default function UpdateProfile() {
  
  const [image, setImage] = useState();
  const profData = Auth.getProfile()
  const userId = profData.data._id
  const userName = profData.data.username
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
    await singleUploadApi(data);
    updateReroute();
  }

  //ians code for rest of update
  const {id} = useParams()
  const history = useNavigate()
  const updateReroute = () => {
    history(`/profile/${id}`)
  }

  const {loading, data} = useQuery(QUERY_USER_UPDATE, {variables: {_id: id}})
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    location: '',
    bio: ''
  })

  const [updateUser] = useMutation(UPDATE_USER, {
      update(cache, {data: {updateUser}}) {
          try {
              const {getUser} = cache.readQuery({
                  query: QUERY_USER_UPDATE,
                  variables: {_id: id}
              })

              cache.writeQuery({
                  query: QUERY_USER_UPDATE,
                  variables: {_id: id},
                  data: {getUser: [updateUser, getUser]}
              })
              updateReroute()
          } catch (err) {
              console.error(err)
          }
      }
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
        const {data} = await updateUser({
            variables: {...formState}
        })
        setFormState({
            username: '',
            email: '',
            location: '',
            bio: ''
        })
    } catch (err) {
        console.error(err)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormState({...formState, [name]: value})
  }
        
    return (

<>
      <div class="bg-white rounded-lg shadow">
      <div
                        class="rounded-r-lg py-6 flex items-center justify-center"
                    >
                      Update Profile

                    </div>
                <div
                    class="px-6 py-6 border-b border-gray-300 flex items-center"
                >
                    <div
                        class="flex items-center justify-end rounded-lg w-full"
                    >
                        <form onSubmit={handleFormSubmit} class="grid-col-1 items-center justify-end rounded-lg w-full">
                        <div>Name</div>
                        <div>
            <input name='username' placeholder={`${data?.getUser.username}`} value={formState.username} onChange={handleChange} />
        </div>
        <div>Email</div>
        <div>
            <input name='email' placeholder={`${data?.getUser.email}`} value={formState.email} onChange={handleChange} />
        </div>
        <div>Location</div>
        <div>
            <input name='location' placeholder={`${data?.getUser.location}`} value={formState.location} onChange={handleChange} />
        </div>
        <div>Bio</div>
        <div>
            <textarea name='bio' placeholder={`${data?.getUser.bio}`} value={formState.bio} onChange={handleChange}></textarea>
        </div>
                            <div class="flex items-center justify-end rounded-lg w-full">
                                <button type='submit'>Submit Updates</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="grid grid-cols-4 justify-center">

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="4 p-4 m-12 border-dark rounded">
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">Update your profile picture:</label>
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
        </div>
        <br></br>
        <div className="col-sm-10">
          <button type="submit">Upload Photo</button>
        </div>
        <br></br>
      </form>



            </div>







    {/* <div>
      <form onSubmit={handleSubmit(onSubmit)} className="4 p-4 border border-dark rounded" style={{ backgroundColor: "rgb(170,200,170)", fontWeight: "bold" }}>
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">Update your profile picture:</label>
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


      {/* other form for rest of data */}
      {/* {loading ? <div>Loading...</div> : 
      <form onSubmit={handleFormSubmit}>
        <div>
            <input name='username' placeholder={`${data?.getUser.username}`} value={formState.username} onChange={handleChange} />
        </div>
        <div>
            <input name='email' placeholder={`${data?.getUser.email}`} value={formState.email} onChange={handleChange} />
        </div>
        <div>
            <input name='location' placeholder={`${data?.getUser.location}`} value={formState.location} onChange={handleChange} />
        </div>
        <div>
            <textarea name='bio' placeholder={`${data?.getUser.bio}`} value={formState.bio} onChange={handleChange}></textarea>
        </div>

        <div>
            <button type='submit'>Update your profile</button>
        </div>
      </form>} 
    </div> */}
    </>
    )
}


/// Code graveyard

// const [state, dispatch] = useGlobalUserContext();
        // console.log(state)

        //profile picture upload
        // const [file, setFile] = useState()
        // const [fileName, setFileName] = useState('')
        // const [fileUpload] = useMutation(UPLOAD_PROFILE_PIC, {
        //     onCompleted: data => console.log(data)
        // })
    
        //Sets the state of file and filename based on chosen upload file
        // const handlePictureUploadChange = async (event) => {
        //     console.log("handlePictureUploadChange executed")
        //     if (!event.target.files[0]) return;
    
        //     // console.log(event.target.files)
        //     // console.log(event.target.files[0])
        //     // console.log(event.target.files[0].name)
        //     // const imgString = event.target.files[0].name
        //     // console.log(imgString);
        //     // setFile(event.target.files[0])
        //     // setFileName(imgString)

        //     const file = event.target.files[0];
        //     console.log(file);

        //     let formData = new FormData();
        //     formData.append("image", file);
        //     console.log([...formData])
            
        //     try {
        //       const { data } = await fileUpload ({
        //         variables: {
        //             file: formData,
        //             // //hardcoded user id
        //             // _id: '631a10c8c5a04c2313908f6c',
        //         }
        //     })
        //     } catch {

        //     }
        // }
    
        //handler for submitting the upload
        // const handlePictureUploadSubmit = async (event) => {
        //     console.log("handlePictureUploadSubmit executed")
        //     event.preventDefault();
        //     console.log(file);
        //     if (!file) console.log('no file present');
        //     if (!file) return;
    
        //     try {
        //         const response = await fileUpload({
        //             variables: {
        //                 file: file,
        //                 //hardcoded user id
        //                 _id: '631a10c8c5a04c2313908f6c',
        //             }
        //         });
        //         console.log(response);

                // const updatedUserData = response.data.uploadPicture.user
                // console.log('updated user data:' + updatedUserData)
    
                // // dispatchEvent({
                // //     type: SET_USER_DATA,
                // //     payload: updatedUserData
                // // });
    
                // console.log('This is the response: ' + response)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }