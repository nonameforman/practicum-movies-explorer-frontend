import React from 'react';
import './MoviesCard.css';

export const MoviesCard = ({name, image, duration}) => {
    return (
        <div className='card'>
            <div className='card__container'>
                <img className='card__image' src={image} alt={name} />
                <button className='card__save-button opacity transition' type='button'>Сохранить</button>
                {/* <button className='card__delete-button opacity transition' type='button'>
                    <div className='card__checkmark'></div>
                </button> */}
            </div>
            <div className='card__description'>
                <p className='card__title'>
                    {name}
                </p>
                <div className='card__duration'>
                    <p className='card__duration-text'>
                        {duration}
                    </p>
                </div>
            </div>
        </div>
    );
}
