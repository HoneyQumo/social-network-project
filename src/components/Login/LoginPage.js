import React from 'react';

import './LoginPage.css';
import LoginForm from './LoginForm/LoginForm';


const LoginPage = () => {
    return (
        <div className='login-page'>
            <h1 className='login-page__title'>Авторизация</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;