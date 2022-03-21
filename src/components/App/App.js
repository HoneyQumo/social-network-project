import React from 'react';
import Content from '../Content/Content';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './App.css';

const App = ({ state }) => {

    const { usersMessagesData, dialogsPostData } = state;

    return (
        <div className='container'>
            <Header />
            <Navbar />
            <Content usersMessagesData={usersMessagesData} dialogsPostData={dialogsPostData} />
        </div>
    );
};

export default App;