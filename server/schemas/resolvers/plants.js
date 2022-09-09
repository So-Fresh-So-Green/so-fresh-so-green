const { AuthenticationError, UserInputError } = require('apollo-server-express');
const {Plant} = require('../../models');

module.exports = {
    Mutation: {
        addPlant: async(_, {name, waterSched, image, description}, context) => {
            if(context.user) {
              const newPlant = new Plant({
                name,
                waterSched,
                image,
                description,
                createdAt: new Date().toISOString(),
                username: context.user.username,
                userId: context.user._id
              });
              console.log(newPlant)
        
              const plant = await newPlant.save();
              
              await User.updateOne(
                {_id: context.user._id},
                {
                  $push: {plants: plant}
                },
                {new: true}
              )
              return plant;
            }
            throw new AuthenticationError('Not logged in')
          },
          deletePlant: async (_, { plantId }, context) => {
            if (context.user) {
              const plant = await Plant.findById(plantId);
                if (context.user._id === plant.userId){
                  await plant.delete();
                  return 'Plant deleted successfully';
                } else {
                  throw new AuthenticationError('Action not allowed');
                }
            }
            throw new AuthenticationError('Not logged in')
          },
        },
    }
