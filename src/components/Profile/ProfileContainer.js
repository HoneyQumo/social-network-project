import React, { Component } from 'react'
import { connect } from 'react-redux';

import Profile from './Profile';
import { getUserProfile } from '../../reducers/profile-reducer';
import { withAuthNavigate } from '../../HOC/withAuthNavigate';
import { compose } from 'redux';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.userId);
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    };
};

const mapStateToProps = ({ profilePage, auth }) => ({
    profile: profilePage.profile,
    isAuth: auth.isAuth
});

const mapDispatchToProps = { getUserProfile };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(ProfileContainer);