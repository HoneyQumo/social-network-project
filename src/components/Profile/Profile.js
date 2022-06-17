import React from 'react';

import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import Loader from '../Loader/Loader';
import defaulAvatar from '../../assets/images/default-avatar-icon.png';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Profile = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Loader />;
	}

	return (
		<div className='profile__wrapper'>
			<div className='profile'>
				<div className='profile__avatar'>
					<img
						src={profile.photos.large ? profile.photos.large : defaulAvatar}
						alt='Avatar'
					/>
				</div>
				<div className='profile__info'>
					<div className='profile__name'>{profile.fullName}</div>
					<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
					<div className='profile__about'>{`Обо мне: ${profile.aboutMe}`}</div>
				</div>
			</div>

			<MyPosts profile={profile} />
		</div>
	);
};

export default Profile;
