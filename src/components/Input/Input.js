import './Input.css';

export const Input = ({ label, errorText, ...rest  }) => {
    return (
        <div className='input'>
            <label className='input__label'>
                {label}
            </label>
            <input
                className='input__field'
                {...rest}
            />
            <span className='input__error input__error_visible'>
                {errorText}
            </span>
        </div>
    );
}
