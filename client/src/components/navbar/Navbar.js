import React from 'react';
import { Route, Navigate, useLocation, NavLink } from "react-router-dom";
import './navbar.sass';
import clsx from 'clsx';

function Navbar(props) {

    return (
        <div className='navbar flex-container flex-row'>
            <NavLink 
                to='./places'
                className={ ({ isActive }) => clsx('flex-container flex-center navbar-link b', isActive ? 'active' : '') }
            >
                Места
            </NavLink>
            { 
                props.role === 'admin' 
                &&
                <NavLink 
                    to='./users'
                    className={ ({ isActive }) => clsx('flex-container flex-center navbar-link b', isActive ? 'active' : '') }
                >
                    Пользователи
                </NavLink>
            }
        </div>
    )
}

export default Navbar;