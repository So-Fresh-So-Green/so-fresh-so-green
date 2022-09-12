import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {DELETE_POST} from '../../utils/mutations'

function DeletePostButton({_id}) {
    const [deletePost] = useMutation(DELETE_POST, {
        variables: {_id}        
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