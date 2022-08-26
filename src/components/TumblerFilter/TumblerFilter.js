import './TumblerFilter.css';

export const TumblerFilter = ({ handleTumbler, isChecked }) => {

    return (
        <label className='filter__label '>
            <input checked={isChecked} type='checkbox' className='filter__input' onChange={handleTumbler}/>
            <span className='filter__tumbler' />
        </label>
    );
}
