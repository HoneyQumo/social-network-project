import React, { Component } from 'react'
import { connect } from 'react-redux';

import Profile from './Profile';
import { getUserProfile } from '../../reducers/profile-reducer';


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

const mapStateToProps = ({ profilePage: { profile } }) => ({
    profile,
});

const mapDispatchToProps = { getUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);