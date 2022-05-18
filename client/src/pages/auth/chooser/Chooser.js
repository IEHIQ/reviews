import React from 'react';
import { Link } from 'react-router-dom';

function Chooser() {
    return (
        <div className='card flex-container flex-column'>
            <Link className='button form-element m b' to='register'>Зарегистрироваться</Link>
            <Link className='button form-element m b' to='login'>Войти</Link>
        </div>
    )
}

export default Chooser;