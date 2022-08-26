import './Movies.css';
import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { MoviesCard } from '../MoviesCard/MoviesCard.js';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton.js';
import { getMovies } from '../../utils/MoviesApi.js';
import { filterFilms } from '../../utils/helpers.js';
import { Preloader } from '../Preloader/Preloader.js';
import { useFetching, useLimit, useLocalStorage} from '../../utils/hooks.js';
import api from '../../utils/MainApi';

const displayWidth = window.innerWidth;

export const Movies = () => {
    
    const [filter, setFilter] = useLocalStorage('filter', { query: '', shortFilm: false });
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [savedIdMovies, setSavedIdMovies] = useLocalStorage('idMovies', {});
    const [isSearched, setIsSearched] = useState(false);
    
    const [allMovies, setAllMovies] = useLocalStorage('movies', []);
    const [limit, countAddedCard, onChangeLimit] = useLimit(displayWidth);
    const [errMessage, setErrMessage] = useState('');

    const [fetchMovies, isLoading] = useFetching(async () => {

        await getMovies()
            .then(res => {
                const allFilteredFilms = filterFilms(res, filter)
                setAllMovies(allFilteredFilms)
                !allFilteredFilms.length && setErrMessage('Ничего не найдено')
                setFilteredMovies(allFilteredFilms.slice(0, limit))
                setIsSearched(true)
            })
            .catch((err) => {
                console.log(`Ошибка при получении фильмов из фильмотеки ${err}`)
                setErrMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
            });
        
        await api.getSavedMovies(localStorage.getItem('token'))
            .then(res => {
                const idMovies = res.reduce((prev, item) => {
                    return {...prev, [item.movieId]: item._id}
                }, {})
                setSavedIdMovies(idMovies)
                })
            .catch((err) => {
                console.log(`Ошибка при получении фильмов с сервера ${err}`)
            });
    });
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies()
    }

    const handleSave = (movie, token) => {
        api.saveMovie(movie, token)
            .then(res => {
                    setSavedIdMovies(prev => ({...prev, [res.movieId]: res._id}))
                })
                .catch((err) => {
                    console.log(`Ошибка при добавлении фильма в избранное ${err}`)
                });
        }
    

    const handleDelete = (id, token) => {
        api.deleteMovie(id, token)
            .then(() => {
                setSavedIdMovies(prev => {
                    return Object.entries(prev)
                        .filter(item => item[1] !== id)
                        .reduce((prev, item) => ({...prev, [item[0]]: item[1]}), {})
                })
            })
            .catch((err) => {
                console.log(`Ошибка при удалении фильма ${err}`)
            })
    }

    const handleLoadMore = () => {
        setFilteredMovies(prev => {
            return [...prev, ...allMovies.slice(prev.length, prev.length + countAddedCard)]
        })
    }

    useEffect(() => {
        function onChangeSize() {
            onChangeLimit(window.innerWidth)
        }
        window.addEventListener('resize', onChangeSize)
        return () => window.removeEventListener('resize', onChangeSize)
    }, [onChangeLimit])

    useEffect(() => {
        const allFilteredFilms = filterFilms(allMovies, filter)
        setFilteredMovies(allFilteredFilms.slice(0, limit))
    }, [])

    return (
        <main className='main'>
            <SearchForm handleSubmit={handleSubmit} setFilter={setFilter} filter={filter} setFilteredMovies={setFilteredMovies} allMovies={allMovies} limit={limit}/>
            {isLoading
                ?
                <Preloader />
                :
                <>
                    {(isSearched || filteredMovies.length) &&
                        <>
                        <MoviesCardList>
                            {!Boolean(filteredMovies.length) && <p className='main__error'>{errMessage}</p>}
                            {filteredMovies.map(movie => (
                                <MoviesCard
                                    name={movie.nameRU}
                                    image={`https://api.nomoreparties.co${movie.image.url}`}
                                    duration={movie.duration}
                                    isSaved={savedIdMovies[movie.id]}
                                    key={movie.id}
                                    handleSave={() => handleSave(movie, localStorage.getItem('token'))}
                                    handleDelete={() => handleDelete(savedIdMovies[movie.id], localStorage.getItem('token'))}
                                    trailerLink={movie.trailerLink}
                                />
                            ))}
                        </MoviesCardList>
                        {filteredMovies.length < allMovies.length && <LoadMoreButton onClick={handleLoadMore} />}
                        </>
                    }
                </>
            }
        </main>
    );
}

