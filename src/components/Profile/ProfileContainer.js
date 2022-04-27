import React, { Component } from 'react'
import { connect } from 'react-redux';

import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../reducers/profile-reducer';
import { withAuthNavigate } from '../../HOC/withAuthNavigate';
import { compose } from 'redux';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.userId);
        this.props.getStatus(this.props.userId);
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    };
};

const mapStateToProps = ({ profilePage, auth }) => ({
    profile: profilePage.profile,
    status: profilePage.status,
    isAuth: auth.isAuth,
});

const mapDispatchToProps = { getUserProfile, getStatus, updateStatus };

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);