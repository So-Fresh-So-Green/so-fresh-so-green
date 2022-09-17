import React from "react";
import {useQuery} from '@apollo/client'
import {QUERY_ALL_POSTS, QUERY_USER_MINI} from '../utils/queries'
import PostList from '../components/PostList'
import PostForm from "../components/PostForm";
import Auth from '../utils/auth'
import '../index.css'

export default function Newsfeed() {
    const {loading: loadingPosts, data: postData} = useQuery(QUERY_ALL_POSTS)
    const newPostBtn = () => {
        const postForm = document.getElementById('post-form')
        postForm.classList.toggle('invis')
    }

    const profData = Auth.getProfile()
    const userData = profData.data

    const {loading: loadingUser, data: curUserData} = useQuery(QUERY_USER_MINI, {
        variables: {_id: userData._id}
    })

    const profilePic = curUserData?.getUser.profPic
    const userLocation = curUserData?.getUser.location
    return (
        <>
        {loadingUser || loadingPosts ? null : 

<div class="px-4 py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid grid-cols-12 gap-6">

                {/* My Profile */}
                <div class="hidden lg:block col-span-3 space-y-5">
                    <div class="bg-white rounded-lg shadow p-6">
                        <div class="flex items-center justify-left">
                            {/* TODO Add user profile img refefence here in img source*/}
                            {/* TODO Add reference to user location or email in subtitle */}
                            <img
                                class="h-12 w-12 rounded-full"
                                src={profilePic}
                            />
                            <div class="ml-4">
                                <h3 class="text-base font-bold">My Profile</h3>
                                <h4 class="text-sm">Location: {userLocation}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Create new post button/market sales/share */}
                    <div class="bg-white rounded-lg shadow p-6 space-y-5">
                        <div class="space-y-4">
                            <div class="flex items-center cursor-pointer">
                                <svg
                                    class="w-6 h-6 text-gray-900"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M16 12L10 16.3301V7.66987L16 12Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                {/* If user is logged in, create a new post is visible */}
                                <div class="ml-4 text-gray-900">{Auth.loggedIn() ? (
                <button onClick={newPostBtn}>Create a new post</button>
            ) : (
                null
            )}</div>
                            </div>

                            <div class="flex items-center cursor-pointer">
                                <svg
                                    class="w-6 h-6 text-gray-900"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 10H17V16H13V10Z"
                                        fill="currentColor"
                                        fill-opacity="0.5"
                                    />
                                    <path
                                        d="M11 4H7V16H11V4Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 18H6V20H18V18Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div class="ml-4 text-gray-900">Market Sales</div>
                            </div>



                            <div class="flex items-center cursor-pointer">
                                <svg
                                    class="w-6 h-6 text-gray-900"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div class="ml-4 text-gray-900">Share</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toggle area for postform Section */}
                <div class="col-span-12 lg:col-span-6 space-y-5">
            <div id="post-form" className="invis">
                <PostForm />
            </div>
                    {/* Newsfeed */}
                {loadingPosts ? (
                    <h2>Loading posts...</h2>
                ) : (
                    postData?.posts.map(post => 
                    <div key={post.id}>
                        <PostList post={post}/>
                    </div>)
                ) }
            </div>

            {/* People you may know */}
            {/* TODO: Map through users and provide two-four random entries */}

            <div class="hidden lg:block col-span-3 space-y-5">
                    <div class="bg-green-50 rounded-lg shadow p-6 space-y-5">
                        <h3 class="font-bold text-base text-gray-900">
                            People you may know
                        </h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img
                                        class="rounded-full h-10 w-10"
                                        src="https://footwearnews.com/wp-content/uploads/2022/06/betty-boop.jpg"
                                    />
                                    <div class="ml-2 text-sm">
                                      User
                                    </div>
                                </div>
                                <button
                                    class="bg-green-200 text-black hover:text-white hover:bg-green-600 transition duration-100	transform hover:scale-110	 text-xs  rounded p-2 text-gray-900"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>

        </div>
    }
        </>
    )
}