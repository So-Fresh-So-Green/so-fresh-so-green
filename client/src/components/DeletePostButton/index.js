import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_POST} from '../../utils/mutations'
import {QUERY_ALL_POSTS} from '../../utils/queries'

function DeletePostButton({postId: {_id}, callback}) {
    const [deletePost] = useMutation(DELETE_POST, {
        update(cache) {
            const data = cache.readQuery({
                query: QUERY_ALL_POSTS
            })
            let newData = [...data.posts]
            newData = newData.filter(post => post._id !== _id)
            cache.writeQuery({query: QUERY_ALL_POSTS, data: {posts: newData}})
            if (callback) callback()
        },
        variables: {postId: _id}        
    })
    // TODO: Implement a react/tailwinds modal to confirm deletion
    return(
        <button onClick={deletePost} > 🗑️</button>
    )
}

export default DeletePostButton