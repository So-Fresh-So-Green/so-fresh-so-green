import React from "react";
import {useQuery} from '@apollo/client'
import {QUERY_ALL_POSTS} from '../utils/queries'
import PostList from '../components/PostList'
import PostForm from "../components/PostForm";
import Auth from '../utils/auth'
import '../index.css'

export default function Newsfeed() {
    const {loading, data} = useQuery(QUERY_ALL_POSTS)

    const newPostBtn = () => {
        const postForm = document.getElementById('post-form')
        postForm.classList.toggle('invis')
    }

    return (
        <div>
            <h1>This the Newsfeed</h1>
            {/* must be logged in to create new post */}
            {Auth.loggedIn() ? (
                <button onClick={newPostBtn}>Create a new post</button>
            ) : (
                <span></span>
            )}
            
            <div id="post-form" className="invis">
                <PostForm />
            </div>

            <div>
                {loading ? (
                    <h2>Loading posts...</h2>
                ) : (
                    data.posts.map(post => 
                    <div key={post.id}>
                        <PostList post={post}/>
                    </div>)
                ) }
            </div>
        </div>
    )
}