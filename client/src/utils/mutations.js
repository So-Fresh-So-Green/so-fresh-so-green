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

export const SELL_PLANT = gql`
  mutation Mutation($name: String!, $description: String, $price: Int, $image: String, $plant: ID) {
    createProduct(name: $name, description: $description, price: $price, image: $image, plant: $plant) {
      name
    }
  }
`

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

export const FOLLOW_USER = gql`
  mutation FollowUser($userId: ID!) {
    followUser(userId: $userId) {
      username
      followerCount
      followers {
        username
      }
    }
  }
`

export const UNFOLLOW_USER = gql`
  mutation UnfollowUser($userId: ID!) {
    unfollowUser(userId: $userId) {
      username
      followerCount
      followers {
        username
      }
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($body: String! $image: String) {
    createPost(body: $body image: $image) {
      _id
      body
      createdAt
      image
      username
      userId
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
  # $id: String!
  ) {
    fileUpload(
      file: $file
      # id: $id
  )
  }
`

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      likes {
        id
        username
      }
      likeCount
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      _id
      comments {
        id
        body
        createdAt
        username
        userId
      }
      commentCount
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      _id
      comments {
        id
        username
        createdAt
        body
        userId
      }
      commentCount
    }
  }
`


