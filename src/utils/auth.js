import { API_URL } from './constants';

const handleResponse = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Error ${res.status}`)
}

export const register = (name, email, password) => {
    return fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(handleResponse)
};

export const authorize = (email, password) => {
    return fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
    .then(handleResponse)
    .then((data) => {
        if (data.token) {
            localStorage.setItem('token', data.token)
            return data
        }
    })
};

export const getInfo = (token) => {
    return fetch(`${API_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(handleResponse)
    .then(data => data)
  }