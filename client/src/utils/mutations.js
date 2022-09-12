import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
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
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: String! $image: String) {
    createPost(body: $body image: $image) {
      _id
      body
      createdAt
      image
      username
      comments {
        id
        body
        username
        createdAt
      }
      likes {
        id
        username
        createdAt
      }
      likeCount
      commentCount
    }
  }
`

export const UPLOAD_PROFILE_PIC = gql`
  mutation fileUpload(
  $file: Upload!
  $id: String!
  ) {
    fileUpload(
      file: $file
      id: $id
  ) {
      filename
      mimetype
      encoding
      url
      user {
        _id
        username
        profPic
      }
    }
  }
`
