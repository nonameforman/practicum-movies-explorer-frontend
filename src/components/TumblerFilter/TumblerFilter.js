import './TumblerFilter.css';

export const TumblerFilter = () => {
    return (
        <label className='filter__label '>
            <input type='checkbox' className='filter__input' />
            <span className='filter__tumbler' />
        </label>
    );
}
