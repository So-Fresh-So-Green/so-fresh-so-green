import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Auth from '../utils/auth'
import ExtProfile from "../components/ExtProfile";
import { QUERY_USER_EXT } from "../utils/queries";

// TODO: return either an exterior or interior profile view depending on which user is viewing it

export default function ProfilePlayground() {    
    const {id} = useParams()
    const profData = Auth.getProfile()
    const userData = profData.data
    const rightUser = userData._id === id

    const {loading, data} = useQuery(QUERY_USER_EXT, {
        variables: {_id: id}
    })
    const user = data?.getUser || {}
    console.log(user)

    return(
        loading ? <div>loading...</div> :
        <div>
            {rightUser? 
                <h1>Your profile</h1> : 
                <ExtProfile user={user}/>
            }
        </div>
    )
}