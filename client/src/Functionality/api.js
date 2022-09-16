import axios from "axios"
import FormData from "form-data"


export const singleUploadApi = async (data) => {
    var formData = new FormData();

    const getToken =() => {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
      }
    // formData.append('operations', '{"query" : "mutation singleUpload($file: Upload!) {singleUpload(file: $file){message}}", "variables" : {"file" : null}}');
    
    formData.append('operations', '{"query" : "mutation updateUserPic($file: Upload!) {updateUserPic(file: $file){_id username profPic}}", "variables" : {"file" : null}}');
    formData.append('map', '{"0": ["variables.file"]}');
    formData.append('0', data.picture[0]);
    console.log('This is the formData ' + formData)
    await axios.post("http://localhost:3001/graphql", formData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}