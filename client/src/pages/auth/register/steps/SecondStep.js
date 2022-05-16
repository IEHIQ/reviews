import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../common.sass';
import TextInput from '../../../../components/TextInput';
import TextArea from '../../../../components/TextArea';
import Select from '../../../../components/select/Select';
import ValidatePropRegex from '../../../../components/PropValidator';
import ImageInput from '../../../../components/imageInput/ImageInput';

function SecondStep(props) {
    const [name, setName] = useState(props.data.name || '');
    const [phone, setPhone] = useState(props.data.phone || '');
    const [bio, setBio] = useState(props.data.bio || '');
    const [birthdate, setBirthdate] = useState(props.data.birthdate || '');
    const [profilePic, setProfilePic] = useState(props.data.profilePic || '');
    const [location, setLocation] = useState(props.data.location || '');
    const [sex, setSex] = useState(props.data.sex || '');

    const [isNameValid, setNameValidity] = useState(ValidatePropRegex(props.nameRegex, name));
    const [isPhoneValid, setPhoneValidity] = useState(ValidatePropRegex(props.phoneRegex, phone));
    const [isBirthdateValid, setBirthdateValidity] = useState(ValidatePropRegex(props.birthdateRegex, birthdate));
    const [isSexValid, setSexValidity] = useState(false);

    const sexOptions = [
        { id : 0, value : 'm', text : 'Мужской'},
        { id : 1, value : 'w', text : 'Женский'},
        { id : 2, value : 'n', text : 'Предпочитаю не сообщать'}
    ];

    function handleSubmit(data) {
        if (props.onSubmit)
            props.onSubmit(
                {
                    name : name,
                    phone : phone,
                    bio : bio,
                    birthdate : birthdate,
                    location : location,
                    profilePic : profilePic,
                    sex : sex
                }
            );
    }

    function handleNameChange(value) {
        setName(value);
    }

    function handlePhoneChange(value) {
        setPhone(value);
    }

    function handleLocationChange(value) {
        setLocation(value);
    }

    function handleBirthdateChange(value) {
        setBirthdate(value);
    }

    function handleSexChange(value) {
        setSex(value);
    }

    function handleBioChange(value) {
        setBio(value);
    }

    function handleProfilePicChange(value) {
        setProfilePic(value);
    }

    function handleNameValidity(validity) {
        setNameValidity(validity);
    }

    function handlePhoneValidity(validity) {
        setPhoneValidity(validity);
    }

    function handleBirthdateValidity(validity) {
        setBirthdateValidity(validity);
    }

    function handleSexValidity(validity) {
        setSexValidity(validity);
    }

    return (
        <div className='card flex-container flex-column'>
            <p className='form-label l b'>Регистрация</p>
            <div className='flex-container flex-row'>
                <div className='flex-container flex-column'>
                    <p className='field-label s'>Фотография профиля</p>
                    <div className='form-element input flex-container flex-center flex-fill s'>
                        <ImageInput 
                            src={ profilePic }
                            onChange={ handleProfilePicChange }
                        />
                    </div>
                </div>
                <div className='flex-container flex-column'>
                    <TextInput 
                        onChange={ handleNameChange }
                        handleValidity={ handleNameValidity }
                        regex={ props.nameRegex }
                        type='text'
                        placeholder='Имя'
                        required={ true }
                        value={ name }
                    />
                    <TextInput 
                        onChange={ handlePhoneChange }
                        handleValidity={ handlePhoneValidity }
                        regex={ props.phoneRegex }
                        type='text'
                        placeholder='Телефон'
                        required={ true }
                        value={ phone }
                    />
                    <TextInput 
                        onChange={ handleLocationChange }
                        type='text'
                        placeholder='Место жительства'
                        value={ location }
                    />
                    <p className='field-label s'>Дата рождения</p>
                    <TextInput 
                        onChange={ handleBirthdateChange }
                        handleValidity={ handleBirthdateValidity }
                        regex={ props.birthdateRegex }
                        type='date'
                        required={ true }
                        value={ birthdate }
                    />
                    <p className='field-label s'>Пол</p>
                    <Select
                        onChange={ handleSexChange }
                        handleValidity={ handleSexValidity }
                        options={ sexOptions }
                        required={ true }
                    />
                </div>
                <div className='flex-container flex-column'>
                    <TextArea 
                        placeholder='О себе'
                        onChange={ handleBioChange }
                        value={ bio }
                    />
                </div>
            </div>
            <Link 
                className={ clsx('button form-element flex-fill m b', (!isNameValid || !isPhoneValid || !isBirthdateValid || !isSexValid) && 'link-disabled') } 
                to='../confirmation' 
                onClick={ handleSubmit }
            >
                Далее
            </Link>
        </div>
    );
}

export default SecondStep;