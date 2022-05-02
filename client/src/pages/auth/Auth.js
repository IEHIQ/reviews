import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './auth.sass';

function Chooser() {
    return (
        <div className='card'>
            <Link className='form-button register m b' to='register'>Зарегистрироваться</Link>
            <Link className='form-button login m b' to='login'>Войти</Link>
        </div>
    )
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '', password: '', isLoginValid: false, isPasswordValid: false };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginChange(event) {
        // 5-20 lettres, numbers or _ symbols for login
        let valid = /^\w{5,20}$/.test(event.target.value) 
        if (!valid) {
            // incorrect popup
            // console.log(`Incorrect login!`);
        }
        this.setState({ isLoginValid : valid });
        this.setState({ login : event.target.value });
    }

    handlePasswordChange(event) {
        // 8-32 letters, numbers or special symbols for password
        let valid = /^[\w.,!@#$%^&*]{8,32}$/.test(event.target.value);
        if (!valid) {
            // incorrect popup
            // console.log(`Incorrect password!`);
        }
        this.setState({ isPasswordValid : valid });
        this.setState({ password : event.target.value });
    }

    handleSubmit(event) {
        console.log(`Логин: ${this.state.login}, Пароль: ${this.state.password}`);
        event.preventDefault();
    }

    render() {
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <label className='form-label l b'>Вход</label>
                <input type='text' className={ `form-text m ${ !this.state.isLoginValid && 'error' }` } id='text-login' value={ this.state.login } placeholder='Логин' onChange={this.handleLoginChange} />
                <input type='text' className={ `form-text m ${ !this.state.isPasswordValid && 'error' }` } id='text-password' value={ this.state.password } placeholder='Пароль' onChange={this.handlePasswordChange} />
                <input type="submit" className='form-button m b' disabled={ !this.state.isLoginValid || !this.state.isPasswordValid } value="Войти" />
            </form>
        );
    }
}

function Register() {

    class FirstStep extends React.Component {
        constructor(props) {
            super(props);
            this.state = 
            { 
                login: '',
                password: '', 
                email: '',
                isBusinessman: false,  
                isLoginValid: false, 
                isPasswordValid: false,
                isEmailValid: false, 
            };

            this.handleLoginChange = this.handleLoginChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleBusinessmanChange = this.handleBusinessmanChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.onClick = this.onClick.bind(this);
        }

        handleLoginChange(event) {
            // 5-20 lettres, numbers or _ symbols for login
            let valid = /^\w{5,20}$/.test(event.target.value) 
            if (!valid) {
                // incorrect popup
                // console.log(`Incorrect login!`);
            }
            this.setState({ isLoginValid : valid });
            this.setState({ login : event.target.value });
        }
    
        handlePasswordChange(event) {
            // 8-32 letters, numbers or special symbols for password
            let valid = /^[\w.,!@#$%^&*]{8,32}$/.test(event.target.value);
            if (!valid) {
                // incorrect popup
                // console.log(`Incorrect password!`);
            }
            this.setState({ isPasswordValid : valid });
            this.setState({ password : event.target.value });
        }

        handleEmailChange(event) {
            // 8-32 letters, numbers or special symbols for password
            let valid = /^[\w.]{5,}@[\w]{3,}(\.[a-zA-Z]{2,})+$/.test(event.target.value);
            if (!valid) {
                // incorrect popup
                // console.log(`Incorrect password!`);
            }
            this.setState({ isEmailValid : valid });
            this.setState({ email : event.target.value });
        }

        handleBusinessmanChange(event) {
            this.setState({ isBusinessman : event.target.value })
        }

        handleSubmit(event) {
            console.log(`Логин: ${this.state.login}, 
            Пароль: ${this.state.password},
            Почта: ${this.state.email},
            Бизнесмен?: ${this.state.isBusinessman}`);
            event.preventDefault();
        }

        onClick() {
            this.setState( { isBusinessman : !this.state.isBusinessman }, 
                () => { console.log(`State changed. Now ${ this.state.isBusinessman }`) });
        }
    
        render() {
            return (
                <form className='card' onSubmit={this.handleSubmit}>
                    <label className='form-label l b'>Регистрация</label>
                    <input type='text' className={ `form-text m ${ !this.state.isLoginValid && 'error' }` } value={ this.state.login } placeholder='Логин' onChange={this.handleLoginChange} />
                    <input type='text' className={ `form-text m ${ !this.state.isPasswordValid && 'error' }` } value={ this.state.password } placeholder='Пароль' onChange={this.handlePasswordChange} />
                    <input type='text' className={ `form-text m ${ !this.state.isEmailValid && 'error' }` } value={ this.state.email } placeholder='Почта' onChange={this.handleEmailChange} />
                    {/* <label className='form-checkbox m'>
                        <input type='checkbox' className='toggle' name='business' value={ this.state.isBusinessman } onChange={this.handleBusinessmanChange} />
                        Я владею бизнесом
                    </label> */}
                    <button type='button' className={ `checkbox-button flex-center ${ this.state.isBusinessman && 'checked' }` } onClick={this.onClick} >
                        <p className='m'>Я владею бизнесом</p>
                    </button>
                    <input type="submit" className='form-button m b' disabled={ !this.state.isLoginValid || !this.state.isPasswordValid || !this.state.isEmailValid } value="Далее" />
                </form>
            );
        }
    }
    

    return (
        <div>
            <Routes>
                <Route path='' element = { <FirstStep /> }/>
                {/* 
                <Route path='second' element = { <SecondStep /> }/>
                <Route path='confirm' element = { <Confirmation /> }/>
                 */}
            </Routes>

            <Outlet />
        </div>
    );
}

function Auth(props) {
    return (
        <div className='page flex-center'>
            <Routes>
                <Route path='*' element = { <Chooser /> }/>
                <Route path='login' element = { <Login /> }/>
                <Route path='register' element = { <Register /> }/>
            </Routes>

            <Outlet />
        </div>
    );
}

export default Auth;