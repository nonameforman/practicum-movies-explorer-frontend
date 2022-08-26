import { SHORT_FILM_DURATION } from './constants';
import { getMovies } from '../utils/MoviesApi';

export const convertTime = (min) => {
    if (min < 60) {
        return `${min}м`
    } else if (min % 60) {
        return `${Math.floor(min/60)}ч ${(min%60)}м`
    } else {
        return `${Math.floor(min/60)}ч`
    }
}

export const filterFilms = (movies, filter, limit) => {
    let filteredMovies = []

    if (filter.shortFilm) {
        filteredMovies = movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
    } else {
        filteredMovies = [...movies]
    }
    
    return filteredMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(filter.query.toLowerCase()))
}

export const getCorrectMoviesList = async () => {

    const movies = await getMovies();
        
        const moviesList = movies.map(movie => {
            return {
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            };
        });

        return moviesList;
}