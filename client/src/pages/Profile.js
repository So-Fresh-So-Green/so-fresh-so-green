import React, { useState } from "react";
import { useMutation } from '@apollo/client';
// import { useHistory } from 'react-router-dom';

import { UPLOAD_PROFILE_PIC } from '../utils/mutations';

// import { useGlobalUserContext } from '../../utils/GlobalState';

export default function Profile() {

        //profile picture upload
        const [file, setFile] = useState()
        const [fileName, setFileName] = useState('')
        const [uploadPicture] = useMutation(UPLOAD_PROFILE_PIC, {
            onCompleted: data => console.log(data)
        })
    
        const handlePictureUploadChange = event => {
            console.log("handlePictureUploadChange executed")
            if (!event.target.files[0]) return;
    
            console.log(event.target.files)
            console.log(event.target.files[0])
            console.log(event.target.files[0].name)
            const imgString = event.target.files[0].name
            console.log(imgString);
            setFile(event.target.files[0])
            setFileName(imgString)
        }
    
        const handlePictureUploadSubmit = async (event) => {
            console.log("handlePictureUploadSubmit executed")
            event.preventDefault();
            console.log(file);
            if (!file) console.log('no file present');
            if (!file) return;
    
            try {
                const response = await uploadPicture({
                    variables: {
                        file: file,
                        //hardcoded, should be a uuid num
                        id: 1
                    }
                });
    
                const updatedUserData = response.data.uploadPicture.user
                console.log('updated user data:' + updatedUserData)
    
                // dispatchEvent({
                //     type: SET_USER_DATA,
                //     payload: updatedUserData
                // });
    
                console.log('This is the response: ' + response)
            } catch (error) {
                console.log(error)
            }
        }

    return <div>
Hi div!

<form onSubmit={handlePictureUploadSubmit} className="4 p-4 border border-dark rounded" style={{ backgroundColor: "rgb(170,200,170)", fontWeight: "bold" }}>
                <div className="form-group row">
                  <label htmlFor="profilePicture" className="col-sm-2 col-form-label">Upload profile picture:</label>
                  <div class="col-sm-4">
                    <input
                      className="form-control"
                      placeholder="******"
                      name="profilePicture"
                      type="file"
                      id="profilePicture"
                      onChange={handlePictureUploadChange}
                    />
                  </div>
                  {/* {error ? (
              <div className="mt-3">
                <p className="text-muted small">The password is incorrect</p>
              </div>
            ) : null} */}
                </div>
                <br></br>
                <div className="col-sm-10">
                  <button type="submit">Upload {fileName}</button>
                </div>
                <br></br>
              </form>
    </div>
}