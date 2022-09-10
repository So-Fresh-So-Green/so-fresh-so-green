import React from "react";
import {useQuery} from '@apollo/client'
import {QUERY_ALL_POSTS} from '../utils/queries'
import PostItem from '../components/PostItem'

export default function Newsfeed() {
    const {loading, data} = useQuery(QUERY_ALL_POSTS)

    if(data) {
        console.log(data)
    }

    return (
        <div>
            <h1>This the Newsfeed</h1>

            <div>
                {loading ? (
                    <h2>Loading posts...</h2>
                ) : (
                    data.posts.map(post => 
                    <div key={post.id}>
                        <PostItem post={post}/>
                    </div>)
                ) }
            </div>
        </div>
    )
}