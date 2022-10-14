import './Profile.css';

export const Profile = ({ name }) => {
    return (
        <section className='profile'>
            <h1 className='profile__title'>
                 Привет, {name}!
            </h1>
            <form className='profile__form'>
                <div className='profile__form-field'>
                    <label className='profile__form-label'>
                         Имя
                    </label>
                    <input 
                        className='profile__form-input'
                        type='text'
                        value={name}
                        disabled
                    />
                </div>
                <div className='profile__form-field'>
                    <label className='profile__form-label'>
                         Почта
                    </label>
                    <input
                        className='profile__form-input'
                        type='text'
                        value='andrey@yandex.ru'
                    />
                </div>
            </form>
            {/* <div className='profile__buttons-block' id='profile-edit-logout'>
                <button className='profile__button opacity transition' type='button'>
                    Редактировать
                </button>
                <button className='profile__button profile__button_logout opacity transition' type='button'>
                    Выйти из аккаунта
                </button>
            </div> */}
            <div className='profile__buttons-block' id='profile-save'>
                <p className='profile__error profile__error_visible'>
                    При обновлении профиля произошла ошибка.
                </p>
                <button className='profile__save-button opacity transition' type='button'>
                    Сохранить
                </button>
            </div>
        </section>
    );
}
