const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { Product, Category } = require('../../models');

module.exports = {
    Query: {
        getCategories: async () => {
            return await Category.find();
          },
      
          allProducts: async (parent, { category, name }) => {
            const params = {};
            if (category) {
              params.category = category;
            }
            if (name) {
              params.name = {
                $regex: name
              };
            }
            return await Product.find(params).populate('plant').populate('category');
          },
          
          getProduct: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
          },
    },
    Mutation: {
        createProduct: async(_, {name, description, image, price, plant, category}, context) => {
            if (context.user) {
              const newProduct = new Product({
                name,
                description,
                image,
                price,
                plant,
                category
              })
              const product = await newProduct.save()
              return product
            }
            throw new AuthenticationError('Not logged in')
          },
          updateProduct: async (parent, { _id, name, description, image, price, plant, category }) => {
            return await Product.findByIdAndUpdate(
              _id, {
                    name,
                    description,
                    image,
                    price,
                    plant,
                    category
                  }, { new: true }
            );
          },
    }
}