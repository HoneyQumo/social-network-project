import React from 'react';

import './ChatItems.css';


const ChatItems = ({ msg }) => {
    return (
        <div className='chat__items'>
            <div className='chat__item'>
                {msg}
            </div>
        </div>
    );
};

export default ChatItems;