import './SearchForm.css';
import { TumblerFilter } from '../TumblerFilter/TumblerFilter';
import { filterIsShort } from '../../utils/helpers';

export const SearchForm = ({ handleSubmit, setFilter, filter, setFilteredMovies, allMovies, limit }) => {

    const handleTumbler = (e) => {
        setFilter({...filter, shortFilm: e.target.checked})
        setFilteredMovies(filterIsShort(allMovies, e.target.checked).slice(0, limit))
    }

    const handleQuery = (e) => {
        setFilter({...filter, query: e.target.value})
    }
    
    return (
        <section className='search'>
            <form className='search__form' onSubmit={handleSubmit}>
                <input className='search__input' placeholder='Фильм' name='search' required onChange={handleQuery} value={filter.query}/>
                <button className='search__button opacity transition'>
                    <div className='search__button-line'></div>
                    <div className='search__button-arrow'></div>
                </button>
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
