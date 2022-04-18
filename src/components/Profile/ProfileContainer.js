import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setUserProfile } from '../../reducers/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then(res => {
                this.props.setUserProfile(res.data);
            })
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

const mapDispatchToProps = { setUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);