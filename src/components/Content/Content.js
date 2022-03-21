import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Messages from '../Messages/Messages';
import Music from '../Music/Music';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import './Content.css';

const Content = ({ usersMessagesData, dialogsPostData }) => {
    return (
        <div className='content'>
            <Routes >
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages/*' element={<Messages usersMessagesData={usersMessagesData} dialogsPostData={dialogsPostData} />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    );
};

export default Content;