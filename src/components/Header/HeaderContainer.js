import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../reducers/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    const { id, login, email } = res.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
    };

    render() {
        return (
            <Header {...this.props} />
        );
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id
});

const mapDispatchToProps = { setAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);