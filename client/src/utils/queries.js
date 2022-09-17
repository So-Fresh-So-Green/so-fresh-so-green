import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProduct($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_PLANT_PRODUCTS = gql`
  query Plant {
    products {
      plant {
        _id
      }
    }
  }
`

export const QUERY_USER_PLANTS = gql`
  query Query($id: ID!) {
    getUser(_id: $id) {
      plants {
        _id
        name
        waterSched
        image
        description
        createdAt
      }
    }
  }
`

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER_EXT = gql`
  query GetUser($_id: ID!){
    getUser(_id: $_id) {
      _id
      username
      profPic
      bio
      location
      posts {
        _id
        body
        createdAt
        image
        username
        likeCount
        commentCount
      }
      postCount
      plants {
        _id
        name
        waterSched
        image
        description
        createdAt
      }
      plantCount
      followerCount
      followingCount
      following {
        _id
        username
      }
      followers {
        _id
        username
      }
    }
  }
`;

export const QUERY_USER_INT = gql`
query GetUser($_id: ID!) {
  getUser(_id: $_id) {
    _id
    username
    profPic
    bio
    location
    posts {
      body
      createdAt
      image
      likeCount
      commentCount
      _id
    }
    postCount
    plantCount
    followers {
      username
      profPic
      _id
    }
    following {
      _id
      username
      profPic
    }
    followerCount
    followingCount
    orders {
      _id
      purchaseDate
      products {
        name
        description
        _id
        image
      }
    }
  }
}
`

export const QUERY_USER_UPDATE = gql`
  query GetUser($_id: ID!) {
    getUser(_id: $_id) {
      username
      profPic
      bio
      location
      email
    }
  }
`

export const QUERY_USER_MINI = gql`
  query GetUser($_id: ID!) {
    getUser(_id: $_id) {
      username
      profPic
      bio
      location
    }
  }
`

export const QUERY_ALL_POSTS = gql`
  {
    posts {
      _id
      body
      createdAt
      username
      image
      userId {
        profPic
      }
      likes {
        username
      }
      likeCount
      comments {
        username
        createdAt
        body
      }
      commentCount
    }
  }
`
export const QUERY_POST = gql`
  query GetPost($postId: ID!){
    getPost(postId: $postId) {
      _id
      body
      createdAt
      image
      username
      userId
      comments {
        body
        username
        createdAt
        userId
        id
      }
      likes {
        username
        createdAt
        id
      }
      likeCount
      commentCount
    }
  }
`;

export const QUERY_Messgaes = gql`
  {
    getMessages
  {
    _id
    sender
    content
    createdAt
    }
  }
  `



export const QUERY_Chats = gql`
  query getChats($email: String!) {
    getChats(email: $email) {
      _id
      createdAt
      recipientsId {
        _id
        username
        email
      }
      messages {
        _id
        sender
        content
      }
    }
  }
  `;