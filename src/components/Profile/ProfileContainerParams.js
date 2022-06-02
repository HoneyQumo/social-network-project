import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

import ProfileContainer from './ProfileContainer';
import { getUserProfile, getStatus, updateStatus } from '../../reducers/profile-reducer'
import { withAuthNavigate } from '../../HOC/withAuthNavigate';

const ProfileContainerParams = (props) => {

    let { userId } = useParams();
    if (!userId) {
        userId = props.authorizedUserId;
    }

    return (
        <div>
            <ProfileContainer userId={userId} {...props} /> {/* PROPS: getUserProfile, getStatus, updateStatus, profile  */}
        </div>
    );
};

const mapStateToProps = ({ profilePage, auth }) => ({
    profile: profilePage.profile,
    status: profilePage.status,
    isAuth: auth.isAuth,
    authorizedUserId: auth.id
});

const mapDispatchToProps = { getUserProfile, getStatus, updateStatus };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(ProfileContainerParams);