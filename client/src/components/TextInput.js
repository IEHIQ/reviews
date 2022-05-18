import React, { useState } from "react";
import './input.sass';
// import clsx from 'clsx';

function TextInput(props) {
    
    const [value, setValue] = useState( props.value || '' );

    function handleChange(e) {
        setValue(e.target.value);
        if (props.onChange)
            props.onChange(e.target.value);
        if (props.handleValidity)
            props.handleValidity(e.target.validity.valid);
    }

    return(
        <input 
            className='input form-element' 
            type={ props.type || 'text' }
            pattern={ props.regex } 
            onChange={ handleChange } 
            placeholder={ props.placeholder }
            required={ props.required }
            value={ value }
        />
    );
}

export default TextInput;