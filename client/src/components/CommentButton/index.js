import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {CREATE_COMMENT} from '../../utils/mutations'
import Auth from '../../utils/auth'


function CommentButton() {
    const {postId} = useParams()
    const [comment, setComment] = useState('')

    const [createComment] = useMutation(CREATE_COMMENT, {
        update() {
            setComment('')
        },
        variables: {
            postId: postId,
            body: comment
        }
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()
    }
    return(
        Auth.loggedIn() && 
            <div>
                <p>Post a comment</p>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input 
                            type={"text"} 
                            placeholder={"comment.."} 
                            value={comment} 
                            onChange={e => setComment(e.target.value)} 
                        />
                        <button 
                            type='submit' 
                            disabled={comment.trim() === ''}
                            onClick={createComment}
                        >Create Comment</button>
                    </div>
                </form>
            </div>
        
    )
}

export default CommentButton