import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

import LikeButton from '../LikeButton'
import DeletePostButton from '../DeletePostButton'

function PostItem({post: {
    _id,
    image,
    body,
    username,
    createdAt,
    comments,
    commentCount,
    likes,
    likeCount,
    userId
}}) {

    const profData = Auth.getProfile()
    const userData = profData.data
    const rightUser = userData._id === userId

    return(
        <>
                    <div
                        class="px-6 py-6  bg-white rounded-lg shadow border-b border-gray-300 w-12/12"
                    >
                        <div
                            class="w-max flex justify-between items-center"
                        >
                            <div class="flex items-center cursor-pointer">
                                {/* TODO Update Profile img */}
                                <img
                                    class="rounded-full h-10 w-10"
                                    src="https://image.scoopwhoop.com/w360/s3.scoopwhoop.com/anj/erg/58fb822a-afce-4b89-9099-894b703bee98_1.jpg.webp"
                                />
                                <div class="ml-2"><p><Link to={`/profile/${userId}`}>{username}</Link></p></div>
                            </div>
                    
                        </div>

                        <div>
                        <h1>{body}</h1>
                        {image !== null ? <img
                                class="object-cover cursor-pointer"
                                src={image}
                            /> : null}
                        <p>created at: {createdAt}</p>
                        </div>

                        <div
                            class="px-6 py-6  flex justify-between items-center"
                        >
                            <div class="flex items-center space-x-2">
                            <LikeButton user={userData} post={{_id, likes, likeCount}}/>
                                <Link to={`/post/${_id}`}><button>💬 </button><label> {commentCount} </label></Link>
                                {rightUser ? <DeletePostButton postId={{_id}} /> : null}
                            </div>
                            </div>
                        </div>


        </>
    )

    
}

export default PostItem