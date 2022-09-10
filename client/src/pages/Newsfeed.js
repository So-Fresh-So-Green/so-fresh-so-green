import React from "react";
import {useQuery} from '@apollo/client'
import {QUERY_ALL_POSTS} from '../utils/queries'
import PostList from '../components/PostList'
import PostForm from "../components/PostForm";

export default function Newsfeed() {
    const {loading, data} = useQuery(QUERY_ALL_POSTS)

    return (
        <div>
            <h1>This the Newsfeed</h1>

            <div>
                <h2>Create a new post</h2>
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