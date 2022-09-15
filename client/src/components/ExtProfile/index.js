import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

import CommentButton from "../CommentButton";
import LikeButton from '../LikeButton'
import DeletePostButton from '../DeletePostButton'

export default function ExtProfile({user}) {
    return(
        <div>
            {user.username}'s profile
        </div>
    )

    
}