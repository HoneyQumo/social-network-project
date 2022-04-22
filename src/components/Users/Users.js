import React from 'react'
import { NavLink } from 'react-router-dom';

import './Users.css';
import userPhoto from '../../assets/images/default-avatar-icon.png';

const Users = ({ users, totalUsersCount, pageSize,
    currentPage, onPageChenged, isPressedButton,
    follow, unfollow }) => {

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
                                        onClick={() => { unfollow(user.id) }}
                                    >
                                        Удалить
                                    </button>
                                    :
                                    <button
                                        disabled={isPressedButton.some(id => id === user.id)}
                                        className='user__button followed-false'
                                        onClick={() => { follow(user.id) }}
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
