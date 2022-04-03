import React from 'react';

import './MyPost.css';
import Post from '../Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../reducers/profile-reducer';
import { connect } from 'react-redux';


const MyPost = ({ postsData, newPostText, addPost, onPostChange }) => {

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
                {postsData.map(({ id, text, likeCount }) => {
                    return (
                        <Post key={id} text={text} likeCount={likeCount} />
                    );
                })}
            </div>
        </div>
    )
};

const newPostElement = React.createRef();

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: () => {
            const text = newPostElement.current.value;
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);