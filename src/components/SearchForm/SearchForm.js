import './SearchForm.css';
import { TumblerFilter } from '../TumblerFilter/TumblerFilter';
import { filterIsShort } from '../../utils/helpers';
import { useState } from 'react';

export const SearchForm = ({ handleSubmit, setFilter, filter, setFilteredMovies, allMovies, limit, isDisabledSearching }) => {

    const [error, setError] = useState('');

    const handleTumbler = (e) => {
        setFilter({...filter, shortFilm: e.target.checked})
        setFilteredMovies(filterIsShort(allMovies, e.target.checked).slice(0, limit))
    }

    const handleQuery = (e) => {
        setError(e.target.validationMessage)
        setFilter({...filter, query: e.target.value})
    }
    
    return (
        <section className='search'>
            <form className='search__form' onSubmit={handleSubmit} noValidate>
                <div className='search__container'>
                    <input
                        className='search__input'
                        placeholder='Фильм'
                        name='search'
                        required
                        onChange={handleQuery}
                        disabled={isDisabledSearching}
                        value={filter.query}
                    />
                    <button className={`search__button ${!isDisabledSearching && 'opacity transition'}`} disabled={isDisabledSearching}>
                        <div className='search__button-line'></div>
                        <div className='search__button-arrow'></div>
                    </button>
                </div>
                <span className='search__error search__error_visible'>
                    {error}
                </span>
            </form>
            <div className='search__filter'>
                <TumblerFilter isChecked={filter.shortFilm} handleTumbler={handleTumbler}/>
                <p className='search__filter-name'>
                    Короткометражки
                </p>
            </div>
        </section>
    );
}
