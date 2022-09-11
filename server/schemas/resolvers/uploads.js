const { ApolloError } = require('apollo-server-express');
const { GraphQLUpload } = require('graphql-upload');
const { createUploadStream } = require('../../modules/streams');


module.exports = {
    Mutation: {
        fileUpload: async (parent, { file }) => {
            const { filename, createReadStream } = await file;

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