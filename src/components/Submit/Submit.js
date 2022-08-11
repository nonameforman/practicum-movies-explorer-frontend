import { Link } from 'react-router-dom';
import './Submit.css';

export const Submit = ({ textError, buttonName, linkText, link, linkName }) => {
    return (
        <div className='submit'>
            <p className='submit__error'>
                {textError}
            </p>
            <button className='submit__button opacity transition' type='button'>
                {buttonName}
            </button>
            <p className='submit__link-text'>
                {linkText} <Link className='submit__link opacity transition' to={link}>{linkName}</Link>
            </p>
        </div>
    );
}
