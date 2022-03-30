import React from 'react';

import './Messages.css';
import MessageItem from './MessageItem/MessageItem';
import ChatItems from './ChatItems/ChatItems';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../reducers/messgaes-reducer';

const Messages = ({ messagesUsersData, messagesChatData, newMessageBody, dispatch }) => {


    const onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    };

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        dispatch(updateNewMessageBodyActionCreator(body));
    };

    return (
        <div className='messages'>
            <div className='messages__users'>
                {
                    messagesUsersData.map(({ id, name, imageUrl }) => {
                        return (
                            <MessageItem key={id} id={id} name={name} imageUrl={imageUrl} />
                        );
                    })
                }
            </div>
            <div className='messages__chat'>
                <div>
                    {
                        messagesChatData.map(({ id, msg }) => {
                            return (
                                <ChatItems key={id} id={id} msg={msg} />
                            );
                        })
                    }
                </div>
                <div className='chat__field'>
                    <textarea
                        placeholder='Напишите сообщение...'
                        className='chat__text'
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    />
                    <button
                        className='chat__btn'
                        onClick={onSendMessageClick}
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Messages;