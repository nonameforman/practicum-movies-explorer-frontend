import './MoviesCardList.css';

export const MoviesCardList = ({children}) => {
    return (
        <section className='cards-list'>
            <ul className='card-list__elements'>
                {children}
            </ul>
            <button type='button' className='cards-list__button opacity transition'>Еще</button>
        </section>
    );
}
