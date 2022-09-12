const { ApolloError } = require('apollo-server-express');
const { GraphQLUpload } = require('graphql-upload');
const { createUploadStream } = require('../../modules/streams');


module.exports = {
    Mutation: {
        fileUpload: async (parent, { file, id }) => {
            console.log(`fileUpload executed!`)
            const { createReadStream, filename, mimetype, encoding } = await file;

            console.log(file)
            console.log(`ID IS AS FOLLOWS ${id}`)
            const stream = createReadStream();

            let result;
    
            try {
            const uploadStream = createUploadStream(filename);
            stream.pipe(uploadStream.writeStream);
            result = await uploadStream.promise;
            } catch (error) {
            console.log(
                `[Error]: Message: ${error.message}, Stack: ${error.stack}`
            );
            throw new ApolloError("Error uploading file");
            }
    
            return result;
        },
    }
}