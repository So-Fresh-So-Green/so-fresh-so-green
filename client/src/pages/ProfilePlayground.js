import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Auth from '../utils/auth'
import ExtProfile from "../components/ExtProfile";
import IntProfile from "../components/IntProfile";
import { QUERY_USER_EXT, QUERY_USER_INT } from "../utils/queries";

export default function ProfilePlayground() {    
    const {id} = useParams()
    const profData = Auth.getProfile()
    const userData = profData.data
    const rightUser = userData._id === id

    const {loading, data: dataExt} = useQuery(QUERY_USER_EXT, {
        variables: {_id: id}
    })
    const extUser = dataExt?.getUser || {}

    const {loading: loading2, data: dataInt} = useQuery(QUERY_USER_INT, {
        variables: {_id: id}
    })
    const intUser = dataInt?.getUser || {}

    return(
        loading ? <div>loading...</div> :
        <div>
            {rightUser? 
                <IntProfile user={intUser} /> : 
                <ExtProfile user={extUser}/>
            }
        </div>
    )
}