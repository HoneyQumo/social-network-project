import axios from 'axios';
import React, { Component } from 'react'

import './Users.css';
import userPhoto from '../../assets/images/default-avatar-icon.png';



export default class Users extends Component {

    constructor(props) {
        super(props);
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }



    render() {

        const { users, toggleFollow, setUsers } = this.props;

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
            </div>
        )
    };
};
