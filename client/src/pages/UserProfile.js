import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Auth from '../utils/auth'
import ExtProfile from "../components/ExtProfile";
import IntProfile from "../components/IntProfile";
import { QUERY_USER_EXT, QUERY_USER_INT, QUERY_USER_PLANTS } from "../utils/queries";

export default function UserProfile() {    
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

    const {loading: loading3, data: dataIntPlant} = useQuery(QUERY_USER_PLANTS, {
        variables: {id: id}
    })
    const intPlant = dataIntPlant?.getUser || {}
    return(
        loading || loading2 || loading3 ? <div>loading...</div> :
        <div>
            {rightUser? 
                <IntProfile user={intUser} plants={intPlant} /> : 
                <ExtProfile user={extUser}/>
            }
        </div>
    )
}