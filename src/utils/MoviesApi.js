import { BEATFILM_MOVIES_URL } from './constants';

const handleResponse = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Error ${res.status}`)
}

export const getMovies = () => {
    return fetch(BEATFILM_MOVIES_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(handleResponse)
}