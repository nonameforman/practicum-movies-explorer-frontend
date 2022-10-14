import './AuthNavigation.css';
import { Link } from 'react-router-dom';

export const AuthNavigation = () => {
    return (
        <nav className='auth-navigation'>
            <div className='auth-navigation__container'>
                <Link to='/signup' className='auth-navigation__button opacity transition'>Регистрация</Link>
                <Link to='/signin' className='auth-navigation__button auth-navigation__button_green opacity transition'>Войти</Link>
            </div>
        </nav>
    );
}