import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_POST} from '../../utils/mutations'
import {QUERY_ALL_POSTS} from '../../utils/queries'

function DeletePostButton({postId: {_id}}) {
    const [deletePost] = useMutation(DELETE_POST, {
        update(proxy) {
            const data = proxy.readQuery({
                query: QUERY_ALL_POSTS
            })
            let newData = [...data.posts]
            newData = newData.filter(post => post._id !== _id)
            proxy.writeQuery({query: QUERY_ALL_POSTS, data: {posts: newData}})
        },
        variables: {postId: _id}        
    })

    // const deletePost = () => {
    //     let result = window.confirm('wow')
    //     console.log(result)
    // }

    return(
        <button onClick={deletePost}> 🗑️</button>
    )
}

export default DeletePostButton