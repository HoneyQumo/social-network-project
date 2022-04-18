import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = ({ id, login, isAuth }) => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='https://img.icons8.com/doodle/344/frog.png' alt='logo' />
            </div>

            <div className='header__login-block'>
                {isAuth ?
                    <NavLink className='login-block__auth' to={`/profile/${id}`}> {login} </NavLink>
                    : <NavLink className='login-block__not-auth' to={'/login'}>Войти</NavLink>}
            </div>
        </div>
    );
};

export default Header;