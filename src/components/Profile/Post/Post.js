import React from 'react';

import './Post.css';

const Post = ({ text, likeCount }) => {
    return (
        <div className='post'>
            <div className='post__wrapper'>
                <div className='post__avatar'>
                    <img src='https://sun9-1.userapi.com/impf/rkPYEmYJGK-bU4USsFHd4xy2Q4zSfFxB0wtRxQ/_CFKmS78e_M.jpg?size=720x1080&quality=96&sign=78c91907568a3ef1d33ea9f09bf14da7&type=album' alt='avatar' />
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