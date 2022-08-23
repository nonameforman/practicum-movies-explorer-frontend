import './MoviesCardList.css';

export const MoviesCardList = ({ children }) => {
    return (
        <section className='cards-list'>
            <ul className='card-list__elements'>
                {children}
            </ul>
        </section>
    );
}
