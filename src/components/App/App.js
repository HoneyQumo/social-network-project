import React from 'react';

import './App.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const App = ({ state, addPost, updateNewPostText }) => {

    const { messagesUsersData, messagesChatData } = state.messagePage;
    const { postsData, newPostText } = state.profilePage;

    return (
        <div className='container'>
            <Header />
            <Navbar />
            <Content
                messagesUsersData={messagesUsersData}
                messagesChatData={messagesChatData}
                postsData={postsData}
                newPostText={newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </div>
    );
};

export default App;