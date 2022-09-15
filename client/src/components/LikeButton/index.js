import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {LIKE_POST} from '../../utils/mutations'

function LikeButton({post: {_id, likeCount, likes}, user}) {
    const [liked, setLiked] = useState(false)
    
    useEffect(() => {
        if(user && likes.find(like => like.username === user.username)) {
            setLiked(true)
        } else setLiked(false)
    }, [user, likes])
    
    const [likePost] = useMutation(LIKE_POST, {
        variables: {postId: _id}
    })

    const likeButton = user ? (
        liked ? (
            <button onClick={likePost}> ❤️</button>
        ) : (
            <button onClick={likePost}> 🖤</button>
        )
    ) : (
        <button as={Link} to='/login'> 🖤</button>
    )
    

    return(
        <>
            {likeButton} <label>{likeCount}</label>
        </>
    )
}

export default LikeButton