import './SearchForm.css';

export const SearchForm = ({children}) => {
    return (
        <section className='search'>
            <form className='search__form'>
                <input className='search__input' placeholder='Фильм' />
                <button className='search__button opacity transition'>
                    <div className='search__button-line'></div>
                    <div className='search__button-arrow'></div>
                </button>
            </form>
            <div className='search__filter'>
                {children}
                <p className='search__filter-name'>
                    Короткометражки
                </p>
            </div>
        </section>
    );
}
