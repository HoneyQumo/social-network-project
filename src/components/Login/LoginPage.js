import React from 'react';
import { connect } from 'react-redux';

import './LoginPage.css';
import LoginForm from './LoginForm/LoginForm';
import { login } from '../../reducers/auth-reducer';


const LoginPage = ({ isAuth, login }) => {

    return (
        <div className='login-page'>
            <h1 className='login-page__title'>Авторизация</h1>
            <LoginForm login={login} isAuth={isAuth} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(LoginPage);