import './NotFound.css';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className='not-found'>
            <div className='not-found__container'>
                <h1 className='not-found__title'>
                    404
                </h1>
                <h2 className='not-found__subtitle'>
                    Страница не найдена
                </h2>
            </div>
            <button className='not-found__button opacity transition' type='button' onClick={()  => navigate(-1)}>Назад</button>
        </div>
    );
}
