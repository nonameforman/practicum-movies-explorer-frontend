import './TumblerFilter.css';

export const TumblerFilter = ({ handleTumbler }) => {

    return (
        <label className='filter__label '>
            <input type='checkbox' className='filter__input' onChange={handleTumbler}/>
            <span className='filter__tumbler' />
        </label>
    );
}
