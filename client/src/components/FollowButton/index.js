import React, {useState, useEffect} from 'react'
import {useMutation} from '@apollo/client'
import { FOLLOW_USER, UNFOLLOW_USER } from '../../utils/mutations'

function FollowButton({sheep, shepherd: {_id, followers, followerCount}}) {
    const [followCount, setFollowCount] = useState(followerCount)
    const [followed, setFollowed] = useState(false)

    useEffect(() => {
        if(followers.find((follower) => follower._id === sheep._id)){
            setFollowed(true)
        } else {
            setFollowed(false)
        }
    }, [followers, sheep._id])

    const [followUser] = useMutation(FOLLOW_USER, {
        update(){
            setFollowed(true)
            setFollowCount(followCount+1)
        },
        variables: {userId: _id}
    })

    const [unfollowUser] = useMutation(UNFOLLOW_USER, {
        update(){
            setFollowed(false)
            setFollowCount(followCount-1)
        },
        variables: {userId: _id}
    })

    const followButton = followed ? (
        <button onClick={unfollowUser}>UNFOLLOW</button>
    ) : (
        <button onClick={followUser}>FOLLOW</button>
    )

    return(
        <>
            {followCount} followers
            <br></br>
            {followButton}
        </>
    )
}

export default FollowButton