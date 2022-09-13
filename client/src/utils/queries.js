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
      quantity
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

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  {
    posts {
      _id
      body
      createdAt
      username
      image
      userId
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