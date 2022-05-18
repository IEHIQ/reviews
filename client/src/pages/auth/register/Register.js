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

    function onFirstStepSubmit(data) {
        console.log('First Step Data Changed : ', data);
        setFirstStepData(data);
    }

    function onSecondStepSubmit(data) {
        console.log('Second Step Data Changed : ', data);
        setSecondStepData(data);
    }

    return (
        <div>
            <Routes>
                <Route 
                    path='' 
                    element = { 
                        <FirstStep 
                            data={ firstStepData }
                            onSubmit={ onFirstStepSubmit }
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
                            onSubmit={ onSecondStepSubmit }
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