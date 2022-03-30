import React from 'react';

import './App.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const App = ({ state, dispatch }) => {
    const { messagesUsersData, messagesChatData, newMessageBody } = state.messagePage;
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
                dispatch={dispatch}
                newMessageBody={newMessageBody}
            />
        </div>
    );
};

export default App;