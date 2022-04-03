import React from 'react';

import './Profile.css';
import MyPost from './MyPosts/MyPost';

const Profile = () => {
    return (
        <div className='profile__wrapper'>
            <div className='profile'>
                <div className='profile__avatar'>
                    <img src='https://sun9-1.userapi.com/impf/rkPYEmYJGK-bU4USsFHd4xy2Q4zSfFxB0wtRxQ/_CFKmS78e_M.jpg?size=720x1080&quality=96&sign=78c91907568a3ef1d33ea9f09bf14da7&type=album' alt='avatar' />
                </div>
                <div className='profile__info'>
                    <div className='profile__name'>
                        Имя: Никита Червяков
                    </div>
                    <div className='profile__age'>
                        Возраст: 23
                    </div>
                </div>
            </div>

            <MyPost />
        </div>
    );
};

export default Profile;