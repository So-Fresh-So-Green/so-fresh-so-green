// import AWS from "aws-sdk";
const AWS = require('aws-sdk');
// const uuid = require("uuid").v4;
require("dotenv").config();

const bucket = process.env.AWS_BUCKET_NAME
// export const s3Upload = async (file) => {
//     const s3 = new S3()

//     const param = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: `uploads/${uuid()}-${file.originalname}`,
//         Body: file.buffer,
//     }
//     return await s3.upload(param).promise();
// }

module.exports = new AWS.S3({
    endpoint: "http://localhost:9000",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sslEnabled: false,
    s3ForcePathStyle: true,
})

module.exports = bucket;