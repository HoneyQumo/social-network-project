import React from 'react';

import './ChatItems.css';


const ChatItems = ({ msg }) => {
    return (
        <div className='chat__item'>
            {msg}
        </div>
    );
};

export default ChatItems;