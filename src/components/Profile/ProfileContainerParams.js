import React from 'react';
import { useParams } from 'react-router-dom';

import ProfileContainer from './ProfileContainer';

const ProfileContainerParams = () => {

    let { userId } = useParams();
    if (!userId) userId = 23484;

    return (
        <div>
            <ProfileContainer userId={userId} />
        </div>
    );
};

export default ProfileContainerParams;