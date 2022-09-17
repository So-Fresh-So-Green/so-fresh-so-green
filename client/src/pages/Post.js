import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { QUERY_POST } from "../utils/queries";
import { CREATE_COMMENT } from "../utils/mutations";
import moment from 'moment'

import CommentButton from "../components/CommentButton";
import LikeButton from "../components/LikeButton";
import DeletePostButton from "../components/DeletePostButton";

function Post() {
  const { postId } = useParams();
  const { loading, data } = useQuery(QUERY_POST, {
    variables: { postId: postId },
  });
  const history = useNavigate();
  const deleteReroute = () => {
    history("/newsfeed");
  };

  const { _id, likeCount, body, username, createdAt, image } =
    data?.getPost || {};
  const comments = data?.getPost?.comments || [];
  const likes = data?.getPost?.likes || [];
  const userId = data?.getPost?.userId || {};

  const profData = Auth.getProfile();
  const userData = profData.data;
  const rightUser = userData._id === userId;
  return (
    comments?.length === 0 ? 
    <div>
    <div class="px-6 py-6 border-b bg-white rounded-lg shadow border-gray-300">
      <div class="w-max flex justify-between items-center">
        {/* <br></br> */}
        <div class="flex items-center cursor-pointer">
          <img class="rounded-full h-10 w-10" src={userId.profPic} />
          <h4>
            By: <Link to={`/profile/${userId._id}`}>{username}</Link>
          </h4>
          <p class=" ml-2">Created at: {createdAt}</p>
          <h3 class="ml-2">{body}</h3>
          <img class="ml-2" src={image} />
          <hr />
          <div class="px-6 py-6  flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <LikeButton user={userData} post={{ _id, likes, likeCount }} />
              {rightUser ? (
                <DeletePostButton postId={{ _id }} callback={deleteReroute} />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <CommentButton />

      <div>No comments yet</div>
      <br></br>
    </div>
  </div> :
    <div>
      <div class="px-6 py-6 border-b bg-white rounded-lg shadow border-gray-300">
        <div class="w-max flex justify-between items-center">
          {/* <br></br> */}
          <div class="flex items-center cursor-pointer">
            <img class="rounded-full h-10 w-10" src={userId.profPic} />
            <h4>
              By: <Link to={`/profile/${userId._id}`}>{username}</Link>
            </h4>
            <p class=" ml-2">Created at: {moment(createdAt).fromNow(true)}</p>
            <h3 class="ml-2">{body}</h3>
            <img class="ml-2" src={image} />
            <hr />
            <div class="px-6 py-6  flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <LikeButton user={userData} post={{ _id, likes, likeCount }} />
                {rightUser ? (
                  <DeletePostButton postId={{ _id }} callback={deleteReroute} />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <CommentButton />

        {comments?.map((comment) => (
          <div key={comment.id}>
            <br></br>
            <hr></hr>
            <p>
              by:{" "}
              <Link to={`/profile/${comment.userId}`}>{comment.username}</Link>
            </p>
            <h4>comment: {comment.body}</h4>
            {/* <p>
              by:{" "}
              <Link to={`/profile/${comment.userId}`}>{comment.username}</Link>
            </p> */}
            <p>at: {moment(comment.createdAt).fromNow(true)}</p>
            {userData._id === comment.userId ? (
              <DeletePostButton postId={{ _id }} commentId={comment.id} />
            ) : null}
          </div>
        ))}
        <br></br>
      </div>
    </div>
  );
}

export default Post;