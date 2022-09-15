import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { FOLLOW_USER } from '../../utils/mutations'

export default function FollowButton({sheepId, shepherd: {_id, followers}}) {
    const [followed, setFollowed] = useState(false)

    useEffect(() => {
        if(followers.find((follower) => follower === sheepId)){
            setFollowed(true)
        } else {
            setFollowed(false)
        }
    })

    const [followUser] = useMutation(FOLLOW_USER, {
        variables: {userId: _id}
    })

    return(
        <button>Follow</button>
    )
}