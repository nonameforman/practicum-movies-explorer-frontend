import './Submit.css';
import { Link } from 'react-router-dom';

export const Submit = ({ status, textStatus, onSubmit, isDisabled, buttonName, linkText, link, linkName }) => {
    return (
        <div className='submit'>
            <p className={`submit__status ${status && 'submit__status_succes'}`}>
                {textStatus}
            </p>
            <button className={`submit__button ${!isDisabled && 'opacity transition'}`} type='submit' onClick={onSubmit} disabled={isDisabled}>
                {buttonName}
            </button>
            <p className='submit__link-text'>
                {linkText} <Link className='submit__link opacity transition' to={link}>{linkName}</Link>
            </p>
        </div>
    );
}
