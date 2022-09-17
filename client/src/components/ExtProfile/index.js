EXT PROFILE

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
    location,
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
    const sheep = profData.data
    return(
        <>
<div class="p-16 bg-gradient-to-r from-slate-300 via-green-200  to-green-300 ...">
  <div class="p-8  bg-white shadow mt-24 rounded-md"> 
   <div class="grid grid-cols-1 md:grid-cols-3"> 
   
      <div class="relative">     
      <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
       {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor"> */}
        <img src={profPic} class="rounded-full"/>
       <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
       {/* </svg>   */}
    </div>   
     </div>   
      <div class="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">
      <FollowButton sheep={sheep} shepherd={{_id, followers, followerCount}} />
     {/* <button  class="text-white py-2 px-4 uppercase rounded bg-green-500 hover:bg-green-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Follow</button>  
      <button  class="text-white py-2 px-4 uppercase rounded bg-orange-400 hover:bg-orange-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Message</button>    */}
       </div>  
       </div> 
        <div class="mt-20 text-center border-b pb-12">    <h1 class="text-4xl font-medium text-gray-700">{username}
       
          </h1>    <p class="font-light text-gray-600 mt-3">{location}</p>    
          <p class="mt-8 text-gray-500">{bio}</p>    
            </div>  <div class="mt-12 flex flex-col justify-center">   
  </div>
  
  <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">MY GARDEN</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">This is {username}'s garden!</p>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE PLANT</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                    <p class="leading-relaxed">is happy</p>
                </div>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361" />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE PLANT</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p class="leading-relaxed">is green and crisp.</p>

                </div>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363" />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-green-500 mb-1">THE PLANT</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p class="leading-relaxed">is tall and strong .</p>
                </div>
                </div>
            </div>
            </div>
            </div>
</section>




        <div>
            {username}'s profile
            <img
                alt={username}
                src={`${profPic}`}
            />
            <p>{location}</p>
            <p>About: {bio}</p>
            <p>following: {followingCount}</p>
            <br></br>
            {/* followcount is returned in the button so it can update automatically on click */}
            <FollowButton sheep={sheep} shepherd={{_id, followers, followerCount}} />
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
                    _id={plant.id}
                    name={plant.name}
                    image={plant.image}
                    description={plant.description}
                    waterSched={plant.waterSched}
                    createdAt={plant.createdAt}
                />
            ))}
        </div>
        </div>
        </div>
        </>
    )
    
    
    

    
}