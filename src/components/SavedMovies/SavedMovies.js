import { SearchForm } from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { MoviesCard } from '../MoviesCard/MoviesCard.js';
import { TumblerFilter } from '../TumblerFilter/TumblerFilter.js';
import { movies } from '../../utils/testCards.js';

export const SavedMovies = () => {

    const getMovies = (movies, i) => {
        return movies.map((movie) => {
            return <MoviesCard name={movie.name} image={movie.image} duration={movie.duration} key={i=i+1} />
        })
    }

    return (
        <main className='main'>
            <SearchForm>
                <TumblerFilter />
            </SearchForm>
            <MoviesCardList>
                {getMovies(movies, 0)}
            </MoviesCardList>
        </main>
    );
}
