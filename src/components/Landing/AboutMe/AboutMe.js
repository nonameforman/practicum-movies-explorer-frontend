import avatar from '../../../images/avatar.jpg';
import './AboutMe.css';

export const AboutMe = () => {
    return (
        <section className='about-me' id='student'>
            <h2 className='about-me__title'>
                Студент
            </h2>
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>
                        Александр Гордеев
                    </h3>
                    <p className='about-me__about'>
                        Frontend-разработчик, 26 лет
                    </p>
                    <p className='about-me__description'>
                        Я родился на Дальнем Востоке в небольшом поселке Новобурейский, сейчас живу в Москве. Закончил Аэрокосмический факультет МАИ, на данный момент работаю по специальности. Больше года активно изучаю веб-разработку и хочу координально изменить свой вектор развития карьеры.
                    </p>
                    <ul className='about-me__links'>
                        <li><a href="https://t.me/grdv1" className='about-me__link opacity transition' target='blank'>Telegram</a></li>
                        <li></li>
                        <li><a href="https://github.com/nonameforman" className='about-me__link opacity transition' target='blank'>GitHub</a></li>
                        <li></li>
                    </ul>
                </div>
                <img className='about-me__image' src={avatar} alt='Фотография студента' />
            </div>
            
        </section>
    );
}
