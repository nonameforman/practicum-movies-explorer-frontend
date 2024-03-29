import './SavedMovies.css'
import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { MoviesCard } from '../MoviesCard/MoviesCard.js';
import { Preloader } from '../Preloader/Preloader.js';
import { useFetching } from '../../utils/hooks.js';
import { filterFilms } from '../../utils/helpers.js';
import api from '../../utils/MainApi.js';

export const SavedMovies = () => {
    const [filter, setFilter] = useState({ query: '', shortFilm: false });
    const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
    const [savedAllMovies, setSavedAllMovies] = useState([]);
    const [errMessage, setErrMessage] = useState('');

        const [fetchSavedMovies, isLoading] = useFetching(async () => {
            await api.getSavedMovies(localStorage.getItem('token'))
                .then(res => {
                    setSavedAllMovies(res)
                    setSavedFilteredMovies(res)
                    !savedFilteredMovies.length && setErrMessage('Ничего не найдено');
            })
            .catch((err) => {
                console.log(`Ошибка при получении фильмов с сервера ${err}`);
                setErrMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
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
            .catch((err) => {
                console.log(`Ошибка при удалении фильма ${err}`)
            })
    }

    return (
        <main className='main'>
            <SearchForm filter={filter} handleSubmit={handleSubmit} setFilter={setFilter} 
            setFilteredMovies={setSavedFilteredMovies} allMovies={savedAllMovies} limit={savedAllMovies.length}/>
            {isLoading
                ?
                <Preloader />
                :
                <MoviesCardList>
                    {!Boolean(savedFilteredMovies.length) && <p className='main__error'>{errMessage}</p>}
                    {savedFilteredMovies.map(movie => (
                        <MoviesCard
                            name={movie.nameRU}
                            image={movie.image}
                            duration={movie.duration}
                            key={movie.movieId}
                            isSaved={true}
                            handleDelete={() => handleDelete(movie._id, localStorage.getItem('token'))}
                            trailerLink={movie.trailerLink}
                    />))}
                </MoviesCardList>
            }
        </main>
    );
}
