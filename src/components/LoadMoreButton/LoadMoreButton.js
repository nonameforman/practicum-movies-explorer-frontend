import './LoadMoreButton.css';

export const LoadMoreButton = ({ onClick }) => {
    return (
        <div className="load-more__container">
            <button onClick={onClick} type='button' className='load-more__button opacity transition'>Еще</button>
        </div>
    );
}
