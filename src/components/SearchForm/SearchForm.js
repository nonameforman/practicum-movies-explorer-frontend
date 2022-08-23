import './SearchForm.css';
import { TumblerFilter } from '../TumblerFilter/TumblerFilter';

export const SearchForm = ({ handleSubmit, setFilter, filter }) => {

    const handleTumbler = (e) => {
        setFilter({...filter, shortFilm: e.target.checked})
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
                <TumblerFilter handleTumbler={handleTumbler}/>
                <p className='search__filter-name'>
                    Короткометражки
                </p>
            </div>
        </section>
    );
}
