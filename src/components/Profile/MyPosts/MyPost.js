import React from 'react';

import './MyPost.css';
import Post from '../Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';

const MyPost = ({ postsData, newPostText, dispatch }) => {

    const newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text))
    };

    const addPost = () => {
        dispatch(addPostActionCreator())
    };

    return (
        <div className='mypost'>
            <h2 className='mypost__title'>Записи</h2>

            <textarea
                className='mypost__area'
                onChange={onPostChange}
                value={newPostText}
                ref={newPostElement}
            />

            <button
                className='mypost__button'
                onClick={addPost}
            >
                Добавить
            </button>

            <div className='myposts'>
                {
                    postsData.map(({ id, text, likeCount }) => {
                        return (
                            <Post key={id} text={text} likeCount={likeCount} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MyPost;