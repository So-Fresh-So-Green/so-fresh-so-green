// const { stream } = require('stream');
// const { s3 } = require ('./bucket.js')

// const bucket = process.env.AWS_BUCKET_NAME


// module.exports = createUploadStream = (key) => {
//     const pass = new stream.PassThrough();
//     return {
//         writeStream: pass,
//         promise: s3
//         .upload ({
//             Bucket: bucket,
//             Key: key,
//             Body: pass,
//         })
//         .promise(),
//     }
// };