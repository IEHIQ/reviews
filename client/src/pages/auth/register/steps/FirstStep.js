import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../../../../components/checkbox/Checkbox';
import HiddenInput from '../../../../components/HiddenInput';
import TextInput from '../../../../components/TextInput';
import '../../../../common.sass';
import ValidatePropRegex from '../../../../components/PropValidator';

function FirstStep(props) {
    const [login, setLogin] = useState(props.data.login || '');
    const [password, setPassword] = useState(props.data.password || '');
    const [email, setEmail] = useState(props.data.email || '');
    const [isBusinessman, setBusiness] = useState(props.data.isBusinessman || false);

    const [isLoginValid, setLoginValidity] = useState(ValidatePropRegex(props.loginRegex, login));
    const [isPasswordValid, setPasswordValidity] = useState(ValidatePropRegex(props.passwordRegex, password));
    const [isEmailValid, setEmailValidity] = useState(ValidatePropRegex(props.emailRegex, email));

    function handleSubmit() {
        if (props.onSubmit)
            props.onSubmit(
                {
                    login : login,
                    password : password,
                    email : email,
                    isBusinessman : isBusinessman
                }
            );
    }

    return (
        <div className='custom-form flex-container flex-column'>
            <p className='form-label l b'>Регистрация</p>
            <TextInput 
                onChange={ (value)=>{ setLogin(value) } }
                handleValidity={ (validity) => { setLoginValidity(validity) } }
                regex={ props.loginRegex }
                type='text'
                placeholder='Логин'
                required={ true }
                value={ login }
            />
            <HiddenInput 
                onChange={ (value)=>{ setPassword(value) } }
                handleValidity={ (validity) => { setPasswordValidity(validity) } }
                regex={ props.passwordRegex }
                placeholder='Пароль'
                required={ true }
                value={ password }
            />
            <TextInput 
                onChange={ (value)=>{ setEmail(value) } }
                handleValidity={ (validity) => { setEmailValidity(validity) } }
                regex={ props.emailRegex }
                placeholder='Почта'
                required={ true }
                value={ email }
            />
            <Checkbox 
                text='Я владелец бизнеса'
                onToggle={ (status) => { setBusiness(status) } }
                status={ isBusinessman }
            />
            <Link className={ clsx('button form-element flex-fill b', (!isLoginValid || !isPasswordValid || !isEmailValid) && 'link-disabled' )} to='second' onClick={ handleSubmit }>Далее</Link>
        </div>
    );
}

export default FirstStep;