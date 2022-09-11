const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload

  type FileUploadResponse {
    ETag: String!
    Location: String!
    key: String!
    Key: String!
    Bucket: String!
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    postedAt: String
    price: Float
    plant: Plant
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String!
    password: String
    profPic: String
    posts: [Post]
    plants: [Plant]
    followers: [User]
    following: [User]
    orders: [Order]
  }

  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
    plant: Plant
    userId: ID!
    comments: [Comment]
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    body: String!
    username: String!
    userId: ID!
    createdAt: String!
  }

  type Like {
    id: ID!
    username: String!
    createdAt: String!
  }

  type Plant {
    _id: ID!
    name: String!
    waterSched: String
    image: String
    description: String
    createdAt: String!
    username: String!
    userId: ID!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    getProduct(_id: ID!): Product
    getUser: User
    getOrder(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    posts: [Post]
    getPost(postId: ID!): Post
    getUserPost(user: ID!): [Post]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    createProduct(name: String!, description: String, image: String, price: Int, plant: ID, category: ID): Product
    updateProduct(_id: ID!, name: String, description: String, image: String, price: Int, plant: ID, category: ID): Product
    likePost(postId: ID!): Post!
    login(email: String!, password: String!): Auth
    register(registerInput: RegisterInput): User
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: String!, commentId: ID!): Post!
    addPlant(name: String!, waterSched: String, image: String, description: String): Plant!
    deletePlant(plantId: ID!): String!
    fileUpload(file: Upload!): FileUploadResponse!
  }
`;

module.exports = typeDefs;
