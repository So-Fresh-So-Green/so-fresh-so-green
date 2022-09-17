import React, {useContext} from "react";
import { Link } from "react-router-dom";
import ProfPost from '../ProfPost'
import PlantCard from '../PlantCard'
import AddPlantForm from '../AddPlantForm'

export default function IntProfile({user: {
    _id,
    username,
    profPic,
    bio,
    location,
    posts,
    plantCount,
    postCount,
    following,
    followingCount,
    followers,
    followerCount,
    orders
}, plants : {plants}}) {
    // TODO: add a new query to update cache so the posts can update
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
      <Link to={`/update-profile/${_id}`}>     <button  class="text-white py-2 px-4 uppercase rounded bg-green-500 hover:bg-green-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  UPDATE PROFILE</button>  
</Link>
       </div>  
       </div> 
        <div class="mt-20 text-center border-b pb-12">    <h1 class="text-4xl font-medium text-gray-700 uppercase">{username}
       
          </h1>    <p class="font-light text-gray-600 mt-3">Location: {location}</p>    
          <p class="mt-8 text-gray-500">About: {bio}</p>
          <p class="mt-8 text-gray-500">Following: {followingCount} user(s):</p>
          {following?.map((follow) => <p key={follow._id}>{follow.username}</p>)}
          <p class="mt-8 text-gray-500">Followers: {followerCount} user(s):</p>
          {followers?.map((follower) => <p key={follower._id}>{follower.username}</p>)}
            </div>  <div class="mt-12 flex flex-col justify-center">   
  </div>
  
  <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">MY GARDEN</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">You have {plantCount} plants in your garden</p>
            </div>
            
            {/* <div class="flex flex-wrap -m-4"> */}
            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
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
</section>

<hr></hr>

<section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">MY POSTS</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">You have contributed {postCount} posts</p>
            </div>
            
            {/* <div class="flex flex-wrap -m-4"> */}
            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
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
            </div>
            </div>
</section>

<hr></hr>

<section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">ADD PLANT</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Add a plant to your garden!</p>
            </div>
            <AddPlantForm />
            </div>
</section>

        </div>
        </div>









{/* <div>
    {username}
    <img
        alt={username}
        src={`${profPic}`}
    />
    <p>{location}</p>
    <p>About: {bio}</p>
    <br></br>
    <Link to={`/update-profile/${_id}`}><button>Update Profile</button></Link>
    <br></br>
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
    <AddPlantForm />
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
        </div> */}
</>
    )
    
}