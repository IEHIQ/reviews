import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../common.sass';
import TextInput from '../../../../components/TextInput';
import TextArea from '../../../../components/TextArea';
import Select from '../../../../components/select/Select';
import ValidatePropRegex from '../../../../components/PropValidator';

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

    return (
        <div className='card flex-container flex-column'>
            <p className='form-label l b'>Регистрация</p>
            <div className='flex-container flex-row'>
                <div className='flex-container flex-column'>
                    <div className='flex-container flex-center form-element pic-picker input flex-fill s'>
                        {/* TODO */}
                        Profile Pic Upload
                    </div>
                </div>
                <div className='flex-container flex-column'>
                    <TextInput 
                        onChange={ (value)=>{ setName(value) } }
                        handleValidity={ (validity) => { setNameValidity(validity) } }
                        regex={ props.nameRegex }
                        type='text'
                        placeholder='Имя'
                        required={ true }
                        value={ name }
                    />
                    <TextInput 
                        onChange={ (value)=>{ setPhone(value) } }
                        handleValidity={ (validity) => { setPhoneValidity(validity) } }
                        regex={ props.phoneRegex }
                        type='text'
                        placeholder='Телефон'
                        required={ true }
                        value={ phone }
                    />
                    <TextInput 
                        onChange={ (value)=>{ setLocation(value) } }
                        type='text'
                        placeholder='Место жительства'
                        value={ location }
                    />
                    <p className='field-label s'>Дата рождения</p>
                    <TextInput 
                        onChange={ (value)=>{ setBirthdate(value) } }
                        handleValidity={ (validity) => { setBirthdateValidity(validity) } }
                        regex={ props.birthdateRegex }
                        type='date'
                        required={ true }
                        value={ birthdate }
                    />
                    <p className='field-label s'>Пол</p>
                    <Select
                        onChange={ (value)=>{ setSex(value.text) } }
                        handleValidity={ (validity) => { setSexValidity(validity) } }
                        options={
                            [
                                { value : 'm', text : 'Мужской'},
                                { value : 'w', text : 'Женский'},
                                { value : 'n', text : 'Предпочитаю не сообщать'}
                            ]
                        }
                        required={ true }
                    />
                </div>
                <div className='flex-container flex-column'>
                    <TextArea 
                        placeholder='О себе'
                        onChange={ (text) => { setBio(text) } }
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