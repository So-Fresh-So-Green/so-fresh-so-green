import axios from "axios"
import FormData from "form-data"

export const singleUploadApi = async (data) => {
    var formData = new FormData();

    formData.append('operations', '{"query" : "mutation singleUpload($file: Upload!) {singleUpload(file: $file){message}}", "variables" : {"file" : null}}');
    formData.append('map', '{"0": ["variables.file"]}');
    formData.append('0', data.picture[0]);
    await axios.post("http://localhost:3001/graphql", formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}