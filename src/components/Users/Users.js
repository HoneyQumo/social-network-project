import React from 'react'

import './Users.css';
import userPhoto from '../../assets/images/default-avatar-icon.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = ({ users, toggleFollow, totalUsersCount, pageSize,
    currentPage, onPageChenged, isPressedButton, buttonIsPressed }) => {

    const pagesCreator = (pages, pagesCount, currentPage) => {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }
        }
    }

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    pagesCreator(pages, pagesCount, currentPage);

    return (
        <div className='users'>
            {
                users.map(user => {
                    return (
                        <div key={user.id} className='user'>
                            <div className='user__content'>
                                <NavLink to={`/profile/${user.id}`} className='user__image'>
                                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='avatar' />
                                </NavLink>
                                {user.followed ?
                                    <button
                                        disabled={isPressedButton.some(id => id === user.id)}
                                        className='user__button followed-true'
                                        onClick={() => {
                                            buttonIsPressed(true, user.id);
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "ac73d958-5928-4823-a571-86a1cb2e91d0"
                                                },
                                            }).then(res => {
                                                if (res.data.resultCode === 0) {
                                                    toggleFollow(user.id);
                                                }
                                                buttonIsPressed(false, user.id);
                                            });
                                        }}
                                    >
                                        Удалить
                                    </button> :

                                    <button
                                        disabled={isPressedButton.some(id => id === user.id)}
                                        className='user__button followed-false'
                                        onClick={() => {
                                            buttonIsPressed(true, user.id);
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "ac73d958-5928-4823-a571-86a1cb2e91d0"
                                                },
                                            }).then(res => {
                                                if (res.data.resultCode === 0) {
                                                    toggleFollow(user.id);
                                                }
                                                buttonIsPressed(false, user.id);
                                            });
                                        }}
                                    >
                                        Добавить
                                    </button>
                                }
                            </div>
                            <div className='user__info'>
                                <NavLink to={`/profile/${user.id}`} className='user__fullname'>
                                    {user.name}
                                </NavLink>
                                <div className='user__status'>
                                    {user.status}
                                </div>
                                <div className='user__location'>
                                    {/* {`${user.location.city}, ${user.location.country}`} */}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <div className='users__pages'>
                {pages.map((page, index) => {
                    return (
                        <span
                            key={index}
                            className={currentPage === page ? 'pages__selected-page' : 'pages__pagination'}
                            onClick={() => { onPageChenged(page) }}
                        >
                            {page}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
