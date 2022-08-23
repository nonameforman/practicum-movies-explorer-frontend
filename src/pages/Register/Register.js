import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/Form.js';
import { Input } from '../../components/Input/Input.js';
import { Logo } from '../../components/Logo/Logo.js';
import { Submit } from '../../components/Submit/Submit.js';
import { useFormWithValidation } from '../../utils/hooks.js';
import { register, authorize } from '../../utils/auth';

export const Register = ({ handleLogin }) => {

    const navigate = useNavigate();
    
    const [status, setStatus] = useState(false);
    const [textStatus, setTextStatus] = useState('');

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.name && values.email && values.password) {
            const { name, email, password } = values;
            register(name, email, password).then((res) => {
                if (res) {
                    setStatus(true);
                    setTextStatus('Регистрацию прошли. По машинам...');
                    authorize(email, password).then(() => {
                        handleLogin();
                    })
                    setTimeout(() => {
                        navigate('/movies')
                    }, 2500);
                }
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
        <div className='register'>
            <div className='register__container'>
                <header className='register__header'>
                    <Logo />
                </header>
                <div className='register__form-block'>
                    <Form
                        name='register'
                        title='Добро пожаловать!'
                    >
                        <Input 
                            label='Имя'
                            name='name'
                            type='text'
                            minLength='2'
                            maxLength='30'
                            required
                            placeholder='Имя'
                            value={values.name || ''}
                            onChange={handleChange}
                            errorText={errors.name}
                            pattern='^[а-яА-ЯёЁa-zA-Z0-9/ /-]+$'
                        />
                        <Input 
                            label='E-mail'
                            name='email'
                            type='email'
                            required
                            placeholder='E-mail'
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
                            placeholder='Пароль'
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
                        buttonName='Зарегистрироваться'
                        linkText='Уже зарегистрированы?'
                        link='/signin'
                        linkName='Войти'
                    />
                </div>
            </div>
        </div>
    );
}
