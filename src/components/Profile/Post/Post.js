import React from 'react';

import './Post.css';
import defaultAvatar from '../../../assets/images/default-avatar-icon.png';

const Post = ({ text, likeCount, profile }) => {
    return (
        <div className='post'>
            <div className='post__wrapper'>
                <div className='post__avatar'>
                    <img src={profile.photos.small ? profile.photos.small : defaultAvatar} alt='avatar' />
                </div>
                <div className='post__text'>
                    {text}
                </div>
            </div>
            <button className='post__like'>
                <img src='https://img.icons8.com/color/344/filled-like.png' alt='like' />
                {likeCount}
            </button>
        </div>
    );
};

export default Post;