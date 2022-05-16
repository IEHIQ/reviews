import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import Confirmation from './steps/Confirmation';
import ProtectedElement from '../../../components/ProtectedElement';

function Register(props) {
    const [firstStepPassed, setFirstStepPassed] = useState(false);
    const [secondStepPassed, setSecondStepPassed] = useState(false);

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
        setFirstStepData(data);
        setFirstStepPassed(true);
    }

    function onSecondStepSubmit(data) {
        setSecondStepData(data);
        setSecondStepPassed(true);
    }

    function onSubmit() {
        console.log({ firstStepData, secondStepData })
        if (props.onSubmit)
            props.onSubmit();
    }

    return (
        <div>
            <Routes>
                <Route 
                    path='' 
                    element={ 
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
                        <ProtectedElement 
                            element={
                                <SecondStep 
                                    data={ secondStepData }
                                    onSubmit={ onSecondStepSubmit }
                                    nameRegex={ props.nameRegex }
                                    phoneRegex={ props.phoneRegex }
                                    birthdateRegex={ props.birthdateRegex }
                                />
                            }
                            shouldRedirect={ !firstStepPassed }
                            redirectPath={ '..' }
                        />
                        // firstStepPassed === true ?
                        // <SecondStep 
                        //     data={ secondStepData }
                        //     onSubmit={ onSecondStepSubmit }
                        //     nameRegex={ props.nameRegex }
                        //     phoneRegex={ props.phoneRegex }
                        //     birthdateRegex={ props.birthdateRegex }
                        // /> :
                        // <Navigate replace to='..'/>
                    }
                />
                <Route 
                    path='confirmation' 
                    element = {
                        <ProtectedElement 
                            element={
                                <Confirmation
                                    firstStepData={ firstStepData }
                                    secondStepData={ secondStepData }
                                    onSubmit={ onSubmit }
                                /> 
                            }
                            shouldRedirect={ !secondStepPassed }
                            redirectPath={ '../second' }
                        />
                        // secondStepPassed === true ? 
                        // <Confirmation
                        //     firstStepData={ firstStepData }
                        //     secondStepData={ secondStepData }
                        // /> :
                        // <Navigate replace to='../second' />
                    }
                />
            </Routes>

            <Outlet />
        </div>
    );
}

export default Register;