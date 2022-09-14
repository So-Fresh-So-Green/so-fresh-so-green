import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_POST, DELETE_COMMENT} from '../../utils/mutations'
import {QUERY_ALL_POSTS} from '../../utils/queries'

function CommentButton() {
    // const mutation = commentId ? DELETE_COMMENT : DELETE_POST
    
    // const [deletePostComm] = useMutation(mutation, {
    //     update(cache) {
    //         if(!commentId) {
    //             const data = cache.readQuery({
    //                 query: QUERY_ALL_POSTS
    //             })
    //             let newData = [...data.posts]
    //             newData = newData.filter(post => post._id !== _id)
    //             cache.writeQuery({query: QUERY_ALL_POSTS, data: {posts: newData}})
    //         }
    //         if (callback) callback()
    //     },
    //     variables: {postId: _id, commentId}        
    // })

// curUrl.pathname === newsUrl ? console.log('wow') : null
const newComment = () => {
    console.log('wow')
}

    return(
        <>
        <button onClick={newComment} > test button</button>
        </>
    )
}

export default CommentButton