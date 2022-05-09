import React, { useState } from 'react';
import HiddenInput from '../../../components/HiddenInput';
import TextInput from '../../../components/TextInput';
import './login.sass'

function Login(props) {

    const [login, setLogin] = useState(props.login && '');
    const [password, setPassword] = useState(props.password && '');
    const [isLoginValid, setLoginValidity] = useState(false);
    const [isPasswordValid, setPasswordValidity] = useState(false);

    function handleSubmit(e) {
        if (props.onSubmit)
            props.onSubmit(
                {   
                    login : login,
                    password : password
                }
            );
        e.preventDefault();
    }

    return (
        <div className='custom-form'>
            <p className='form-label l b'>Вход</p>
            <TextInput
                onChange={ (value)=>{ setLogin(value) } }
                handleValidity={ (validity) => { setLoginValidity(validity) } }
                regex={ props.loginRegex }
                type='text'
                placeholder='Логин'
                required={ true }
            />
            <HiddenInput 
                onChange={ (value)=>{ setPassword(value) } }
                handleValidity={ (validity) => { setPasswordValidity(validity) } }
                regex={ props.passwordRegex }
                placeholder='Пароль'
                required={ true }
            />
            <button 
                className='button form-element b'
                disabled={ !isLoginValid || !isPasswordValid }
                onClick={ handleSubmit }
            >
                Войти
            </button>
        </div>
    );
}

export default Login;