import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_POST, DELETE_COMMENT} from '../../utils/mutations'
import {QUERY_ALL_POSTS} from '../../utils/queries'

function DeletePostButton({postId: {_id}, commentId, callback}) {
    const mutation = commentId ? DELETE_COMMENT : DELETE_POST
    
    const [deletePostComm] = useMutation(mutation, {
        update(cache) {
            if(!commentId) {
                const data = cache.readQuery({
                    query: QUERY_ALL_POSTS
                })
                let newData = [...data.posts]
                newData = newData.filter(post => post._id !== _id)
                cache.writeQuery({query: QUERY_ALL_POSTS, data: {posts: newData}})
            }
            if (callback) callback()
        },
        variables: {postId: _id, commentId}        
    })
    // TODO: Implement a react/tailwinds modal to confirm deletion
    return(
        <button onClick={deletePostComm} > 🗑️</button>
    )
}

export default DeletePostButton