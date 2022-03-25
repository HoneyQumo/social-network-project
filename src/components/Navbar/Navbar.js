import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
    return (
        <ul className='navbar'>
            <li>
                <NavLink to='/profile/'>Профиль</NavLink>
            </li>
            <li>
                <NavLink to='/messages/'>Сообщения</NavLink>
            </li>
            <li>
                <NavLink to='/news/'>Новости</NavLink>
            </li>
            <li>
                <NavLink to='/music/'>Музыка</NavLink>
            </li>
            <li>
                <NavLink to='/settings/'>Настройки</NavLink>
            </li>
        </ul>
    );
};

export default Navbar;