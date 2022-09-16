const {parse, join} = require("path"); // This is node built in package
const {createWriteStream} = require("fs"); // this is node built in package
const fs = require("fs"); // this is node built in package
const aws = require(`aws-sdk`);
const { PassThrough } = require("stream");

const {v4 : uuidv4} = require('uuid')



const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey
})


module.exports.readFile = async (file) => {
    
    const {createReadStream, filename} = await file;
    const stream = createReadStream();

    
    // async function uploadFromStream(key) {
    //     var pass = new PassThrough();
    //     const { Location } = s3.upload({
    //     Bucket: bucketName,
    //     Body: createReadStream(),
    //           Key: key,
    //           ContentType: "mimetype"
    //       }).promise()  
      
    //     // return pass;
    //   }
    
    var {ext, name} = parse(filename);

    let key = `${uuidv4()}${ext}`;

    let url = `https://sfsg-upload.s3.us-east-2.amazonaws.com/${key}` 
    
    

    // const imageStream = await createWriteStream(url)
    // await stream.pipe(imageStream);

    // const baseUrl = process.env.BASE_URL
    // const port = process.env.PORT
    // url = `${baseUrl}${port}${url.split('Upload')[1]}`;
    // return url;
    
    await s3.upload({
        Bucket: bucketName,
        Body: createReadStream(),
                Key: key,
                ContentType: "mimetype"
        }).promise()

    return url;

    // stream.pipe(uploadFromStream(key))
}

