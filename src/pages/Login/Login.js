import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/Form.js';
import { Input } from '../../components/Input/Input.js';
import { Logo } from '../../components/Logo/Logo.js';
import { Submit } from '../../components/Submit/Submit.js';
import { useFormWithValidation } from '../../utils/hooks.js';
import { authorize } from '../../utils/auth';

export const Login = ({ handleLogin }) => {
    
    const navigate = useNavigate();

    const [status, setStatus] = useState(false);
    const [textStatus, setTextStatus] = useState('');

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.email && values.password) {
            const { email, password } = values;
            authorize(email, password).then(() => {
                    handleLogin();
                    setStatus(true);
                    setTextStatus('Вход выполнен. Идем смотреть фильмы ^_^');
                    setTimeout(() => {
                        navigate('/movies')
                    }, 2500);
            }).catch((err) => {
                console.error(err);
                setStatus(false);
                setTextStatus('Переданы некорректные данные. Попробуйте снова');
                setTimeout(() => {
                    setTextStatus('');
                }, 5000)
            })
        }
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <header className='login__header'>
                    <Logo />
                </header>
                <div className='login__form-block'>
                    <Form
                        name='login'
                        title='Рады видеть!'
                    >
                        <Input 
                            label='E-mail'
                            name='email'
                            type='email'
                            required
                            placeholder='E-mail: в формате user@domain.com'
                            value={values.email || ''}
                            onChange={handleChange}
                            errorText={errors.email}
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        />
                        <Input 
                            label='Пароль'
                            name='password'
                            type='password'
                            minLength='8'
                            maxLength='30'
                            required
                            placeholder='Пароль: от 8 до 30 символов'
                            value={values.password || ''}
                            onChange={handleChange}
                            errorText={errors.password}
                        />
                    </Form>
                    <Submit 
                        status={status}
                        textStatus={textStatus}
                        onSubmit={handleSubmit}
                        isDisabled={!isValid}
                        buttonName='Войти'
                        linkText='Ещё не зарегистрированы?'
                        link='/signup'
                        linkName='Регистрация'
                    />
                </div>
            </div>
        </div>
    );
}
