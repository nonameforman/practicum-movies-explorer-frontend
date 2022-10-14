import './Register.css';
import { Form } from '../../components/Form/Form.js';
import { Input } from '../../components/Input/Input.js';
import { Logo } from '../../components/Logo/Logo.js';
import { Submit } from '../../components/Submit/Submit.js';

export const Register = () => {
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
                            errorText=''
                            name='name'
                            type='text'
                            required
                            placeholder='Имя'
                        />
                        <Input 
                            label='E-mail'
                            errorText=''
                            name='email'
                            type='email'
                            required
                            placeholder='E-mail'
                        />
                        <Input 
                            label='Пароль'
                            errorText='Какая-то невалидность'
                            name='password'
                            type='password'
                            required
                            placeholder='Пароль'
                        />
                    </Form>
                    <Submit 
                        textError='Что-то пошло не так...'
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
