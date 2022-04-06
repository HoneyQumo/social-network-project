import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Content.css';
import Messages from '../Messages/Messages';
import Music from '../Music/Music';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';

const Content = () => {
    return (
        <div className='content'>
            <Routes >
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages/*' element={<Messages />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users' element={<UsersContainer />} />
            </Routes>
        </div>
    );
};

export default Content;