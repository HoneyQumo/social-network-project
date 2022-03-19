import React from 'react'

import './Messages.css'
import MessageItem from './MessageItem/MessageItem';
import DialogPost from './DialogPost/DialogPost';

const Messages = () => {

    const usersMessagesData = [
        { id: 1, name: 'Никита', imageUrl: 'graphic-design-xnimrodx-lineal-color-xnimrodx.png' },
        { id: 2, name: 'Елена', imageUrl: 'esport-xnimrodx-lineal-color-xnimrodx-2.png' },
        { id: 3, name: 'Иван', imageUrl: 'retirement-xnimrodx-lineal-color-xnimrodx-2.png' },
        { id: 4, name: 'Дмитрий', imageUrl: 'fitness-and-gym-xnimrodx-lineal-color-xnimrodx-2.png' },
        { id: 5, name: 'Ирина', imageUrl: 'encryption-xnimrodx-lineal-color-xnimrodx.png' },
    ];

    const dialogsPostData = [
        { id: 1, msg: 'Hello' },
        { id: 2, msg: 'What is you name?' },
        { id: 3, msg: 'How are you?' },
    ];


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
            <div className='messages__dialog'>
                {
                    dialogsPostData.map(({ id, msg }) => {
                        return (
                            <DialogPost key={id} id={id} msg={msg} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Messages