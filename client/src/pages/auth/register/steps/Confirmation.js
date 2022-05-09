import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Confirmation(props) {
    return (
        <div className='card flex-container flex-column'>
            <div className='form-element'>
                <p>Логин : { props.firstStepData.login }</p>
                <p>Пароль : { props.firstStepData.password }</p>
                <p>Почта : { props.firstStepData.email }</p>
                <p>Владеете бизнесом : { props.firstStepData.isBusinessman ? 'Да' : 'Нет' }</p>
                <p>Имя : { props.secondStepData.name }</p>
                <p>Пол : { props.secondStepData.sex }</p>
                <p>Телефон : { props.secondStepData.phone }</p>
                <p>Дата рождения : { props.secondStepData.birthdate }</p>
                <p>Место проживания : { props.secondStepData.location }</p>
            </div>
            <Link 
                className='button form-element b' 
                to='..'
            >
                Назад
            </Link>

            <Link 
                className='button form-element b' 
                to='proceed' 
                onClick={ props.handleSubmit }
            >
                Подтвердить
            </Link>
        </div>
    );
}

export default Confirmation;