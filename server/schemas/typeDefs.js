const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload

  # type FileUploadResponse {
  #   ETag: String!
  #   Location: String!
  #   key: String!
  #   Key: String!
  #   Bucket: String!
  # }

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
    bio: String
    location: String
    password: String
    profPic: String
    posts: [Post]
    postCount: Int!
    plants: [Plant]
    plantCount: Int!
    followers: [User]
    following: [User]
    orders: [Order]
    followerCount: Int!
    followingCount: Int!
  }

  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    image: String
    username: String!
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


  type Message {
    _id: ID!
    content: String!
    sender: User
    createdAt: String!
    
  }

  type Chat {
    _id: ID!
    messages: [Message]
    recipientsId: User
    createdAt: String,
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String
    user: User
  }

  

  type SuccessMessage {
    message: String
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    getProduct(_id: ID!): Product
    getUser(_id: ID!): User
    getOrder(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    posts: [Post]
    # plants: [Plant]
    getPost(postId: ID!): Post
    getUserPost(user: ID!): [Post]
    getMessages: [Message]
    getChats: [Chat]
    # getChats(email: String!): [Chat]
    greetings: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    followUser(userId: ID!): User!
    unfollowUser(userId: ID!): User!
    createProduct(name: String!, description: String, image: String, price: Int, plant: ID, category: ID): Product
    updateProduct(_id: ID!, name: String, description: String, image: String, price: Int, plant: ID, category: ID): Product
    login(email: String!, password: String!): Auth
    register(registerInput: RegisterInput): User
    createPost(body: String!, image: String): Post!
    deletePost(postId: ID!): String!
    likePost(postId: ID!): Post!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    addPlant(name: String!, waterSched: String, image: String, description: String): Plant!
    deletePlant(plantId: ID!): String!
    postMessage( sender: String, content: String): Message
    addChat(recipientsId: [String!]): Chat
    singleUpload(file: Upload!): SuccessMessage
    updateUserPic(file: Upload!): User
  }
`;

module.exports = typeDefs;
