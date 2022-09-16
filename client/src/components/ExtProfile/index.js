import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

import ProfPost from '../ProfPost'
import PlantCard from '../PlantCard'
import FollowButton from "../FollowButton";

export default function ExtProfile({user: {
    _id,
    username,
    profPic,
    bio,
    posts,
    postCount,
    plants,
    plantCount,
    following,
    followingCount,
    followers,
    followerCount
}}) {
    const profData = Auth.getProfile()
    const sheepId = profData.data

    return(
        <div>
            {username}'s profile
            <img
                alt={username}
                src={`/images/${profPic}`}
            />
            <p>About: {bio}</p>
            <p>{followerCount} followers</p>
            <p>following: {followingCount}</p>
            <br></br>
            <FollowButton sheep={sheepId} shepherd={{_id, followers}} />
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
            <h2>{username}'s garden</h2>
            <hr></hr><br></br>
            {plants?.map((plant) => (
                <PlantCard
                    key={plant.id}
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