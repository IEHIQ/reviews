import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Chooser from './chooser/Chooser';
import Login from './login/Login';
import Register from './register/Register';

const LOGIN_REGEX = '^\\w{5,20}$';
const PASSWORD_REGEX = '^[\\w.,!@#$%^&*]{8,32}$';
const EMAIL_REGEX = '^[\\w.]{5,}@[\\w]{3,}(\\.[a-zA-Z]{2,})+$';
const PHONE_REGEX = '^((\\+7)|8)[0-9]{10}$';
const NAME_REGEX = '^([A-Za-zА-Яа-я]+ ?)+[A-Za-zА-Яа-я]$';
const BIRTHDATE_REGEX = '\\d{4}-\\d{2}-\\d{2}';

function onSubmit(data) {
    console.log(data);
}

function Auth(props) {
    return (
        <div className='page flex-container flex-center'>
            <Routes>
                <Route 
                    path='*' 
                    element = { <Chooser /> }
                />

                <Route 
                    path='login/*' 
                    element = { 
                        <Login 
                            onSubmit={ onSubmit } 
                            loginRegex={ LOGIN_REGEX } 
                            passwordRegex={ PASSWORD_REGEX }
                        /> 
                    }
                />

                <Route 
                    path='register/*' 
                    element = { 
                        <Register 
                            onSubmit={ onSubmit }
                            loginRegex={ LOGIN_REGEX } 
                            passwordRegex={ PASSWORD_REGEX }
                            emailRegex={ EMAIL_REGEX }
                            phoneRegex={ PHONE_REGEX }
                            nameRegex={ NAME_REGEX }
                            birthdateRegex={ BIRTHDATE_REGEX }
                        /> 
                    }
                />
            </Routes>

            <Outlet />
        </div>
    );
}

export default Auth;