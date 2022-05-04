import React from 'react';

import './MyPosts.css';
import Post from '../Post/Post';
import { addPostActionCreator } from '../../../reducers/profile-reducer';
import { connect } from 'react-redux';
import { Field, Form, Formik } from 'formik';

const MyPosts = ({ postsData, addPost, profile }) => {

    return (
        <div className='mypost'>
            <h2 className='mypost__title'>Записи</h2>

            <Formik
                initialValues={{
                    newPost: ''
                }}
                onSubmit={(values) => addPost(values.newPost)}
            >
                {({ handleSubmit }) => (
                    <Form className='mypost__form' onSubmit={handleSubmit}>
                        <Field
                            as='textarea'
                            id='newPost'
                            name='newPost'
                            className='mypost__field'
                            placeholder='Введите текст...'
                        />
                        <button type='submit' className='mypost__button' >Добавить</button>
                    </Form>
                )}
            </Formik>

            <div className='myposts'>
                {postsData.map(({ id, text, likeCount }) => {
                    return (
                        <Post key={id} text={text} likeCount={likeCount} profile={profile} />
                    );
                })}
            </div>
        </div >
    )
};

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);