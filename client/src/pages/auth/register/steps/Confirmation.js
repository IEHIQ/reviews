import React from 'react';
import { Link } from 'react-router-dom';
import TextOutput from '../../../../components/TextOutput';

function Confirmation(props) {
    const { login, password, email, isBusinessman } = props.firstStepData;
    const { name, phone, bio, birthdate, profilePic, location, sex } = props.secondStepData;

    return (
        <div className='card flex-container flex-column'>
            <p className='form-label l b'>Подтверждение</p>

            <TextOutput label='Логин' value={ login }/>
            <TextOutput label='Пароль' value={ password }/>
            <TextOutput label='Почта' value={ email }/>
            <TextOutput label='Владеете бизнесом?' value={ isBusinessman ? 'Да' : 'Нет' }/>
            <TextOutput label='Имя' value={ name }/>
            <TextOutput label='Пол' value={ sex }/>
            <TextOutput label='Телефон' value={ phone }/>
            <TextOutput label='Дата рождения' value={ birthdate }/>
            <TextOutput label='Место проживания' value={ location }/>

            <Link 
                className='button form-element b back' 
                to='..'
            >
                Назад
            </Link>

            <Link 
                className='button form-element b' 
                to='proceed' 
                onClick={ props.onSubmit }
            >
                Подтвердить
            </Link>
        </div>
    );
}

export default Confirmation;