import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileContainer from './ProfileContainer';

const ProfileContainerParams = () => {

    const { userId } = useParams();

    return (
        <div>
            <ProfileContainer userId={userId} />
        </div>
    );
};

export default ProfileContainerParams;