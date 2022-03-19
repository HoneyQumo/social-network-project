import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'


const Navbar = () => {
    return (
        <ul className='navbar'>
            <li>
                <NavLink to='/profile/'>Profile</NavLink>
            </li>
            <li>
                <NavLink to='/messages/'>Messages</NavLink>
            </li>
            <li>
                <NavLink to='/news/'>News</NavLink>
            </li>
            <li>
                <NavLink to='/music/'>Music</NavLink>
            </li>
            <li>
                <NavLink to='/settings/'>Settings</NavLink>
            </li>
        </ul>
    )
}

export default Navbar