import './Footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className='footer__container'>
                <p className='footer__copyright'>
                    &copy; 2022
                </p>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <a href='https://practicum.yandex.ru' target='blank' className='footer__link opacity transition'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__item'>
                        <a href='https://github.com/nonameforman' target='blank' className='footer__link opacity transition'>Github</a>
                    </li>
                    <li className='footer__item'>
                        <a href='https://t.me/grdv1' target='blank' className='footer__link opacity transition'>Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
