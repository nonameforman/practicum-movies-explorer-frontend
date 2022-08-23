import { API_URL } from './constants';

class Api {
    constructor({ address, headers }) {
        this._address = address;
        this._headers = headers;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Error ${res.status}`)
    }

    editProfile(data, token) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email
            })
        })
        .then((res) => this._handleResponse(res))
    }

    getSavedMovies(token) {
        return fetch(`${this._address}/movies`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then((res) => this._handleResponse(res))
    }


    saveMovie(movie, token) {

        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            // body: JSON.stringify(movie),
            body: JSON.stringify({
                country: movie.country || 'unknown',
                director: movie.director || 'unknown',
                duration: movie.duration || 0,
                year: movie.year || 'unknown',
                description: movie.description || 'unknown',
                image: `https://api.nomoreparties.co${movie.image.url}` || 'https://ae01.alicdn.com/kf/Uc2dae3c22a2340778b81db6c70954d92A.jpg',
                trailerLink: movie.trailerLink || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` || 'https://truth.bahamut.com.tw/s01/201909/138b0e57e4f3ed527940cc3ab34082e5.PNG',
                movieId: movie.id,
                nameRU: movie.nameRU || 'unknown',
                nameEN: movie.nameEN || 'unknown',
            })
        })
        .then((res) => this._handleResponse(res))
    }

    deleteMovie(movieId, token) {
        return fetch(`${this._address}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then((res) => this._handleResponse(res))
    }
}

const api = new Api({
    address: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api;