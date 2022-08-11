import './Portfolio.css';

export const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>
                Портфолио
            </h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item opacity transition'>
                    <a href='https://github.com/nonameforman/how-to-learn' target='blank' className='portfolio__link'>
                        <p className='portfolio__link-name'>
                            Статичный сайт
                        </p>
                        <p className='portfolio__link-pointer'>&#8599;</p>
                    </a>
                </li>
                <li className='portfolio__item opacity transition'>
                    <a href='https://github.com/nonameforman/russian-travel' target='blank' className='portfolio__link'>
                        <p className='portfolio__link-name'>
                            Адаптивный сайт
                        </p>
                        <p className='portfolio__link-pointer'>&#8599;</p>
                    </a>
                </li>
                <li className='portfolio__item opacity transition'>
                    <a href='https://github.com/nonameforman/mesto-react' target='blank' className='portfolio__link'>
                        <p className='portfolio__link-name'>
                            Одностраничное приложение
                        </p>
                        <p className='portfolio__link-pointer'>&#8599;</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}
