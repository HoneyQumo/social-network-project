import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Messages from '../Messages/Messages';
import Music from '../Music/Music';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import './Content.css';

const Content = ({ messagesUsersData, messagesChatData, postsData, newPostText, addPost, updateNewPostText }) => {
    return (
        <div className='content'>
            <Routes >
                <Route path='/profile' element={<Profile postsData={postsData} newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText} />} />
                <Route path='/messages/*' element={<Messages messagesUsersData={messagesUsersData} messagesChatData={messagesChatData} />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    );
};

export default Content;