const {readFile} = require ("../../middleware/file");
const {SingleFile} = require("../../models/singleUploadModel.js")
const { User } = require('../../models')


module.exports = {
  Query: {
    greetings: () => {
      return "Hello World"
    }
  },
  Mutation: {
    singleUpload: async (_, {file}) => {
      const imageUrl = await readFile(file);

      const singlefile = new SingleFile({image: imageUrl});
      console.log(imageUrl);
      await singlefile.save();
      return {
        message: `${imageUrl}`
      }
    },

    updateUserPic: async (_, {file}, context) => {
      console.log(file)
      const imageUrl = await readFile(file);
      console.log(context.user._id)

      const loggedInUser = await User.findByIdAndUpdate({_id: context.user._id}, { profPic: imageUrl }, {new: true});
      console.log(loggedInUser);
      console.log(imageUrl)
      return loggedInUser;
    }
  }
}


// ALEX'S CODE GRAVEYARD

// const { ApolloError } = require('apollo-server-express');
// const { GraphQLUpload } = require('graphql-upload');
// const { createUploadStream } = require('../../modules/streams');
// 
// require(`dotenv`).config();
// const aws = require(`aws-sdk`)

// const bucketName = process.env.AWS_BUCKET_NAME;
// const region = process.env.AWS_REGION;
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

// const s3 = new aws.S3({
//   region,
//   accessKeyId,
//   secretAccessKey
// })



  // fileUpload: async (parent, { file }) => {
  //     console.log(`uploadPicture Fired!`)
  //     const { createReadStream, filename, mimetype, encoding } = await file;

  //     console.log(file)
  //     console.log(`\n\n*********ID IS AS FOLLOWS********\n\n${id}\n\n`)

  //     // upload to aws
  //     const { Location } = await s3.upload({
  //         Bucket: bucketName,
  //         Body: createReadStream(),
  //         Key: `${Date.now()}-${filename}`,
  //         ContentType: mimetype
  //     }).promise()  

  //     console.log(Location)

      // Set Location as User profileImage attribute
      // const user = await User.findByIdAndUpdate(id, {
      //   profileImage: Location
      // }, { new: true })
      
      // return {
      //   filename,
      //   mimetype,
      //   encoding,
      //   url: Location,
        // user: user
      // }
    // },



  // fileUpload: async (parent, { file, id }) => {
  //     console.log(`fileUpload executed!`)
  //     const { createReadStream, filename, mimetype, encoding } = await file;

  //     console.log(file)
  //     console.log(`ID IS AS FOLLOWS ${id}`)

  //     const { Location } = await s3



      // const stream = createReadStream();


      // let result;

      // try {
      // const uploadStream = createUploadStream(filename);
      // stream.pipe(uploadStream.writeStream);
      // result = await uploadStream.promise;
      // } catch (error) {
      // console.log(
      //     `[Error]: Message: ${error.message}, Stack: ${error.stack}`
      // );
      // throw new ApolloError("Error uploading file");
      // }

      // return result;