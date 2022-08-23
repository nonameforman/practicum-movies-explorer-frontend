import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { MoviesCard } from '../MoviesCard/MoviesCard.js';
import { Preloader } from '../Preloader/Preloader.js';
import { useFetching } from '../../utils/hooks.js';
import { filterFilms } from '../../utils/helpers.js';
import api from '../../utils/MainApi.js';
import { token } from '../../utils/constants';

export const SavedMovies = () => {
    const [filter, setFilter] = useState({ query: '', shortFilm: false });
    const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
    const [savedAllMovies, setSavedAllMovies] = useState([]);

        const [fetchSavedMovies, isLoading] = useFetching(async () => {
            await api.getSavedMovies(token)
                .then(res => {
                    setSavedAllMovies(res)
                    setSavedFilteredMovies(res)
            })
            .catch((err) => {
                console.log(`Ошибка при получении фильмов с сервера ${err}`)
            });
        });
    
    useEffect(() => {
        fetchSavedMovies()
    }, []);

    function handleSubmit(e) {
        e.preventDefault()
        setSavedFilteredMovies(filterFilms(savedAllMovies, filter))
    }

    const handleDelete = (id, token) => {
        api.deleteMovie(id, token)
            .then(() => {
                setSavedFilteredMovies(prev => prev.filter(item => item._id !== id))
                setSavedAllMovies(prev => prev.filter(item => item._id !== id))
            })
    }

    return (
        <main className='main'>
            <SearchForm filter={filter} handleSubmit={handleSubmit} setFilter={setFilter}/>
            {isLoading
                ?
                <Preloader />
                :
                <MoviesCardList>
                    {savedFilteredMovies.map(movie => (
                        <MoviesCard
                            name={movie.nameRU}
                            image={movie.image}
                            duration={movie.duration}
                            key={movie.movieId}
                            isSaved={true}
                            handleDelete={() => handleDelete(movie._id, token)}
                            trailerLink={movie.trailerLink}
                    />))}
                </MoviesCardList>
            }
        </main>
    );
}
