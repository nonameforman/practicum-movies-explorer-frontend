import './Form.css';

export const Form = ({ children, name, title }) => {
    return (
        <form className='form' name={name}>
            <h1 className='form__title'>
                {title}
            </h1>
            {children}
        </form>
    );
}
