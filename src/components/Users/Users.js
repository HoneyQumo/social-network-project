import React from 'react';

import './Users.css';

const Users = ({ users, toggleFollow, setUsers }) => {
    return (
        <div className='users'>
            {
                users.map(user => {
                    return (
                        <div key={user.id} className='user'>
                            <div className='user__content'>
                                <div className='user__image'>
                                    <img src={user.imageUrl} alt='avatar' />
                                </div>
                                <button onClick={() => { toggleFollow(user.id) }}
                                    className={user.followed ? 'user__button followed-true' : 'user__button followed-false'}
                                >
                                    {user.followed ? 'Удалить' : 'Добавить'}
                                </button>
                            </div>
                            <div className='user__info'>
                                <h2 className='user__fullname'>
                                    {user.fullName}
                                </h2>
                                <div className='user__status'>
                                    {user.status}
                                </div>
                                <div className='user__location'>
                                    {`${user.location.city}, ${user.location.country}`}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Users;