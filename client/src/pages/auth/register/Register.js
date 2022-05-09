import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import Confirmation from './steps/Confirmation';

function Register(props) {

    const [firstStepData, setFirstStepData] = useState({
        login : '',
        password : '',
        email : '',
        isBusinessman : false
    });
    const [secondStepData, setSecondStepData] = useState({
        name : '',
        phone : '',
        bio : '',
        birthdate : '',
        profilePic : '',
        location :  '',
        sex : ''
    });

    return (
        <div>
            <Routes>
                <Route 
                    path='' 
                    element = { 
                        <FirstStep 
                            data={ firstStepData }
                            onSubmit={ (data) => { console.log('first data changed', data); setFirstStepData(data); } }
                            loginRegex={ props.loginRegex } 
                            passwordRegex={ props.passwordRegex }
                            emailRegex={ props.emailRegex }
                        /> 
                    }
                /> 
                <Route 
                    path='second' 
                    element = { 
                        <SecondStep 
                            data={ secondStepData }
                            onSubmit={ (data) => { console.log('second data changed', data); setSecondStepData(data); } }
                            nameRegex={ props.nameRegex }
                            phoneRegex={ props.phoneRegex }
                            birthdateRegex={ props.birthdateRegex }
                        /> 
                    }
                />
                <Route 
                    path='confirmation' 
                    element = { 
                        <Confirmation
                            firstStepData={ firstStepData }
                            secondStepData={ secondStepData }
                        /> 
                    }
                />
            </Routes>

            <Outlet />
        </div>
    );
}

export default Register;