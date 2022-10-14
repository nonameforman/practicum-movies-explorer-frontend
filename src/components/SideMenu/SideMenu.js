import { NavLink } from 'react-router-dom';
import './SideMenu.css';

const linkNotActive = 'side-menu__button opacity transition'
const linkActive = 'side-menu__button side-menu__button_active opacity transition'

export const SideMenu = ({ closeMenu }) => {

    
    return (
        <div className='side-menu'>
            <div className='side-menu__overlay' onClick={closeMenu}></div>
            <nav className='side-menu__list'>
                <div className='side-menu__container'>
                    <NavLink to='/' className={({isActive}) => isActive ? linkActive : linkNotActive}>Главная</NavLink>
                    <NavLink to='/movies' className={({isActive}) => isActive ? linkActive : linkNotActive}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className={({isActive}) => isActive ? linkActive : linkNotActive}>Сохраненные фильмы</NavLink>
                </div>
                <NavLink to='/profile' className='side-menu__account-button opacity transition'>Аккаунт</NavLink>
                <button className='side-menu__close-button opacity transition' type='button' onClick={closeMenu}></button>
            </nav>
        </div>
    );
}
