import './Login.css';
import { Form } from '../../components/Form/Form.js';
import { Input } from '../../components/Input/Input.js';
import { Logo } from '../../components/Logo/Logo.js';
import { Submit } from '../../components/Submit/Submit.js';

export const Login = () => {
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
                            errorText='Какая-то невалидность'
                            name='email'
                            type='email'
                            required
                            placeholder='E-mail'
                        />
                        <Input 
                            label='Пароль'
                            errorText=''
                            name='password'
                            type='password'
                            required
                            placeholder='Пароль'
                        />
                    </Form>
                    <Submit 
                        textError=''
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
