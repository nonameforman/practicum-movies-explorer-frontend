import './MoviesCard.css';
import { convertTime } from '../../utils/helpers';
import { useLocation } from 'react-router-dom';


export const MoviesCard = ({ name, image, duration, handleSave, isSaved, handleDelete, trailerLink }) => {

    const correctDuration = convertTime(duration);

    let location = useLocation();

    return (
        <div className='card'>
                 <div className={`card__container ${location.pathname==='/saved-movies' && 'card__container_sm'}`}>
                    <a href={trailerLink} target='blank'>
                        <img className='card__image' src={image} alt={name} />
                    </a>
                    {isSaved 
                        ?
                        <button className={`card__delete-button opacity transition ${location.pathname==='/saved-movies' && 'card__delete-button_cross'}`} type='button' onClick={handleDelete}>
                            <div className={`card__symbol ${location.pathname==='/saved-movies' && 'card__symbol_cross'}`}></div>
                        </button> 
                        :   
                        <button className='card__save-button opacity transition' type='button' onClick={handleSave}>Сохранить</button>
                    }
                </div>
            <div className='card__description'>
                <p className='card__title'>
                    {name}
                </p>
                <div className='card__duration'>
                    <p className='card__duration-text'>
                        {correctDuration}
                    </p>
                </div>
            </div>
        </div>
    );
}