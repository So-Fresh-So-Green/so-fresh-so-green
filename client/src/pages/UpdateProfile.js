import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";
import { singleUploadApi } from "../Functionality/api"
import Auth from '../utils/auth'

export default function UpdateProfile() {
  const [image, setImage] = useState();

  const profData = Auth.getProfile()
  const userId = profData.data._id
  const userName = profData.data.username

  console.log(`
  
  
  THIS IS USER ID
  

  ${userId}
  ${userName}
  
  `)

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

  const onSubmit = (data, e) => {
    singleUploadApi(data);
  }
        

    return <div>
Hi div!

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
    </div>
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