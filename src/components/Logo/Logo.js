import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const Logo = () => {
    return (
        <Link to='/'>
                <img className='logo opacity transition' src={logo} alt='Логотип сайта'/>
        </Link>
    );
}
