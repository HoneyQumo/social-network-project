import React from 'react';

import './Messages.css';
import MessageItem from './MessageItem/MessageItem';
import ChatItems from './ChatItems/ChatItems';

const Messages = ({ usersMessagesData, dialogsPostData }) => {

    return (
        <div className='messages'>
            <div className='messages__users'>
                {
                    usersMessagesData.map(({ id, name, imageUrl }) => {
                        return (
                            <MessageItem key={id} id={id} name={name} imageUrl={imageUrl} />
                        );
                    })
                }
            </div>
            <div className='messages__chat'>
                {
                    dialogsPostData.map(({ id, msg }) => {
                        return (
                            <ChatItems key={id} id={id} msg={msg} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Messages;