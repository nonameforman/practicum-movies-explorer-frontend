import './Header.css';
import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo.js';

export const Header = ({children}) => {

    let location = useLocation();
    
    return (
        <header className={`header ${location.pathname==='/' ? `header_landing` : ``}`}>
            <Logo />
            {children}
        </header>
    );
}
