const { stream } = require('stream');
const { bucket, s3 } = require ('./bucket.js')

module.exports = createUploadStream = (key) => {
    const pass = new stream.PassThrough();
    return {
        writeStream: pass,
        promise: s3
        .upload ({
            Bucket: bucket,
            Key: key,
            Body: pass,
        })
        .promise(),
    }
};