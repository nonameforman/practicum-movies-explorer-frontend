import './Profile.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/hooks.js';
import api from '../../utils/MainApi';
import { token } from '../../utils/constants';


export const Profile = () => {

    const {userContext, setUserContext} = useContext(CurrentUserContext);

    const navigate = useNavigate();

    const [isEdit, setIsEdit] = useState(false);

    const [status, setStatus] = useState(false);
    const [textStatus, setTextStatus] = useState('');

    const { values, handleChange, isValid } = useFormWithValidation({name: userContext.name, email: userContext.email});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.name && values.email) {
            api.editProfile(values, token).then((data) => {
                setUserContext(data);
                setStatus(true);
                setTextStatus('Профиль обновлен');
                setTimeout(() => {
                    setTextStatus('');
                    setIsEdit(false);
                }, 2000);
            }).catch((err) => {
                setTextStatus(`${err}`)
            })
        }
    }

    const logOut = () => {
        localStorage.removeItem('token');
        setUserContext({});
        navigate('/');
    }

    return (
        <section className='profile'>
            <h1 className='profile__title'>
                 Привет, {userContext.name}!
            </h1>
            <form className='profile__form' onSubmit={handleSubmit}>
                <div className='profile__form-field'>
                    <label className='profile__form-label'>
                         Имя
                    </label>
                    <input 
                        className='profile__form-input'
                        name='name'
                        type='text'
                        value={values.name || ''}
                        disabled={!isEdit}
                        onChange={handleChange}
                        pattern='^[а-яА-ЯёЁa-zA-Z0-9/ /-]+$'
                    />
                </div>
                <div className='profile__form-field'>
                    <label className='profile__form-label'>
                         Почта
                    </label>
                    <input
                        className='profile__form-input'
                        name='email'
                        type='email'
                        value={values.email || ''}
                        disabled={!isEdit}
                        onChange={handleChange}
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    />
                </div>
            {isEdit
            ?
            <div className='profile__buttons-block' id='profile-save'>
                <p className={`profile__status ${status && 'profile__status_succes'}`}>
                    {textStatus}
                </p>
                <button 
                    className='profile__save-button opacity transition'
                    type='submit'
                    disabled={!isValid}
                    >
                    Сохранить
                </button>
            </div>
            :
            <div className='profile__buttons-block' id='profile-edit-logout'>
                <button className='profile__button opacity transition' type='button' onClick={() => setIsEdit(true)}>
                    Редактировать
                </button>
                <button 
                    className='profile__button profile__button_logout opacity transition'
                    type='button'
                    onClick={logOut}
                    >
                    Выйти из аккаунта
                </button>
            </div>
            }
            </form>
        </section>
    );
}
