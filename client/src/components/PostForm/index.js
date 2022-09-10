import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_POST } from '../../utils/mutations';
import {QUERY_ALL_POSTS} from '../../utils/queries';

const PostForm = () => {
    const [formState, setFormState] = useState({
        body: '',
        image: ''
    })
    const [characterCount, setCharacterCount] = useState(0);

    const [createPost, {error}] = useMutation(CREATE_POST, {
        update(cache, {data: {createPost}}) {
            try {
                const {posts} = cache.readQuery({query: QUERY_ALL_POSTS})

                cache.writeQuery({
                    query: QUERY_ALL_POSTS,
                    data: {posts: [createPost, ...posts]}
                })
            } catch (err) {
                console.error(err)
            }
        }
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const {data} = await createPost({
                variables: {...formState}
            })

            setFormState({
                body: '',
                image: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'body' && value.length <= 2000) {
            setFormState({...formState, [name]: value})
            setCharacterCount(value.length)
        } else if (name !== 'body') {
            setFormState({...formState, [name]: value})
        }
    }

    return (
        <div>
            <h3>New Post</h3>

            <p>Character Count: {characterCount}/2000</p>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <textarea name='body' placeholder='Enter your thought here' onChange={handleChange}></textarea>
                </div>
                <div>
                    <input name='image' placeholder='Upload your photo here' onChange={handleChange} />
                </div>

                <div>
                    <button type='submit'>Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm