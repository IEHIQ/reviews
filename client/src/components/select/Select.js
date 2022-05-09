import React, { useState } from "react";
// import clsx from 'clsx';

function Select(props) {
    
    function handleChange(e) {
        if (props.onChange)
            props.onChange(e.target.options[e.target.options.selectedIndex]);
        if (props.handleValidity)
            props.handleValidity(e.target.validity.valid);
    }

    return(
        <select 
            className="select form-element" 
            onChange={ handleChange }
            required={ props.required }
        >
            <option></option>
            { 
                props.options.map((item, index) => (
                    <option value={ item.value } key={ index }>{ item.text }</option>
                )) 
            }
        </select>
    );
}

export default Select;