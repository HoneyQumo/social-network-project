import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Content.css';
import Messages from '../Messages/Messages';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainerParams from '../Profile/ProfileContainerParams';

const Content = () => {
    return (
        <div className='content'>
            <Routes >
                <Route path='/profile/'>
                    <Route path=':userId' element={<ProfileContainerParams />} />
                    <Route path='' element={<ProfileContainerParams />} />
                </Route>
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