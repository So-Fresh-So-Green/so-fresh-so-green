const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Plant {
    _id: ID!
    name: String
    waterSched: String
    image: String
    description: String
    createdAt: String!
    user: String!
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    postedAt: String
    price: Float
    quantity: Int
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
    comments: [Comment]
    plants: [Plant]
    followers: [User]
    following: [User]
    orders: [Order]
  }

  # type Post {
  #   _id: ID
  #   title: String
  #   content: String
  #   createdAt: String
  #   username: String
  #   plant: Plant
  #   comments: [Comment]
  # }

  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
    plant: Plant
    comments: [Comment]
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
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: String!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    login(email: String!, password: String!): Auth
    register(registerInput: RegisterInput): User
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }
`;

module.exports = typeDefs;
