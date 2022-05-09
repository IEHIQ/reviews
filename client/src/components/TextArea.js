import React, { useState } from "react";
import './input.sass';
import clsx from 'clsx';

function TextArea(props) {

    const [isValid, setValidity] = useState(props.isValid && true);
    const [value, setValue] = useState( props.value || '' );    

    function handleChange(e) {
        setValue(e.target.value);
        if (props.onChange)
            props.onChange(e.target.value);
        if (props.validate)
            setValidity(props.validate(e.target.value));
    }

    return(
        <textarea 
            className={ clsx('input nonresizable form-element flex-fill', props.validate && !isValid && 'error', ) }  
            type='text' 
            onChange={ handleChange } 
            placeholder={ props.placeholder }
            value={ value }
        />
    );
}

export default TextArea;