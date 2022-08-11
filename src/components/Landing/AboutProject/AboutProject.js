import './AboutProject.css'

export const AboutProject = () => {
    return (
        <section className='about-project' id='project'>
            <h2 className='about-project__title'>
                О проекте
            </h2>
            <div className='about-project__container'>
                <div className='about-project__block'>
                    <h3 className='about-project__subtitle'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='about-project__description'>
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='about-project__block'>
                    <h3 className='about-project__subtitle'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    
                    <p className='about-project__description'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='about-project__chart'>
                <div className='about-project__chart-element about-project__chart-element_green'>
                    1 неделя
                </div>
                <div className='about-project__chart-element about-project__chart-element_grey'>
                    4 недели
                </div>
                <div className='about-project__chart-element'>
                    Back-end
                </div>
                <div className='about-project__chart-element'>
                    Front-end
                </div>
            </div>
        </section>
    );
}
