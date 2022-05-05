import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = ({ id, login, isAuth, logout }) => {

    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='https://img.icons8.com/doodle/344/frog.png' alt='logo' />
            </div>

            {isAuth ?
                // <NavLink className='login-block__auth' to={`/profile/${id}`}>{login}</NavLink>
                <NavLink className='login-block__auth' to={'/login'} onClick={logout} > Выйти</NavLink>
                : <NavLink className='login-block__not-auth' to={'/login'}>Войти</NavLink>
            }
        </div>
    );
};

export default Header;