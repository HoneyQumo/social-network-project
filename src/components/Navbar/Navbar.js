import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
    return (
        <ul className='navbar'>
            <li>
                <NavLink className='navbar__item' to='/profile/'>Профиль</NavLink>
            </li>
            <li>
                <NavLink className='navbar__item' to='/messages/'>Сообщения</NavLink>
            </li>
            <li>
                <NavLink className='navbar__item' to='/news/'>Новости</NavLink>
            </li>
            <li>
                <NavLink className='navbar__item' to='/music/'>Музыка</NavLink>
            </li>
            <li>
                <NavLink className='navbar__item' to='/settings/'>Настройки</NavLink>
            </li>
            <li >
                <NavLink className='navbar__item' to='/users/'>Пользователи</NavLink>
            </li>
        </ul>
    );
};

export default Navbar;