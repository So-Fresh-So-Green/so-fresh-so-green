import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

import ProfPost from '../ProfPost'
import PlantCard from '../PlantCard'
import FollowButton from "../FollowButton";

export default function IntProfile({user: {
    _id,
    username,
    profPic,
    bio,
    location,
    posts,
    postCount,
    plants,
    plantCount,
    following,
    followingCount,
    followers,
    followerCount,
    orders
}}) {
    return(
        <div>
            {username}
            <img
                alt={username}
                src={`/images/${profPic}`}
            />
            <p>{location}</p>
            <p>About: {bio}</p>
            <p>following: {followingCount}</p>
            <br></br>
            followers {followerCount}
            {followers?.map((follower) => <p key={follower._id}>{follower.username}</p>)}

            following {followingCount}
            {following?.map((follow) => <p key={follow._id}>{follow.username}</p>)}
            <br></br><br></br>
            <h2>{username} has {postCount} posts</h2>
            <hr></hr><br></br>
            {posts?.map((post) => (
                <ProfPost 
                    key={post._id}
                    _id={post._id}
                    body={post.body}
                    image={post.image}
                    commentCount={post.commentCount}
                    likeCount={post.likeCount}
                    createdAt={post.createdAt}
                />
            ))}
            <hr></hr><br></br>
            <h2>You have {plantCount} plants in your garden</h2>
            <hr></hr><br></br>
            {plants?.map((plant) => (
                <PlantCard
                    key={plant._id}
                    _id={plant._id}
                    name={plant.name}
                    image={plant.image}
                    description={plant.description}
                    waterSched={plant.waterSched}
                    createdAt={plant.createdAt}
                />
            ))}
        </div>
    )
    
}