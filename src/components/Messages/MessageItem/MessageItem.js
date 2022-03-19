import React from 'react'
import { NavLink } from 'react-router-dom';

import './MessageItem.css'

const MessageItem = ({ name, id, imageUrl }) => {

    return (
        <NavLink to={`/messages/${id}`} className='messages__user'>
            <div className='user__avatar'>
                <img src={`https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/452/external-avatar-${imageUrl}`} alt='avatar' />
            </div>
            <div className='user__name'>
                {name}
            </div>
        </NavLink>
    );
}

export default MessageItem