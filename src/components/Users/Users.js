import axios from 'axios';
import React, { Component } from 'react'

import './Users.css';
import userPhoto from '../../assets/images/default-avatar-icon.png';



export default class Users extends Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setUsersTotalCount(res.data.totalCount);
            });
    };

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    };

    pagesCreator = (pages, pagesCount, currentPage) => {
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

    render() {

        const { users, toggleFollow, totalUsersCount, pageSize, currentPage } = this.props;

        const pagesCount = Math.ceil(totalUsersCount / pageSize);
        const pages = [];
        this.pagesCreator(pages, pagesCount, currentPage);

        return (
            <div className='users'>
                {
                    users.map(user => {
                        return (
                            <div key={user.id} className='user'>
                                <div className='user__content'>
                                    <div className='user__image'>
                                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='avatar' />
                                    </div>
                                    <button onClick={() => { toggleFollow(user.id) }}
                                        className={user.followed ? 'user__button followed-true' : 'user__button followed-false'}
                                    >
                                        {user.followed ? 'Удалить' : 'Добавить'}
                                    </button>
                                </div>
                                <div className='user__info'>
                                    <h2 className='user__fullname'>
                                        {user.name}
                                    </h2>
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
                    {
                        pages.map(page => {
                            return (
                                <span
                                    className={this.props.currentPage === page ? 'pages__selected-page' : 'pages__pagination'}
                                    onClick={() => { this.onPageChenged(page) }}
                                >
                                    {page}
                                </span>
                            );
                        })
                    }
                </div>
            </div>
        );
    };
};
