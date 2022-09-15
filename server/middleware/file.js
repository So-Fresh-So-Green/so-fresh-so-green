const {parse, join} = require("path"); // This is node built in package
const {createWriteStream} = require("fs"); // this is node built in package
const fs = require("fs"); // this is node built in package
const aws = require(`aws-sdk`);
const { PassThrough } = require("stream");


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
    async function uploadFromStream(s3) {
        var pass = new PassThrough();
    
        console.log(`
        
        
        
        ${pass}
        
        
        
        `)
        const { Location } = await s3.upload({
        Bucket: bucketName,
        Body: createReadStream(),
              Key: `${Date.now()}-${filename}`,
              ContentType: "mimetype"
          }).promise()  
      
        return pass;
      }
    var {ext, name} = parse(filename);
    name = `single${Math.floor((Math.random() * 10000) + 1)}`;
    let url = join(__dirname, `../Upload/${name}-${Date.now()}${ext}`);
    // const imageStream = await createWriteStream(url)
    // await stream.pipe(imageStream);

    // const baseUrl = process.env.BASE_URL
    // const port = process.env.PORT
    // url = `${baseUrl}${port}${url.split('Upload')[1]}`;
    // return url;

    await stream.pipe(uploadFromStream(s3))
} 