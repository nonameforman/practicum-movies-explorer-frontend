import './MoviesNavigation.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { SideMenu } from '../../SideMenu/SideMenu';

const linkNotActive = 'movies-navigation__button opacity transition'
const linkActive = 'movies-navigation__button movies-navigation__button_active opacity transition'

export const MoviesNavigation = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => setMenuIsOpen(true);

    const closeMenu = () => setMenuIsOpen(false);
    
    return (
        <div className='movies-navigation'>
            <nav className='movies-navigation__wrapper'>
                <div className='movies-navigation__container'>
                    <NavLink to='/movies' className={({isActive}) => isActive ? linkActive : linkNotActive}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className={({isActive}) => isActive ? linkActive : linkNotActive}>Сохраненные фильмы</NavLink>
                </div>
                <NavLink to='/profile' className='movies-navigation__button movies-navigation__button_grey opacity transition'>Аккаунт</NavLink>
            </nav>
            <button className='movies-navigation__nav-button opacity transition' onClick={openMenu}></button>
            {menuIsOpen && <SideMenu closeMenu={closeMenu} />}
        </div>
    );
}
