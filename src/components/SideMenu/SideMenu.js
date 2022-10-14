import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';

export const SideMenu = ({closeMenu}) => {

    
    return (
        <div className='side-menu'>
            <div className='side-menu__overlay' onClick={closeMenu}></div>
            <nav className='side-menu__list'>
                <div className='side-menu__container'>
                    <NavLink to='/' className='side-menu__button opacity transition'>Главная</NavLink>
                    <NavLink to='/movies' className='side-menu__button side-menu__button_active opacity transition'>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className='side-menu__button opacity transition'>Сохраненные фильмы</NavLink>
                </div>
                <NavLink to='/profile' className='side-menu__account-button opacity transition'>Аккаунт</NavLink>
                <button className='side-menu__close-button opacity transition' type='button' onClick={closeMenu}></button>
            </nav>
        </div>
    );
}
